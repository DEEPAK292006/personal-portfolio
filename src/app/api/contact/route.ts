import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, honeypot } = body;

    // Honeypot bot protection
    if (honeypot) {
      return NextResponse.json({ message: "Spam submission detected" }, { status: 400 });
    }

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name (at least 2 characters)." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      // Integration for Resend Email API
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["113930DEEPAK@gmail.com"],
          subject: `Portfolio Inquiry from ${name}: ${subject || "New Message"}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "None"}\n\nMessage:\n${message}`,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Resend API error:", errorData);
      }
    } else {
      // Structured logging for local development and server console
      console.log("=== NEW PORTFOLIO CONTACT SUBMISSION ===");
      console.log(`From: ${name} <${email}>`);
      console.log(`Subject: ${subject || "General Inquiry"}`);
      console.log(`Message: ${message}`);
      console.log("=========================================");
    }

    return NextResponse.json(
      { success: true, message: "Thank you, Deepak M. has received your message and will reply promptly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API route error:", error);
    return NextResponse.json({ error: "An unexpected error occurred. Please reach out directly to 113930DEEPAK@gmail.com." }, { status: 500 });
  }
}
