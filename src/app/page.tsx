import { localBusinessStructuredData } from "@/lib/structured-data";
import HeroSection from "@/components/home/hero-section";
import ValueStrip from "@/components/home/value-strip";
import Stats from "@/components/home/stats";
import HowItWorks from "@/components/home/how-it-works";
import FeaturedProducts from "@/components/home/featured-products";
import WhyChooseUs from "@/components/home/why-choose-us";
import Testimonials from "@/components/home/testimonials";
import SavingsCalculator from "@/components/home/savings-calculator";
import CaseStudies from "@/components/home/case-studies";
import EducationalSection from "@/components/home/educational-section";
import BlogPreview from "@/components/home/blog-preview";
import Certifications from "@/components/home/certifications";
import CTA from "@/components/home/cta";
import FAQ from "@/components/home/faq";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessStructuredData),
        }}
      />
      <HeroSection />
      <ValueStrip />
      <Stats />
      <HowItWorks />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <SavingsCalculator />
      <CaseStudies />
      <EducationalSection />
      <BlogPreview />
      <Certifications />
      <CTA />
      <FAQ />
    </>
  );
}
