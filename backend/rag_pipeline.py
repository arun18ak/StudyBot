from embedding_model import EmbeddingModel
from retriever import Retriever
from llm_client import LLMClient


class RAGPipeline:

    def __init__(self):

        embedding_model = EmbeddingModel().get_model()

        self.retriever = Retriever(
            embedding_model
        )

        self.llm = LLMClient()

    def ask(self, question):

        docs = self.retriever.search(
            query=question,
            k=4
        )

        context = "\n\n".join(
            [doc.page_content for doc in docs]
        )

        prompt = f"""
You are a helpful AI tutor.

Use the context below to answer the user's question.

Context:
{context}

User Question:
{question}

Give a concise answer.
"""

        answer = self.llm.generate(prompt)

        return answer