import { NextResponse } from "next/server";
import { transporter } from "../../../components/config/nodemailer";
import { emailWelcome } from "../../../components/templates/emailWelcome";
import { emailPurchaseDone } from "../../../components/templates/emailPurchaseDone";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
};

const generateEmailContent = (data) => {
  console.log(data);
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );

  let template;
  if (data.type === "welcome") {
    template = emailWelcome(data);
  } else if (data.type === "purchase") {
    template = emailPurchaseDone();
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
      subject: "BIENVENID@",
    };
  } else if (data.type === "purchase") {
    mailOptions = {
      from: "artifypf@gmail.com",
      to: data.email,
      subject: "Compra Realizada",
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
