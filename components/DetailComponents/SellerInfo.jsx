import Image from "next/image";
import Link from "next/link";
import SendMessageButton from "../buttons/SendMessageButton"

const SellerInfo = ({ user }) => {
  return (
    <div className="content-center items-center gap-5 py-3">
      <div className="py-2">
        <h1 className="text-xl font-medium items-start">Vendedor</h1>
      </div>
      <div className="flex flex-row items-center justify-between p0 m0 w-[600px]">
        <Link href="/profile">
          <div className="flex flex-row items-center gap-3 justify-center">
            <Image
              className="rounded-full"
              src={user?.image}
              alt="imagen publicacion"
              width={40}
              height={40}
            />
            <h1 className="font-medium hover:underline">{user?.name}</h1>
          </div>
        </Link>

        <SendMessageButton />
      </div>
    </div>
  );
};

export default SellerInfo;