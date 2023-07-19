import SlideBarSettings from "../../components/SlideBarSettings";
import Dashboard from "../../components/dashboard/Dashboard";


function DashboardPage() {
  return (
      <section className="flex w-full">
        <SlideBarSettings/>
        <Dashboard/>
      </section>

  );
}

export default DashboardPage