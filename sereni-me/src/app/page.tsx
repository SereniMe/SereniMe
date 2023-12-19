"use client";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import SectionTitle from "@/components/Section";
import Testimonials from "@/components/Testimony";
import Video from "@/components/Video";

export default function Home() {
  return (
    <Provider>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Introducing SereniMe – Your Gateway to Tranquility!"
        title="where peace meets convenience"
      >
        Are you ready to embark on a journey towards serenity and mindfulness?
        Look no further – SereniMe is the ultimate app designed to elevate your
        well-being, one soothing experience at a time
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is to highlight our popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer FAQs
      </SectionTitle>
      <Faq />
      <Footer />
    </Provider>
  );
}
