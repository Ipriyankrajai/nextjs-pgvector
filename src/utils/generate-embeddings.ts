import openai from "./openai";

async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: text,
    });

    if (response.data && response.data.length > 0) {
      return response.data[0].embedding;
    } else {
      throw new Error("No embedding generated");
    }
  } catch (error) {
    console.error("Error generating embedding:", error);
    throw error;
  }
}

export default generateEmbedding;
