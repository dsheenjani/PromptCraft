````markdown
# PromptCraft ✨  
### AI-Powered Context-Aware Image Generation Platform for Young Creators

PromptCraft is a fantasy-themed AI image generation platform designed to make creativity fun, interactive, and accessible for children and young creators.  

The platform transforms natural language prompts into visually rich AI-generated artwork while maintaining contextual memory across generations to create continuous visual storytelling experiences.

Built as a final-year B.Tech Computer Science project, PromptCraft combines modern frontend development, AI inference APIs, prompt engineering, and contextual session memory into a polished full-stack application.

---

# 🌟 Features

## 🎨 AI Image Generation
Generate unique AI artwork from simple text descriptions using the FLUX.1 Schnell image generation model through the Hugging Face Inference API.

## 🧠 Context-Aware Prompt Memory
PromptCraft remembers previous prompts within a session and combines them with new prompts to maintain story continuity.

### Example
- Prompt 1: *"A wizard in a forest"*
- Prompt 2: *"Now the wizard is fighting a dragon"*

The second image preserves contextual understanding from the first prompt.

---

## ✨ Fantasy-Themed User Experience
The interface is designed with:
- Magical glowing UI effects
- Wand-themed animations
- Fantasy typography
- Interactive suggestion chips
- Smooth transitions and hover effects

---

## 💡 Prompt Suggestions
Users can quickly experiment with curated creative prompts using interactive prompt chips.

---

## 📱 Fully Responsive Design
Optimized for:
- Desktop
- Tablet
- Mobile devices

---

## 🔄 Session Persistence
Session IDs are stored using browser localStorage, allowing contextual continuity even after page refreshes.

---

## 🧩 Dynamic Fun Facts & Creative Suggestions
After image generation, PromptCraft provides:
- AI-related fun facts
- Creative inspiration prompts
- Enhanced storytelling ideas

---

# 🏗️ System Architecture

```text
User Prompt
     ↓
Frontend (HTML/CSS/JavaScript)
     ↓
FastAPI Backend
     ↓
Session Context Manager
     ↓
Prompt Enhancement & Context Combination
     ↓
Hugging Face Inference API
     ↓
FLUX.1 Schnell Model
     ↓
Generated AI Image
     ↓
Frontend Rendering
```

---

# ⚙️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Backend
- Python
- FastAPI
- Uvicorn

## AI & APIs
- Hugging Face Inference API
- FLUX.1 Schnell Image Generation Model

## Additional Libraries
- Requests
- Base64
- CORSMiddleware

---

# 📂 Project Structure

```bash
PromptCraft/
│
├── main.py                 # FastAPI backend server
├── requirements.txt        # Python dependencies
│
├── index.html              # Main frontend page
├── style.css               # Styling and responsiveness
├── script.js               # Frontend logic and API calls
│
├── images/                 # UI assets and example images
│
└── README.md               # Project documentation
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/promptcraft.git
cd promptcraft
```

---

## 2️⃣ Create a Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

---

## 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4️⃣ Configure Hugging Face API Key

Create a `.env` file:

```env
HF_API_KEY=your_huggingface_api_key
```

Replace:

```text
your_huggingface_api_key
```

with your actual Hugging Face API key.

---

## 5️⃣ Run the Backend Server

```bash
python main.py
```

Backend will run on:

```text
http://localhost:8000
```

---

## 6️⃣ Launch Frontend

Open `index.html` in your browser.

For best results, use:
- VS Code Live Server
- Localhost hosting
- Static file server

---

# 🧠 How Context Memory Works

PromptCraft uses session-based contextual memory.

Each user receives a unique session ID stored in browser localStorage.

The backend maintains a session memory dictionary:

```python
session_memory = {}
```

When a new prompt is submitted:

```python
combined_prompt = f"{previous}, {prompt}"
```

This enables:
- Visual storytelling
- Scene continuity
- Character persistence
- Progressive world building

---

# 🔥 Example Workflow

## Step 1
User enters:

```text
A magical castle floating in the sky
```

## Step 2
AI generates image.

## Step 3
User continues:

```text
Now add a dragon flying around it
```

## Step 4
Backend combines prompts:

```text
A magical castle floating in the sky, Now add a dragon flying around it
```

## Step 5
AI generates contextually connected artwork.

---

# 📸 UI Highlights

## 🎭 Fantasy Visual Identity
- Animated magical sparkles
- Wand-themed loading effects
- Fantasy fonts
- Neon glow effects

---

## 🪄 Interactive Components
- Suggestion chips
- Smooth scrolling navigation
- Responsive menu
- Dynamic image reveal animations

---

## 📱 Responsive Layout
PromptCraft automatically adapts to:
- Mobile phones
- Tablets
- Large desktop displays

---

# 🔐 Current Limitations

The current prototype has some limitations:

- In-memory session storage
- No authentication system
- No database persistence
- No prompt moderation
- No rate limiting
- API key currently exposed in backend source
- Limited scalability for concurrent users

---

# 🚧 Future Enhancements

## 🧠 Advanced Prompt Engineering
- Automatic prompt enhancement
- Style templates
- Scene consistency improvements

---

## 🖼️ Image Upload + ControlNet
Allow users to upload reference images and generate AI-modified scenes.

### Example
- Upload castle image
- Generate dragon flying over it

---

## 👤 User Accounts
- Authentication system
- Saved galleries
- Prompt history

---

## ☁️ Cloud Deployment
Deploy using:
- Docker
- Render
- Railway
- AWS
- Vercel frontend hosting

---

## 🛡️ AI Safety Layer
- Prompt moderation
- Child-safe filtering
- Content restrictions

---

## ⚡ Performance Improvements
- Redis caching
- Async API requests
- GPU acceleration
- Queue-based processing

---

# 📚 Educational Value

PromptCraft demonstrates concepts from:
- Artificial Intelligence
- Prompt Engineering
- API Integration
- Frontend Development
- Backend Development
- Contextual Memory Systems
- Human-Computer Interaction
- Responsive Web Design

---

# 🎓 Academic Relevance

This project was developed as a Final Year B.Tech Computer Science Engineering project focused on:
- Applied AI systems
- Generative AI
- Interactive user experiences
- Context-aware applications

---

# 👨‍💻 Author

Developed by a Computer Science Engineering student passionate about:
- AI systems
- Generative models
- Human-centered interfaces
- Creative technology

---

# 📄 License

MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

# 🙌 Acknowledgements

Special thanks to:
- Hugging Face
- FastAPI
- FLUX.1 Schnell Model
- Open-source AI and web development communities

---

# ⭐ If You Like This Project

If you found PromptCraft interesting, consider:
- Starring the repository
- Forking the project
- Contributing improvements
- Sharing feedback

✨ *“Where imagination meets artificial intelligence.”*
````
