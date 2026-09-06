import React from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactGrid from "../components/contact/ContactGrid";
import ContactLocation from "../components/contact/ContactLocation";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-[#16181e] text-white">
      <ContactHero />
      <ContactGrid />
      <ContactLocation />
    </main>
  );
}