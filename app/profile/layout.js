import Providers from "@/store/provider";

export default function profileLayout({ children }) {
    return (
      <section lang="en">
        <Providers>
          <section >{children}</section>
        </Providers>
      </section>
    );
  }