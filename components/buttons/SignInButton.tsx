"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import logoGoogle from "../../public/images/google-logo.png";
import Image from "next/image";

const SignInButton = ({setForm}) => {
  const { data: session } = useSession();
  

  const handlerAuthSession = () => {
    signIn()
    if (session && session.user){
      setForm({
        email: session.user.email,
        password: "cuenta google",
        name: session.user.name,
        image:session.user.image,
        rol: "USER",
      })
    }
    ;
    
    
    return "eres una verga por suscribirte a artify"
  }

  if (session && session.user) {
  
    return null;
  }
   return (
    <div className="flex items-center justify-center">
      <button
        className="border border-black gap-5 flex justify-center items-center hover:bg-[var(--background-sec)] text-lg font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
        type="submit"
        onClick={handlerAuthSession}>
        <Image
          src={logoGoogle}
          width={20}
          height={20}
          alt="GoogleLogo"
          className="absoulte top-10 bottom-10"
        />
        Continuar con Google
      </button>
    </div>
  );
};

export default SignInButton;
