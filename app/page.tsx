import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Skills } from "@/components/main/skills";
import { Courses } from "@/components/main/courses";
import { IndustryInsights } from "@/components/main/industry-insights";
import { WhyChooseUs } from "@/components/main/why-choose-us";
import { Testimonials } from "@/components/main/testimonials";
import { FAQ } from "@/components/main/faq";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Courses />
        <IndustryInsights />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
