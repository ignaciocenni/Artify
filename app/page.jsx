
import Filters from "@/Components/Filters";
import NavBar from "@/Components/NavBar";

import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div className=" z-10"> 
      <NavBar />
      <div className="flex">
      <Filters/>
      <Cards />
      </div>
    </div>
  );
}
