"use client";
import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhyChooseUs />
      <FeaturesSection />
      <ProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
