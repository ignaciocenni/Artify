"use client"
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function PurchaseStatusComponent() {
    const data = useSession();

    const searchParams = useSearchParams()
    const status = searchParams.get('status')

    const form = {
        email: data.data.user.email,
        name: data.data.user.name,
        satatus: status
    }
    const sendEmail = async () => {
        await sendContactForm(form);
    };
    sendEmail()



    return (
        <div>
            {/* {session && session.user ? null :} */}
        </div>
    )
}