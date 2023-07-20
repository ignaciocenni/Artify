import SlideBarSettings from "../../components/SlideBarSettings";

function RootLayout({ children }) {
  return (
    <section className="flex">
      <SlideBarSettings />
      {children}
    </section>
  );
}

export default RootLayout;
