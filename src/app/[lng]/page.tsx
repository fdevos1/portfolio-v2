"use client";

import { RevealList } from "next-reveal";
import Layout from "../../components/layout";
import About from "../../components/sections/about";
import Contact from "../../components/sections/contact";
import Hero from "../../components/sections/hero";
import Jobs from "../../components/sections/jobs";
import Projects from "../../components/sections/projects";

export default function Home() {
  return (
    <div>
      <Layout>
        <main className="py-0">
          <Hero />
          <About />
          <Jobs />
          <Projects />
          <Contact />
        </main>
      </Layout>
    </div>
  );
}
