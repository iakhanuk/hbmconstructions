
export const dynamic = 'force-dynamic' // defaults to auto
import { ContactEmailTemplate, IContactEmailTemplate } from '@/components/Emails/Contact';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.EMAIL_FROM;
const toEmail = process.env.EMAIL_TO;



export async function POST(req: Request) {
    if(fromEmail === undefined || toEmail === undefined) {
        return Response.json({ error: 'Email configuration is missing' }, { status: 500 });
    }
    const body = await req.json()
    const name = body.name
    const email = body.email
    const message = body.message

    if (!name || !email || !message) {
        return Response.json({ error: 'Please fill out all fields' }, { status: 400 });
    }

    

  try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: 'Contact Form Submission',
            react: ContactEmailTemplate({ name, email, message }),
            text: `New message from ${name} <${email}>: ${message}`,

        });

        return Response.json(data);
    } catch (error) {
        // console.log(error)
        return Response.json({ error });
    }
}