import { createAPIFileRoute } from "@tanstack/react-start/api";
import nodemailer from "nodemailer";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Заполните все обязательные поля" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const transporter = nodemailer.createTransport({
      host: "mail.beget.com",
      port: 465,
      secure: true,
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

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
});
