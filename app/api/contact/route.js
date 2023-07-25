import { NextResponse } from "next/server";
import { transporter } from "../../../components/config/nodemailer";
import { emailWelcome } from "../../../components/templates/emailWelcome";
import { emailPurchaseDone } from "../../../components/templates/emailPurchaseDone";
import { emailPassword } from "../../../components/templates/emailPassword";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  let template;
  if (data.type === "welcome") {
    template = emailWelcome(data);
  } else if (data.type === "purchase") {
    template = emailPurchaseDone(data);
  } else if (data.type === "password") {
    template = emailPassword(data);
  } else if (data.rol === "compra realizada") {
  }
  return {
    text: stringData,
    html: template.html,
  };
};

export async function POST(req) {
  const data = await req.json();
  let mailOptions;
  if (data.type === "welcome") {
    mailOptions = {
      from: "artifypf@gmail.com",
      to: data.email,
      subject: "¡Bienvenido/a a Artify!",
    };
  } else if (data.type === "purchase") {
    mailOptions = {
      from: "artifypf@gmail.com",
      to: data.email,
      subject: "¡Compra Realizada!",
    };
  } else if (data.type === "password") {
    mailOptions = {
      from: "artifypf@gmail.com",
      to: data.email,
      subject: "Cambio de contraseña.",
    };
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }
}
