import NavBarSecundary from "../../components/NavBarSecundary";
import FormML from "../../components/SettingsComponents/formML";
import SlideBarSettings from "../../components/SlideBarSettings";

export default function Settings() {
  return (
    <section className="flex">
      <SlideBarSettings />
      <FormML />
    </section>
  );
}
