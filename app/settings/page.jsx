import FormML from "../../components/SettingsComponents/FormML.jsx";
import SlideBarSettings from "../../components/SlideBarSettings";

export default function Settings() {
  return (
    <>
      <section className="flex">
        <SlideBarSettings />
        <FormML />
      </section>
    </>
  );
}
