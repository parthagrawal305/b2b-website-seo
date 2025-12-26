import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ProductsSection from "@/components/ProductsSection";
import TrustSection from "@/components/TrustSection";
import IndustriesSection from "@/components/IndustriesSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { generateFAQSchema } from "@/lib/schema";
import { FAQS } from "@/lib/constants";

export default function Home() {
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <>
      {/* FAQ Schema for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <Hero />

      {/* Client Logos Carousel */}
      <ClientLogos />

      {/* Products Section */}
      <ProductsSection />

      {/* Trust & Why Choose Us Section */}
      <TrustSection />

      {/* Industries We Serve */}
      <IndustriesSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
