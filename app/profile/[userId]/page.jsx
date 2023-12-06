import Image from 'next/image'
import Cards from '../../../components/Cards'
import Footer from '../../../components/Footer'
import WpButton from '../../../components/buttons/WpButton'
import NotFounded from '../../../components/NotFounded'
import LoadingProfile from '../../../components/loadings/LoadingProfile'
import { getUserInfo, getUserProducts } from '../../lib/services/users'

export default async function Profile({ params }) {
  const { userId } = params
  const userInfo = await getUserInfo(userId)
  const userProducts = await getUserProducts(userId)

  return (
    <>
      <div className="flex h-screen flex-col items-center pb-3 mt-[10vh] bg-[var(--background)] ">
        {userInfo ? (
          <div className="flex items-center flex-col w-1/2 mt-5">
            <div className="flex flex-col w-full items-center">
              <div className="flex justify-center flex-col items-center pt-5 pb-2 gap-5">
                <Image src={userInfo.image} width={100} height={100} alt="me" className="rounded-full shadow-md shadow-gray-500" />
                <h1 className="font-bold text-2xl">
                  {userInfo.name} {userInfo.lastName}
                  <WpButton socials={userInfo && userInfo.socials} />
                </h1>
              </div>
              <div className="flex justify-between p-6 w-full">
                <div className="flex flex-col items-start pr-10 w-full">
                  <h1 className="pb-3 font-bold text-xl text-[var(--secundary)]">Descripción</h1>
                  <h3 className="text-zinc-600 text-sm">
                    {userInfo.aboutMe.length === 0 ? 'Este usuario todavia no tiene descripción.' : userInfo.aboutMe}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col">
              <h1 className="pl-5 pb-3 text-xl font-bold text-[var(--secundary)]">Publicaciones</h1>
              {userProducts && userProducts.length == 0 ? (
                <NotFounded context={'profile'} />
              ) : (
                <div className="flex w-full justify-center items-center ">
                  <Cards products={userProducts} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <LoadingProfile />
        )}
      </div>
      <Footer />
    </>
  )
}
