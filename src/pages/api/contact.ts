import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  company: z.string().max(100).optional(),
  phone: z.string().max(30).optional(),
  email: z.string().email('Invalid email address').max(200),
  message: z.string().min(1, 'Message is required').max(5000),
  how: z.string().max(50).optional(),
});

export const POST: APIRoute = async ({ request }) => {
  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Validate
  const result = contactSchema.safeParse(body);
  if (!result.success) {
    const firstError = result.error.errors[0]?.message ?? 'Validation error';
    return new Response(JSON.stringify({ error: firstError }), {
      status: 422,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, company, phone, email, message, how } = result.data;

  // Send email via Resend
  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_TO_EMAIL ?? 'sales@n2mtech.com';

  if (!resendApiKey) {
    // In development without Resend configured, log and return success
    console.log('[Contact Form Submission]', { name, company, email, message });
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailBody = `
New contact form submission from n2mtech.com

Name: ${name}
Company: ${company || '—'}
Email: ${email}
Phone: ${phone || '—'}
How they heard about us: ${how || '—'}

Message:
${message}
  `.trim();

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'N2M Website <noreply@n2mtech.com>',
      to: [toEmail],
      reply_to: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ''}`,
      text: emailBody,
    }),
  });

  if (!resendRes.ok) {
    console.error('[Resend error]', await resendRes.text());
    return new Response(JSON.stringify({ error: 'Failed to send message. Please call us directly.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
