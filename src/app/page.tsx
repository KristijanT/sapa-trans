import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Process from "@/components/Process";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Destinations />
        <Process />
        <CtaBand />
        <Faq />
        <ContactForm />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
