# PromptCraft ✨

PromptCraft is a context-aware AI image generation platform designed to make creativity more interactive, engaging, and accessible for young creators. The platform allows users to generate AI-generated artwork from natural language prompts while maintaining contextual continuity across multiple generations.

Unlike traditional text-to-image generators, PromptCraft remembers previous prompts during a session, enabling users to build visual stories step by step. This creates a more immersive and creative experience, especially for storytelling and imaginative world-building.

Developed as a Final Year B.Tech Computer Science Engineering project, PromptCraft combines modern frontend development, FastAPI backend architecture, prompt engineering, and generative AI APIs into a complete full-stack application.

---

## Features

### AI Image Generation
Generate unique images from simple text prompts using the FLUX.1 Schnell image generation model through the Hugging Face Inference API.

### Context-Aware Prompt Memory
PromptCraft maintains session-based memory and combines previous prompts with new ones to preserve scene continuity.

Example:

- Prompt 1: *A wizard standing in a dark forest*
- Prompt 2: *Now the wizard is fighting a dragon*

The second image is generated while considering the context from the first prompt.

### Interactive User Experience
The platform includes:
- Fantasy-themed UI design
- Animated effects and transitions
- Prompt suggestion chips
- Dynamic loading animations
- Responsive layout for all devices

### Session Persistence
Each user session is stored locally in the browser using localStorage, allowing contextual continuity even after page refreshes.

### Creative Prompt Suggestions
The platform provides:
- Fun AI-related facts
- Creative inspiration prompts
- Enhanced storytelling suggestions

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

### Backend
- Python
- FastAPI
- Uvicorn

### AI Integration
- Hugging Face Inference API
- FLUX.1 Schnell Model

### Additional Libraries
- Requests
- Base64
- CORSMiddleware

---

## Project Structure

```bash
PromptCraft/
│
├── main.py
├── requirements.txt
│
├── index.html
├── style.css
├── script.js
│
├── images/
│
├── LICENSE
└── README.md
```

---

## How It Works

1. The user enters a text prompt.
2. The frontend sends the prompt to the FastAPI backend.
3. The backend checks whether previous prompts exist for the current session.
4. If context exists, the backend combines the old and new prompts.
5. The combined prompt is sent to the Hugging Face Inference API.
6. The FLUX.1 Schnell model generates the image.
7. The generated image is returned and displayed on the frontend.

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/dsheenjani/promptcraft.git
cd promptcraft
```

---

### 2. Create a Virtual Environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

---

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Configure Hugging Face API Key

Create a `.env` file in the project root directory:

```env
HF_API_KEY=your_huggingface_api_key
```

Replace `your_huggingface_api_key` with your actual Hugging Face API key.

---

### 5. Run the Backend Server

```bash
python main.py
```

The backend server will start at:

```text
http://localhost:8000
```

---

### 6. Launch the Frontend

Open `index.html` in your browser.

For better development experience, use:
- VS Code Live Server
- Localhost hosting
- Any static web server

---

## Example Workflow

### Step 1
User enters:

```text
A magical castle floating in the sky
```

### Step 2
The AI generates the image.

### Step 3
User continues with:

```text
Now add a dragon flying around the castle
```

### Step 4
The backend combines both prompts to preserve continuity.

### Step 5
A contextually connected image is generated.

---

## Current Limitations

The current version of PromptCraft has a few limitations:

- Session memory is stored only in RAM
- No database integration
- No user authentication
- No prompt moderation or filtering
- No image history or gallery
- Limited scalability for large numbers of users

---

## Future Enhancements

Planned improvements include:

- User authentication system
- Cloud deployment
- Database integration
- Prompt moderation and child-safe filtering
- Image history and downloadable galleries
- Advanced prompt enhancement
- Image upload and ControlNet support
- Async request handling and caching
- Improved scalability and performance

---

## Educational Value

PromptCraft demonstrates practical implementation of concepts related to:

- Artificial Intelligence
- Prompt Engineering
- API Integration
- Frontend Development
- Backend Development
- Contextual Memory Systems
- Responsive Web Design
- Human-Computer Interaction

---

## Academic Context

This project was developed as a Final Year B.Tech Computer Science Engineering project focusing on generative AI systems and interactive user experiences.

---

## License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

## Acknowledgements

Special thanks to:
- Hugging Face
- FastAPI
- FLUX.1 Schnell
- Open-source AI and web development communities

---

## Author

Developed as a Final Year B.Tech Computer Science Engineering project exploring context-aware generative AI systems and creative human-computer interaction.
