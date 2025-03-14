/*
import type { RequestHandler } from "@sveltejs/kit";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.GPT_API_KEY,
});

export const POST: RequestHandler = async ({ request }) => {
  const { message } = await request.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: message }],
    });

    const reply = completion.choices[0].message.content;

    return new Response(JSON.stringify({ reply }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching from OpenAI:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch response from OpenAI" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
*/
