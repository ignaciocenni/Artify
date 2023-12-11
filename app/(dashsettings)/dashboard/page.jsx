import Dashboard from '../../../components/dashboard/Dashboard.jsx'

function DashboardPage({ searchParams }) {
  const { section, filter } = searchParams
  return (
    <>
      <section className="flex w-full mt-[10vh] ml-[34vh]">
        <Dashboard activeSection={section} activeFilter={filter} />
      </section>
    </>
  )
}

export default DashboardPage
