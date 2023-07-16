"use client"
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function PurchaseStatusComponent () {
    const { data: session } = useSession();

    const searchParams = useSearchParams()
    const status = searchParams.get('status')
    
    return(
        <div>
            {/* {session && session.user ? null :} */}
        </div>
    )
}