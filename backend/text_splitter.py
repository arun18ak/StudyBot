from langchain_text_splitters import RecursiveCharacterTextSplitter


class TextSplitter:
    """
    Handles splitting documents into smaller chunks
    for embedding and storage in ChromaDB.
    """

    def __init__(
        self,
        chunk_size: int = 500,
        chunk_overlap: int = 100
    ):

        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap,
            separators=[
                "\n\n",
                "\n",
                ". ",
                " ",
                ""
            ]
        )

    def split_documents(self, documents):
        """
        Split LangChain documents into chunks.

        Args:
            documents: List of LangChain Document objects

        Returns:
            List of chunked documents
        """

        chunks = self.splitter.split_documents(
            documents
        )

        return chunks