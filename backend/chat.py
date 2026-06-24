from rag_pipeline import RAGPipeline


rag = RAGPipeline()

while True:

    question = input(
        "\nAsk Question: "
    )

    if question.lower() == "exit":
        break

    answer = rag.ask(
        question
    )

    print("\nAnswer:")
    print(answer)