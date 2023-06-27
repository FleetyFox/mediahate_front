import Header from "@/components/Landing/Header";
import PyrusForm from "../../components/PyrusForm";
import Footer from "@/components/Landing/Footer";

export default function SendFormPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <PyrusForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
