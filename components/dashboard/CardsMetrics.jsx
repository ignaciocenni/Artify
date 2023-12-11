'use client'
import ProductStatus from './ProductStatus'
import TotalSells from './TotalSells'
import pending from '../../public/images/pendingIcon.svg'
import invisible from '../../public/images/invisibleIcon.svg'
import visible from '../../public/images/visibleIcon.svg'
import DoughnutChart from './DoughnutChart'
import backgroundColors from './backgroundColors'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingData from './LoadingData'
import TotalUsers from './TotalUsers.jsx'
import { useSession } from 'next-auth/react'

const getStats = async (session) => {
  let stats
  if (session.user.role === 'USER') {
    stats = (await axios.get(`api/stats/${session && session.user.id}`)).data
  } else {
    stats = (await axios.get('api/stats')).data
  }

  return stats
}

const CardsMetrics = () => {
  const { data: session } = useSession()
  const [stats, setStats] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const statsData = await getStats(session)
        setStats(statsData)
      } catch (error) {
        console.error('Error al obtener los datos:', error)
      }
    }

    fetchData()
  }, [session])

  let noDataAvailable
  let provincesData

  if (session?.user.role === 'USER') {
    noDataAvailable = stats?.userProvinceSales ? Object.values(stats.userProvinceSales).every((value) => value === 0) : true

    provincesData = {
      labels: stats?.userProvinceSales && Object.keys(stats.userProvinceSales),
      datasets: [
        {
          label: 'Ventas en la provincia',
          data: stats?.userProvinceSales && Object.values(stats.userProvinceSales),
          backgroundColor: backgroundColors,
          borderWidth: 1
        }
      ]
    }
  } else {
    noDataAvailable = stats?.provinceSales ? Object.values(stats.provinceSales).every((value) => value === 0) : false

    provincesData = {
      labels: stats?.provinceSales && Object.keys(stats.provinceSales),
      datasets: [
        {
          label: 'Ventas en la provincia',
          data: stats?.provinceSales && Object.values(stats.provinceSales),
          backgroundColor: backgroundColors,
          borderWidth: 1
        }
      ]
    }
  }

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
        {session && session.user.role === 'USER' ? (
          <>
            <TotalSells total={stats ? `$${stats.totalSales}` : <LoadingData />} />
          </>
        ) : (
          <>
            <TotalUsers total={stats && stats.totalUsers ? stats.totalUsers : <LoadingData />} />
          </>
        )}

        <div className="bg-white justify-center items-center rounded-3xl h-full px-28 py-14 shadow-md shadow-zinc-400 ">
          <h1 className="font-bold mb-3">Estado de los productos</h1>
          <div className="flex justify-center gap-2">
            <ProductStatus
              quantity={
                session && session.user.role === 'USER' ? (
                  stats ? (
                    stats.productUserStatus.ACTIVE
                  ) : (
                    <LoadingData />
                  )
                ) : stats ? (
                  stats.productStatus.ACTIVE
                ) : (
                  <LoadingData />
                )
              }
              image={visible}
              text={'Productos Activos'}
            />
            <ProductStatus
              quantity={
                session && session.user.role === 'USER' ? (
                  stats ? (
                    stats.productUserStatus.INACTIVE
                  ) : (
                    <LoadingData />
                  )
                ) : stats ? (
                  stats.productStatus.INACTIVE
                ) : (
                  <LoadingData />
                )
              }
              image={invisible}
              text={'Productos Inactivos'}
            />
            <ProductStatus
              quantity={
                session && session.user.role === 'USER' ? (
                  stats ? (
                    stats.productUserStatus.PENDING
                  ) : (
                    <LoadingData />
                  )
                ) : stats ? (
                  stats.productStatus.PENDING
                ) : (
                  <LoadingData />
                )
              }
              image={pending}
              text={'Productos Pendientes'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsMetrics
