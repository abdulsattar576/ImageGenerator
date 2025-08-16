# 🖼️ AI Text-to-Image Generator

An AI-powered web application that converts user-provided text prompts into images using the **MERN stack** and **Stability AI API**.  
No authentication or database storage is required — the backend directly returns the generated image, and users can **view or download** it.

---

## 🚀 Features
- Convert **text prompts → AI-generated images** using Stability API.  
- Backend built with **Node.js + Express.js**.  
- Frontend built with **React.js + Tailwind CSS**.  
- Simple workflow: user enters text → image generated → user can download.  
- Lightweight: no authentication, no database.  

---

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS  
- **Backend**: Node.js, Express.js  
- **AI Integration**: Stability API  

---

## 📂 Project Structure
```bash
project-root/
│── backend/           # Express.js backend
│   ├── routes/        # API endpoints
│   ├── controllers/   # API logic for Stability API
│   ├── .env           # API keys & config (ignored)
│   └── server.js      # App entry point
│
│── frontend/          # React.js frontend
│   ├── src/           # Components & pages
│   └── package.json
│
└── README.md
