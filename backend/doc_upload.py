from pathlib import Path
from typing import List

from langchain_core.documents import Document
from langchain_community.document_loaders import PyPDFLoader


class DocumentLoader:
    """
    Handles loading PDF documents from file paths.
    """

    def __init__(self):
        pass

    def load_pdf(self, file_path: str) -> List[Document]:
        """
        Load a single PDF file.

        Args:
            file_path (str): Path to PDF file

        Returns:
            List[Document]: Extracted document pages
        """

        pdf_path = Path(file_path)

        if not pdf_path.exists():
            raise FileNotFoundError(
                f"PDF file not found: {file_path}"
            )

        if pdf_path.suffix.lower() != ".pdf":
            raise ValueError(
                "Only PDF files are supported"
            )

        loader = PyPDFLoader(str(pdf_path))
        documents = loader.load()

        return documents

    def load_multiple_pdfs(
        self,
        folder_path: str
    ) -> List[Document]:
        """
        Load all PDFs from a folder.

        Args:
            folder_path (str): Folder containing PDFs

        Returns:
            List[Document]
        """

        folder = Path(folder_path)

        if not folder.exists():
            raise FileNotFoundError(
                f"Folder not found: {folder_path}"
            )

        all_documents = []

        pdf_files = folder.glob("*.pdf")

        for pdf_file in pdf_files:
            loader = PyPDFLoader(str(pdf_file))
            documents = loader.load()
            all_documents.extend(documents)

        return all_documents