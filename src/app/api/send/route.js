import { Resend } from 'resend';
import EmailTemplate from '../../components/email-templete';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Raza <mehdiraza019mr@gmail.com> ',
      to: ['mehdiraza019mr@gmail.com'],
      subject: 'Hello world',
      react: EmailTemplate({firstName: 'Raza'}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
