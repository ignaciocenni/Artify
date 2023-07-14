"use client";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Providers(props: Props) {
  return (
    <div>
      <SessionProvider>{props.children}</SessionProvider>
    </div>
  );
}