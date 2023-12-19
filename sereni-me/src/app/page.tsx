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
        pretitle="from Our Community"
        title="Unlock the Voice of Satisfaction"
      >
        Here's a glimpse into the enchanting tales shared by members of our
        SereniMe family. These heartwarming stories radiate joy, positivity, and
        the warmth of genuine connections
      </SectionTitle>
      <Testimonials />
      <SectionTitle title="Frequently Asked Questions"></SectionTitle>
      <Faq />
      <Footer />
    </Provider>
  );
}
