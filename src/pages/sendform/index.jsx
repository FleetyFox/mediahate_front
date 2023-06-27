import PyrusForm from "../../components/PyrusForm";
import Footer from "@/components/Landing/Footer";
import HeaderNoLanding from "@/components/HeaderNoLanding";

export default function SendFormPage() {
  return (
    <>
      <HeaderNoLanding />
      <main>
        <div className="container">
          <PyrusForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
