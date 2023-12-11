'use client'
import Image from 'next/image'
import people from '../../public/images/people.svg'
import release from '../../public/images/releases.svg'
import metrics from '../../public/images/bar-char.svg'
import clsx from 'clsx'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

const DashSections = {
  PUBLICACTIONS: 'publications',
  USER: 'user',
  METRICS: 'metrics'
}

const OptionPublicationBar = ({ session }) => {
  const searchParams = useSearchParams()
  const path = usePathname()
  const { replace } = useRouter()

  const activeOption = searchParams.get('section') ?? DashSections.PUBLICACTIONS
  const handleOptionClick = (section) => {
    if (section === activeOption) return
    const params = new URLSearchParams(searchParams)
    params.delete('filter')
    params.set('section', section)
    replace(`${path}?${params.toString()}`)
  }

  return (
    <div className="flex justify-center items-center gap-10">
      <button
        className={clsx(
          `px-3 py-2 relative bottom-5 left-5 px-3.5 py-2.5 bg-[var(--background)]
           rounded-lg shadow items-center gap-5 flex text-xl font-medium`,
          { 'shadow-lg border-b-4 border-[var(--extra)]': activeOption === DashSections.PUBLICACTIONS }
        )}
        onClick={() => handleOptionClick(DashSections.PUBLICACTIONS)}
      >
        <Image width={50} src={release} alt="release" />
        Publicaciones
      </button>
      {session?.user.role === 'ADMIN' && (
        <button
          className={clsx(
            `px-3 py-2px-3 py-2 relative bottom-5 left-5 px-3.5 py-2.5 
            bg-[var(--background)] rounded-lg shadow items-center gap-5 flex text-xl font-medium`,
            { 'shadow-lg border-b-4 border-[var(--extra)]': activeOption === DashSections.USER }
          )}
          onClick={() => handleOptionClick(DashSections.USER)}
        >
          <Image width={50} src={people} alt="people" />
          Usuarios
        </button>
      )}
      <button
        className={clsx(
          `px-3 py-4 relative bottom-5 left-5 px-3.5 py-2.5 bg-[var(--background)] 
        rounded-lg shadow items-center gap-5 flex text-xl font-medium`,
          { 'shadow-lg border-b-4 border-[var(--extra)]': activeOption === DashSections.METRICS }
        )}
        onClick={() => handleOptionClick(DashSections.METRICS)}
      >
        <Image width={38} src={metrics} alt="people" />
        Metricas
      </button>
    </div>
  )
}

export default OptionPublicationBar
