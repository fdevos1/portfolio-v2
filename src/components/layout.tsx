"use client";

import { useEffect, useState } from "react";

import Header from "./header";
import Footer from "./footer";
import Social from "./social";
import Email from "./email";
import Loader from "./loader";

import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: JSX.Element }) => {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"));
    if (allLinks.length > 0) {
      allLinks.forEach((link) => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer");
          link.setAttribute("target", "_blank");
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);

  return (
    <>
      {/* {isLoading && isHome ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : ( */}
      <div className="flex flex-col min-h-full">
        <Header isHome={isHome} />
        <Social isHome={isHome} />
        <Email isHome={isHome} />

        <div id="content">
          {children}
          <Footer />
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Layout;
