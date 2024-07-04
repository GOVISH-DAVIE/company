import ContactUsSection from "@/components/section/contact";
import ExpertiseSection from "@/components/section/expertise";
import LandingSection from "@/components/section/home";
import ProcessSection from "@/components/section/process";
import ServicesSection from "@/components/section/services";
import Image from "next/image";

export default function Home() {
  return (
    <main  >
      <LandingSection />
      <ServicesSection />
      <ProcessSection />
      <ExpertiseSection />
      <ContactUsSection />
    </main>
  );
}
