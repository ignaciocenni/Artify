import OptionPublicationBar from './OptionPublicationBar'
import OptionUserBar from './OptionUserBar.jsx'
import CardsPublication from './CardsPublication'
import ColPublication from './ColPublication'
import ColUsers from './ColUsers'
import CardsUser from './CardsUser'
import CardsMetrics from './CardsMetrics'
import DashHeader from './DashHeader.jsx'

const Dashboard = async ({ activeSection, activeFilter }) => {
  const currentSection = activeSection ?? 'publications'
  return (
    <div className="w-full flex-col justify-start items-start flex">
      <DashHeader />
      {currentSection === 'publications' ? (
        <div className="flex flex-col w-full">
          <div className="px-6 pt-11 pb-2.5 justify-start items-start gap-2 inline-flex">
            <OptionPublicationBar />
          </div>
          <ColPublication />
          <CardsPublication activeFilter={activeFilter} />
        </div>
      ) : currentSection === 'user' ? (
        <div className="w-full flex flex-col ">
          <div className="px-6 pt-11 pb-2.5 justify-start items-start gap-2 inline-flex">
            <OptionUserBar />
          </div>
          <ColUsers />
          <CardsUser activeFilter={activeFilter} />
        </div>
      ) : (
        <CardsMetrics />
      )}
    </div>
  )
}

export default Dashboard
