from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import requests
import base64
import uvicorn
import os
from dotenv import load_dotenv

app = FastAPI()
session_memory = {}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use the official Inference API for a reliable model

load_dotenv()

HF_API_KEY = os.getenv("HF_API_KEY")
MODEL_URL = "https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-schnell"
headers = {"Authorization": f"Bearer {HF_API_KEY}"}

@app.post("/generate-context-image")
async def generate_context_image(
    prompt: str = Form(...),
    session_id: str = Form("default")
):
    if not prompt.strip():
        raise HTTPException(status_code=400, detail="Prompt cannot be empty.")

    # Context handling
    previous = session_memory.get(session_id)
    combined_prompt = f"{previous}, {prompt}" if previous else prompt
    session_memory[session_id] = combined_prompt

    print(f"🧠 Generating: {combined_prompt}")

    # Call Hugging Face Inference API
    payload = {"inputs": combined_prompt}
    response = requests.post(MODEL_URL, headers=headers, json=payload, timeout=60)
    
    if response.status_code == 200:
        # The Inference API returns the raw binary image data
        image_base64 = base64.b64encode(response.content).decode('utf-8')
        return {
            "image": f"data:image/png;base64,{image_base64}",
            "prompt": combined_prompt,
            "session_id": session_id
        }
    else:
        # Check if the model is still loading (common with free API)
        error_data = response.json()
        print(f"Error: {error_data}")
        raise HTTPException(
            status_code=response.status_code, 
            detail=error_data.get("error", "Hugging Face API failed")
        )

@app.get("/")
async def root():
    return {"status": "Stable Diffusion API Ready"}

if __name__ == "__main__":
    # Ensure this matches your filename (e.g., main.py)
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)