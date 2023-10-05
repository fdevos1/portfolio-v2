"use client";

import { useTranslations } from "next-intl";
import Layout from "../components/layout";
import About from "../components/sections/about";
import Contact from "../components/sections/contact";
import Hero from "../components/sections/hero";
import Jobs from "../components/sections/jobs";
import Projects from "../components/sections/projects";
import { useRouter } from "next/router";

export default function Home() {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>Data loading</h1>;
  }

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
