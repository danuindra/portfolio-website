'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export type ContactFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  // Server-side validation
  if (!name || name.length < 2) {
    return { status: 'error', message: 'Please enter your name.' }
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }
  if (!message || message.length < 10) {
    return { status: 'error', message: 'Message must be at least 10 characters.' }
  }

  const to = process.env.CONTACT_EMAIL_TO
  if (!to) {
    console.error('[contact] CONTACT_EMAIL_TO env var is not set')
    return { status: 'error', message: 'Something went wrong. Please try emailing directly.' }
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // update to noreply@danuindra.com after domain verification
      to,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return { status: 'success' }
  } catch (error) {
    console.error('[contact] Resend error:', error)
    return { status: 'error', message: 'Failed to send message. Please try again or email directly.' }
  }
}
