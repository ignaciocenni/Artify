import { NextResponse } from "next/server";
import { transporter } from "../../../components/config/nodemailer";

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

  return {
    text: stringData,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <style>
            p, a, h1, h2, h3, h4, h5, h6 {font-family: 'Roboto', sans-serif !important;}
            h1{ font-size: 30px !important;}
            h2{ font-size: 25px !important;}
            h3{ font-size: 18px !important;}
            h4{ font-size: 16px !important;}
            p, a{font-size: 15px !important;}
    
            .claseBoton{
                width: 30%;
                    background-color: #fcae3b;
                    border: 2px solid #fcae3b;
                    color: black; 
                    padding: 16px 32px;
                    text-align: center;
                    text-decoration: none;
                    font-weight: bold;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
            }
            .claseBoton:hover{
                background-color: #000000;
                color: #ffffff;
            }
            .imag{
                width: 20px;
                height: 20px;
            }
            .contA{
                margin: 0px 5px 0 5px;
            }
            .afooter{
                color: #ffffff !important; 
                text-decoration: none;
                font-size: 13px !important;
            }
        </style>
    </head>
    <body>
        <div style="width: 100%; background-color: #e3e3e3;">
            <div style="padding: 20px 10px 20px 10px;">
                <!-- Imagen inicial -->
                <div style="background-color: #000000; padding: 10px 0px 10px 0px; width: 100%; text-align: center;">
                    <img src="/public/images/pretwor.png" alt="" style="width: 200px; height: 60px;">
                </div>
                <!-- Imagen inicial -->
    
                <!-- Contenido principal -->
                <div style="background-color: #ffffff; padding: 20px 0px 5px 0px; width: 100%; text-align: center;">
                    <h1>PINCHE CALIENTE</h1>
                    <img src="https://static.wikia.nocookie.net/muppet/images/6/6a/Zink-MikeRuiz-MissPiggyAndTheSerpent-%282005%29.jpg/revision/latest?cb=20120409231301" style="width:100%" >
                    
    
                    <!-- Gracias -->
                    <p>Gracias por tu tiempo.🍆💦💦</p>
                    <p style="margin-bottom: 50px;"><i>Atentamente:</i><br>Equipo Pretwor</p>
    
                    <!-- Botón -->
                    <a class="claseBoton" href="https://www.pretwor.com/">Pretwor</a>
                </div>
                <!-- Contenido principal -->
    
                <!-- Footer -->
                <div style="background-color: #282828; color: #ffffff; padding: 5px 0px 0px 0px; width: 100%; text-align: center;">
                    <!-- Redes sociales -->
                    <a href="https://www.facebook.com/pretwor" class="contA"><img src="/public/images/fb.png" class="imag" /></a>
                    <a href="https://www.instagram.com/pretwor/" class="contA"><img src="/public/images/ig.png" class="imag" /></a>
                    <a href="https://wa.me/573224294332" class="contA"><img src="/public/images/wapp.png" class="imag" /></a>
                    <a href="mailto:contacto@pretwor.com" class="contA"><img src="/public/images/em.png" class="imag" /></a>
                    <!-- Redes sociales -->
    
                    <h4>Soporte</h4>
                    <p style="font-size: 13px; padding: 0px 20px 0px 20px;">
                        Comunícate con nosotros por los siguientes medios:<br>
                        Correo: <a class="afooter" href="mailto:proyectos@pretwor.com">proyectos@pretwor.com</a><br>
                        Whatsapp: <a class="afooter" href="https://wa.me/573224294332">+57 322 429 4332</a><br>
                    </p>
                    <p style="background-color: black; padding: 10px 0px 10px 0px; font-size: 12px !important;">
                        © 2022 Pretwor, todos los derechos reservados.
                    </p>
                </div>
                <!-- Footer -->
    
    
    
            </div>
        </div>
    </body>
    </html>`,
  };
};

export async function POST(req) {
  const data = await req.json();
  if(data.rol === "SE VENDIO" );

  const mailOptions = {
    from: "artifypf@gmail.com",
    to: data.email,
    subject: "Vendedor🔥",
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
