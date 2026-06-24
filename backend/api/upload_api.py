from fastapi import APIRouter, UploadFile, File
import shutil
import os

from doc_upload import DocumentLoader
from text_splitter import TextSplitter
from embedding_model import EmbeddingModel

from langchain_chroma import Chroma

router = APIRouter()

UPLOAD_DIR = "Data"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@router.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    with open(
        file_path,
        "wb"
    ) as buffer:

        shutil.copyfileobj(
            file.file,
            buffer
        )

    # Load PDF
    loader = DocumentLoader()

    documents = loader.load_pdf(
        file_path
    )

    # Split Documents
    splitter = TextSplitter()

    chunks = splitter.split_documents(
        documents
    )

    # Embedding Model
    embedding_model = (
        EmbeddingModel()
        .get_model()
    )

    # Store in ChromaDB
    Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory="chroma_db",
        collection_name="student_notes"
    )

    return {
        "message": f"{file.filename} uploaded and indexed successfully",
        "chunks": len(chunks)
    }