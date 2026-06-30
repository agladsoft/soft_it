import { createServerFn } from "@tanstack/react-start";
import nodemailer from "nodemailer";

type ContactData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export const sendContactEmail = createServerFn({ method: "POST" })
  .handler(async (ctx) => {
    const { name, email, company, message } = ctx.data as ContactData;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Soft IT — форма связи" <${process.env.SMTP_USER}>`,
      to: "info@softit.io",
      replyTo: email,
      subject: `Новая заявка от ${name}${company ? ` (${company})` : ""}`,
      text: `Имя: ${name}\nEmail: ${email}\nКомпания: ${company || "—"}\n\nСообщение:\n${message}`,
      html: `
        <h2>Новая заявка с сайта Soft IT</h2>
        <p><b>Имя:</b> ${name}</p>
        <p><b>Email:</b> <a href="mailto:${email}">${email}</a></p>
        <p><b>Компания:</b> ${company || "—"}</p>
        <hr />
        <p><b>Сообщение:</b></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });
  });
