import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_LpF8NMFi_AfswPhGnDQTqSmVaRrUCiFbS');

export async function POST(req) {
  const { name, email, project_type, budget, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['mtbdstudio@gmail.com'],
      subject: 'New Contact Form Submission',
      react: (
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Project Type:</strong> {project_type}</p>
          <p><strong>Budget:</strong> {budget}</p>
          <p><strong>Message:</strong> {message}</p>
        </div>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}