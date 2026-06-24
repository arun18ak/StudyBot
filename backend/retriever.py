from langchain_chroma import Chroma


class Retriever:

    def __init__(
        self,
        embedding_model
    ):

        self.vector_store = Chroma(
            persist_directory="chroma_db",
            embedding_function=embedding_model,
            collection_name="student_notes"
        )

    def search(
        self,
        query: str,
        k: int = 4
    ):

        results = self.vector_store.similarity_search(
            query=query,
            k=k
        )

        return results