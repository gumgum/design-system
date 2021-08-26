import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

export default function Main({ children }) {
  return (
    <main className="gds-app-layout__main">
      <Breadcrumb />
      {children}
      <Footer />
    </main>
  );
}
