import { NextResponse } from "next/server";
import { transporter } from "../../../components/config/nodemailer";
import { bienvenida } from "../../../components/templates/email"

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

    let template
    if (data.rol === "bienvenida") {
        template = bienvenida(data)

    } else if (data.rol === "compra realizada") {

    } else if (data.rol === "compra realizada") {

    }

    return {
        text: stringData,
        html: template.html
    };
};

export async function POST(req) {
    const data = await req.json();
    if (data.rol === bienvenida);
    const mailOptions = {
        from: "artifypf@gmail.com",
        to: data.email,
        subject: "BIENVENIDA 🔥👅",
    };
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
