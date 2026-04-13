import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

export const dynamic = 'force-dynamic';


const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(5, "Phone is required").max(20),
  website: z.string().max(255).optional(),
  need: z.string().min(1, "Service need is required"),
  timezone: z.string().optional(),
  // Basic Honeypot to prevent bots
  bot_field: z.string().max(0, "Bot detected").optional(),
});

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    // 1. Validation & Honeypot
    const result = contactSchema.safeParse(body);
    if (!result.success || body.bot_field) {
      return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
    }

    const { name, email, phone, website, need, timezone } = result.data;

    const emailTo = process.env.CONTACT_EMAIL_TO!;
    const emailFrom = process.env.CONTACT_EMAIL_FROM!;

    if (!emailTo || !emailFrom) {
      console.error("Missing CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM environment variables");
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    // 2. Send Notification to Admin
    const adminEmail = resend.emails.send({
      from: emailFrom,
      to: [emailTo],
      subject: `New Contact Form Lead: ${name}`,
      html: `
        <h2>New Lead Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'N/A'}</p>
        <p><strong>Selected Package:</strong> ${need}</p>
        <p><strong>Timezone:</strong> ${timezone || 'N/A'}</p>
      `,
    });

    // 3. Send Auto-Reply to Client
    const clientEmail = resend.emails.send({
      from: emailFrom,
      to: [email],
      subject: `We received your request, ${name}!`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h2>Hello ${name},</h2>
          <p>Thank you for reaching out! We have successfully received your inquiry about our <strong>${need}</strong> package.</p>
          <p>Our team is currently reviewing your details and we'll get back to you within 24 hours.</p>
          <p>Below is a copy of your submission for your records:</p>
          <ul>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Website:</strong> ${website || 'N/A'}</li>
          </ul>
          <p>Best regards,<br/>The Future Builds Team</p>
        </div>
      `,
    });

    // 4. Send Telegram Message (Optional)
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    let telegramPromise = Promise.resolve();
    if (telegramBotToken && telegramChatId) {
      const text = `🔥 <b>New Lead!</b>\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n💼 Package: ${need}`;
      const tgUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
      telegramPromise = fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: telegramChatId, text: text, parse_mode: 'HTML' }),
      }).then(res => res.json()).catch(console.error);
    }

    // Await all tasks concurrently
    await Promise.all([adminEmail, clientEmail, telegramPromise]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
