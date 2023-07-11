import { AuthContextProvider } from "../context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
        <section>
          <AuthContextProvider>
            {children}
          </AuthContextProvider>
        </section>
      
    </html>
  );
}