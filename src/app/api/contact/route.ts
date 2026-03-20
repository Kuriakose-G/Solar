import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  // TODO: integrate with email provider / CRM in production
  console.log("Contact request:", { name, email, phone, message });

  return NextResponse.json({ status: "success" });
}
