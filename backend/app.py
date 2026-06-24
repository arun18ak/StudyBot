from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.upload_api import router as upload_router
from api.chat_api import router as chat_router

app = FastAPI(
    title="AI Student Assistant"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_router)
app.include_router(chat_router)

@app.get("/")
def root():
    return {
        "message": "AI Student Assistant Running"
    }