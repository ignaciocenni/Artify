import FormML from "../../components/SettingsComponents/FormML";
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
