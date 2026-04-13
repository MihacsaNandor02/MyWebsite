import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const dynamic = 'force-dynamic';


const reviewSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  service: z.string().min(1, "Service is required").max(100),
  feedback: z.string().min(1, "Feedback is required").max(1000),
  rating: z.number().min(1).max(4),
  email: z.string().email("Invalid email address").max(255).optional().or(z.literal('')),
  // Basic Honeypot to prevent bots
  bot_field: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }
    const resend = new Resend(apiKey);
    const body = await request.json();

    // 1. Validation & Honeypot
    const result = reviewSchema.safeParse(body);
    if (!result.success || body.bot_field) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    const { name, service, feedback, rating, email } = result.data;

    const emailTo = process.env.REVIEW_EMAIL_TO || process.env.CONTACT_EMAIL_TO;
    const emailFrom = process.env.REVIEW_EMAIL_FROM || process.env.CONTACT_EMAIL_FROM;

    if (!emailTo || !emailFrom) {
      console.error("Missing REVIEW_EMAIL_TO or REVIEW_EMAIL_FROM environment variables");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 2. Send Feedback Email to Admin
    await resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      subject: `Negative Feedback Received: ${rating} Stars from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #e11d48; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Low Rating Feedback</h2>
          <p>You have received a new review that needs attention.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Rating:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${rating} / 5 Stars</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Service:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email || 'Not provided'}</td>
            </tr>
          </table>
          
          <div style="margin-top: 20px; background: #f9fafb; padding: 15px; border-radius: 5px; border-left: 4px solid #e11d48;">
            <p style="margin-top: 0;"><strong>Feedback:</strong></p>
            <p style="white-space: pre-wrap;">${feedback}</p>
          </div>
          
          <p style="font-size: 12px; color: #666; margin-top: 30px; text-align: center;">
            This email was sent from your website's review system.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Review Form Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
