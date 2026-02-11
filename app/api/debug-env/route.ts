import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    NODE_ENV: process.env.NODE_ENV,
    hasTursoUrl: !!process.env.TURSO_DATABASE_URL,
    tursoUrlPrefix: process.env.TURSO_DATABASE_URL?.slice(0, 15),
    hasTursoToken: !!process.env.TURSO_AUTH_TOKEN,
  })
}
