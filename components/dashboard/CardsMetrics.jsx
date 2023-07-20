import ProductStatus from "./ProductStatus";
import TotalSells from "./TotalSells";
import PieChart from "./PieChart.jsx";
import pending from "../../public/images/pendingIcon.svg";
import invisible from "../../public/images/invisibleIcon.svg";
import visible from "../../public/images/visibleIcon.svg";

function CardsMetrics() {
  return (
    <div className="flex w-full bg-[var(--primary)] h-full p-20 gap-20">
      <PieChart />

      <div className="flex flex-col justify-center w-1/2 gap-10">
        <TotalSells total={429.341} />

        <div className="bg-white justify-center items-center rounded-3xl h-full px-28 py-14 shadow-md shadow-zinc-400 ">
          <h1 className="font-bold mb-3">Estado de los productos</h1>
          <div className="flex justify-center gap-2">
            <ProductStatus
              quantity={42}
              image={visible}
              text={"Productos Activos"}
            />
            <ProductStatus
              quantity={4}
              image={invisible}
              text={"Productos Inactivos"}
            />
            <ProductStatus
              quantity={1}
              image={pending}
              text={"Productos Pendientes"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsMetrics;
