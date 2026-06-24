import ollama

class LLMClient:

    def __init__(self):
        self.model = "phi3:mini"

    def generate(self, prompt):

        response = ollama.chat(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response["message"]["content"]