import ProductStatus from "./ProductStatus";
import TotalSells from "./TotalSells";
import pending from "../../public/images/pendingIcon.svg";
import invisible from "../../public/images/invisibleIcon.svg";
import visible from "../../public/images/visibleIcon.svg";
import DoughnutChart from "./DoughnutChart";
import backgroundColors from "./backgroundColors";
import { useState, useEffect } from "react";
import axios from "axios";
import LoadingData from "./LoadingData";

const getStats = async (session) => {
  const stats = (await axios.get(`api/stats/${session && session.user.id}`))
    .data;
  return stats;
};

const CardsMetrics = (params) => {
  const { session } = params;

  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsData = await getStats(session);
        setStats(statsData);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [session]);

  const noDataAvailable =
    stats &&
    Object.values(stats.userProvinceSales).every((value) => value === 0);

  const provincesData = {
    labels: stats && Object.keys(stats.userProvinceSales),
    datasets: [
      {
        label: "Ventas en la provincia",
        data: stats && Object.values(stats.userProvinceSales),
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex w-full bg-[var(--primary)] h-full p-20 gap-20">
      <div className="flex flex-col w-1/2 bg-white rounded-3xl shadow-md shadow-zinc-400 p-20 justify-center items-center">
        <h1 className="font-bold">Ventas por provincias</h1>
        <h1 className="text-xs">Productos vendidos por cada provincia</h1>
        {!stats && <LoadingData />}
        {noDataAvailable ? (
          <div className="text-2xl">No hay ventas realizadas aún.</div>
        ) : (
          stats && <DoughnutChart chartData={provincesData} />
        )}
      </div>

      <div className="flex flex-col justify-center w-1/2 gap-10">
        <TotalSells total={stats ? `$${stats.totalSales}` : <LoadingData />} />

        <div className="bg-white justify-center items-center rounded-3xl h-full px-28 py-14 shadow-md shadow-zinc-400 ">
          <h1 className="font-bold mb-3">Estado de los productos</h1>
          <div className="flex justify-center gap-2">
            <ProductStatus
              quantity={
                stats ? stats.productUserStatus.ACTIVE : <LoadingData />
              }
              image={visible}
              text={"Productos Activos"}
            />
            <ProductStatus
              quantity={
                stats ? stats.productUserStatus.INACTIVE : <LoadingData />
              }
              image={invisible}
              text={"Productos Inactivos"}
            />
            <ProductStatus
              quantity={
                stats ? stats.productUserStatus.PENDING : <LoadingData />
              }
              image={pending}
              text={"Productos Pendientes"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsMetrics;
