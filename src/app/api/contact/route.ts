import { NextRequest, NextResponse } from "next/server";
import { insertContactSubmission } from "../../../lib/db";
import { sendEmail } from "../../../lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Sanitize inputs (trim whitespace)
    const sanitized = {
      name: String(name).trim().slice(0, 200),
      email: String(email).trim().slice(0, 200),
      message: String(message).trim().slice(0, 5000),
    };

    // Store in database
    insertContactSubmission(sanitized);

    // Send notification email (mocked)
    await sendEmail({
      to: "info@katranisparts.com",
      subject: `New contact form submission from ${sanitized.name}`,
      body: `Name: ${sanitized.name}\nEmail: ${sanitized.email}\n\nMessage:\n${sanitized.message}`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    );
  }
}
