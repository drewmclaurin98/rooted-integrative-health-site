import { NextResponse } from "next/server"

// Developer tool: generates component code with OpenAI. It's disabled in production so
// the public can't call it and spend the OpenAI key's credits.
export async function POST(req: Request) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  const { openai } = await import("@/lib/ai/client")
  const { componentBuilder } = await import("@/lib/ai/agents/componentBuilder")
  const { request } = await req.json()

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: componentBuilder.systemPrompt },
      { role: "user", content: request },
    ],
    temperature: 0.3,
  })

  return NextResponse.json({
    result: response.choices[0].message.content,
  })
}
