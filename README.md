# 🎓 StudyBot - AI Student Assistant using RAG

StudyBot is an AI-powered Student Assistant built using Retrieval-Augmented Generation (RAG). It enables students to upload PDF documents and ask questions in natural language. The system retrieves relevant information from uploaded documents and generates accurate answers using Large Language Models (LLMs).

## 🚀 Features

- 📄 Upload PDF documents
- 🔍 Intelligent document retrieval using vector embeddings
- 🤖 AI-powered question answering
- 💬 Chat-based user interface
- ⚡ Fast semantic search with ChromaDB
- 🧠 Retrieval-Augmented Generation (RAG) pipeline
- 🌐 Modern React frontend
- 🐍 Flask backend API

---

## 🏗️ System Architecture

```text
User Query
    │
    ▼
React Frontend
    │
    ▼
Flask API
    │
    ▼
RAG Pipeline
 ├── Text Splitting
 ├── Embedding Generation
 ├── Vector Storage (ChromaDB)
 └── Retriever
    │
    ▼
LLM Response
    │
    ▼
Answer to User
```

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Python
- Flask
- Flask-CORS

### AI & RAG
- LangChain
- ChromaDB
- Sentence Transformers
- HuggingFace Embeddings
- Large Language Models (LLMs)

### Document Processing
- PyPDF
- Text Splitters

---

## 📂 Project Structure

```text
StudyBot/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── app.py
│   ├── chat.py
│   ├── doc_upload.py
│   ├── embedding_model.py
│   ├── llm_client.py
│   ├── rag_pipeline.py
│   ├── retriever.py
│   ├── text_splitter.py
│   └── vector_store.py
│
├── Data/
├── chroma_db/
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/arun18ak/StudyBot.git
cd StudyBot
```

### Backend Setup

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## 📖 Usage

### Step 1: Upload PDF

Upload any academic PDF document through the web interface.

### Step 2: Document Processing

The system:

- Extracts text
- Splits text into chunks
- Generates embeddings
- Stores vectors in ChromaDB

### Step 3: Ask Questions

Ask questions such as:

```text
What is Machine Learning?

Explain Neural Networks.

Summarize Chapter 2.

What are the key concepts discussed in the document?
```

### Step 4: Get AI-Generated Answers

StudyBot retrieves relevant document chunks and generates context-aware answers.

---

## 🔍 RAG Workflow

1. PDF Upload
2. Text Extraction
3. Text Chunking
4. Embedding Generation
5. Vector Storage
6. Similarity Search
7. Context Retrieval
8. LLM Response Generation

---

## 📈 Future Enhancements

- Multiple PDF support
- Voice-based interaction
- OCR support for scanned PDFs
- Multi-language support
- User authentication
- Conversation history
- Cloud deployment
- Fine-tuned domain-specific models

---

## 👨‍💻 Author

**Arunkumar**

- Final Year Computer Science Engineering Student
- AI & Machine Learning Enthusiast
- Interested in Generative AI, NLP, and Intelligent Systems

GitHub:
https://github.com/arun18ak

---

## 📜 License

This project is developed for educational and learning purposes.
