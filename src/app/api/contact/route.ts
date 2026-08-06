import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 1. Get the data sent from our frontend form
    const body = await request.json();
    const { name, phone, destination, message } = body;

    // 2. Format the email to look professional
    const emailHtml = `
      <h1>New Travel Inquiry</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Destination:</strong> ${destination}</p>
      <p><strong>Message:</strong> ${message || "No message provided."}</p>
    `;

    // 3. Send the email using Resend
    const data = await resend.emails.send({
      from: "Travel Template <onboarding@resend.dev>", // Use Resend's default domain for testing
      to: ["ahmadbutt2080@gmail.com"], // CHANGE THIS to where you want to receive emails
      subject: `New Inquiry: ${destination} - ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}