import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_8XqRPXzN_7g545kZ7qkchVtDRLfTAK4Ma");

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "mehdiraza019mr@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
