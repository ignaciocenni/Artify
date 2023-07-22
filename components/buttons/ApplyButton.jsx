import apply from "../../public/images/apply.svg";
import Image from "next/image";

function ApplyButton() {
  return (
    <>
      <button className="w-24 h-10 px-3 py-1 bg-purple-600 rounded-full shadow-md shadow-zinc-400 justify-center items-center gap-1 flex">
        <h1 className="text-white text-xs">Aplicar</h1>
        <Image width={30} src={apply} height={30} alt="" />
      </button>
    </>
  );
}

export default ApplyButton;
