import Image from "next/image";
import Link from "next/link";
import WpButton from "../buttons/WpButton";

const SellerInfo = ({ user, userId, socials }) => {
  return (
    <div className="content-center items-center gap-5 py-3">
      <div className="py-2">
        <h1 className="text-xl font-medium items-start">Vendedor</h1>
      </div>
      <div className="flex flex-row items-center justify-between p0 m0 w-[600px]">
        <div className="flex flex-row items-center gap-3 justify-center">
          <Link href={`/profile/${userId}`}>
            <Image
              className="rounded-full"
              src={user?.image}
              alt="imagen publicacion"
              width={40}
              height={40}
            />
          </Link>
          <Link href={`/profile/${userId}`}>
            <h1 className="font-medium hover:underline">{user?.name}</h1>
          </Link>
        </div>

          <div className=" flex justify-center items-center gap-3">
            <WpButton  socials={socials ?  socials : []} />
          </div>
      </div>
    </div>
  );
};

export default SellerInfo;
