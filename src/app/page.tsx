"use client";

import { useState, useEffect } from "react";
import Header from "@/components/cpr/Header";
import Hero from "@/components/cpr/Hero";
import News from "@/components/cpr/News";
import Program from "@/components/cpr/Program";
import Team from "@/components/cpr/Team";
import Contact from "@/components/cpr/Contact";
import Footer from "@/components/cpr/Footer";
import AdhesionModal from "@/components/cpr/AdhesionModal";
import { fetchWPPosts, type WPPost } from "@/lib/wordpress";

export default function Home() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchWPPosts(6).then(setPosts).catch(() => {});
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Header onAdherentClick={() => setIsModalOpen(true)} />
      <Hero />
      <News posts={posts} />
      <Program />
      <Team />
      <Contact />
      <Footer />
      <AdhesionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}