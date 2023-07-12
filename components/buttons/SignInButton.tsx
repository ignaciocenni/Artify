"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import logoGoogle from "../../public/images/google-logo.png";
import Image from "next/image";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return null;
  }
  return (
    <div className="flex items-center justify-center">
      <button
        className="border border-black gap-5 flex justify-center items-center hover:bg-[var(--background-sec)] text-lg font-bold py-3 px-3 rounded-xl focus:outline-none focus:shadow-outline w-full"
        type="submit"
        onClick={() => signIn()}>
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
