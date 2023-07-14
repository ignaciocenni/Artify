"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

const SetFormSession = () => {
  const { data: session } = useSession();
  useEffect(() => {
    setForm({
      email: session.user.email,
      password: "cuenta google",
      name: session.user.name,
      image: session.user.image,
      rol: "USER",
    });
  }, [session]);
};

export default SetFormSession;
