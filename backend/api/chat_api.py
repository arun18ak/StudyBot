from fastapi import APIRouter
from pydantic import BaseModel

from rag_pipeline import RAGPipeline

router = APIRouter()

rag = RAGPipeline()


class QuestionRequest(BaseModel):
    question: str


@router.post("/chat")
def chat(
    request: QuestionRequest
):

    answer = rag.ask(
        request.question
    )

    return {
        "answer": answer
    }