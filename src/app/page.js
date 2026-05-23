import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Brands from "@/components/Brands";
import Industries from "@/components/Industries";
import WhyChooseUs from "@/components/WhyChooseUs";
import BeforeAfter from "@/components/BeforeAfter";
import ProjectGallery from "@/components/ProjectGallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="flex flex-col w-full">
        {/* Fullscreen Cinematic Hero */}
        <Hero />

        {/* 30+ Years Legacy narrative */}
        <About />

        {/* Dynamic products list, filter & search */}
        <Products />

        {/* Brands infinite marquee */}
        <Brands />

        {/* Industries Served */}
        <Industries />

        {/* Why Choose Us & Counter Stats */}
        <WhyChooseUs />

        {/* Masonry Project Gallery */}
        <ProjectGallery />

        {/* Interactive Before/After slider */}
        <BeforeAfter />

        {/* Customer Reviews */}
        <Testimonials />

        {/* Contact info, Enquiry Form & Maps */}
        <Contact />
      </main>

      {/* Brand Footer & lead generation */}
      <Footer />
    </>
  );
}
