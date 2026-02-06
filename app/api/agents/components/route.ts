import { NextResponse } from "next/server"
import { openai } from "../../../../lib/ai/client"
import { componentBuilder } from "@/lib/ai/agents/componentBuilder"

export async function POST(req: Request) {
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
