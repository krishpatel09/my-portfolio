import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ThankYouEmail from "@/components/Emails/ThankYouEmail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    console.log(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }
    const resend = new Resend(apiKey);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const { data: userData, error: userError } = await resend.emails.send({
      from: "Krish Sangani <contact@krishai.me>",
      to: [email],
      subject: "Thank you for reaching out!",
      react: ThankYouEmail({ name, message }),
    });

    if (userError) {
      console.error("Resend user email error:", userError);
      return NextResponse.json(
        { error: "Failed to send thank you email." },
        { status: 500 },
      );
    }

    // await resend.emails.send({
    //   from: "Portfolio <onboarding@resend.dev>",
    //   to: ["your-email@example.com"],
    //   subject: `New Message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
