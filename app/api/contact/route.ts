import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/components/ContactEmail";

type ContactPayload = {
  name: unknown;
  email: unknown;
  message: unknown;
  website_url?: unknown; // honeypot
};

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  return /^\w+([+.-]\w+)*@\w+([.-]\w+)*\.\w{2,36}$/.test(email);
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const honeypot = body.website_url;

  // honeypot check
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!isNonEmptyString(name) || name.length < 2) {
    return NextResponse.json(
      { error: "Name must be at least 2 characters." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(email) || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!isNonEmptyString(message) || message.length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters." },
      { status: 400 },
    );
  }

  if (name.length > 60) {
    return NextResponse.json({ error: "Name is too long." }, { status: 400 });
  }

  if (email.length > 254) {
    return NextResponse.json({ error: "Email is too long." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server is missing RESEND_API_KEY." },
      { status: 500 },
    );
  }
  if (!to) {
    return NextResponse.json(
      { error: "Server is missing CONTACT_TO_EMAIL." },
      { status: 500 },
    );
  }
  if (!from) {
    return NextResponse.json(
      { error: "Server is missing CONTACT_FROM_EMAIL." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    const subject = `Portfolio contact: ${name}`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      react: ContactEmail({ name, email, message }),
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Email failed to send." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Email failed to send." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
