"use client";

import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";

import config from "@/config";
import useScrollDirection from "@/app/hooks/useScrollDirection";
import Icon from "./icons/icon";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Header = ({ isHome }: { isHome: Boolean }) => {
  const [isMounted, setIsMounted] = useState(!isHome);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const scrollDirection = useScrollDirection("down");

  const pathname = usePathname();

  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-[11] px-[50px] w-full h-[100px] backdrop-blur flex justify-between items-center text-slate-200 transition-all  lg:px-6 2xl:px-10 ${
        scrollDirection === "down" && !scrolledToTop
          ? "h-[70px] translate-y-[calc(70px*-1)] shadow-[0_10px_-10px_rgba(18, 18, 18, 0.7)]"
          : null
      }
      ${
        scrollDirection === "up" && !scrolledToTop
          ? "h-[70px] translate-y-[0px] bg-[rgba(18_18_18_0.85)] shadow-[0_10px_-10px_rgba(18, 18, 18, 0.7)]"
          : null
      }
      `}
    >
      <nav className="flex justify-between items-center relative w-full font-mono z-[12] ">
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition classNames={fadeClass} timeout={2000}>
              <>
                <Icon name="Logo" />
              </>
            </CSSTransition>
          )}
        </TransitionGroup>

        <div className="flex items-center lg:hidden">
          <ol className="flex justify-between items-center p-0 m-0 list-none">
            <TransitionGroup component={null}>
              {config.navLinks.map(({ language, body }) => {
                if (language === pathname) {
                  return body.map(({ url, name }, i: number) => (
                    <CSSTransition
                      key={i}
                      classNames={fadeDownClass}
                      timeout={3000}
                    >
                      <li key={i} className="my-1 relative">
                        <a
                          href={url}
                          className="p-2 before:mr-1 text-xs before:text-[10px] before:text-right before:text-cyan-500"
                        >
                          {name}
                        </a>
                      </li>
                    </CSSTransition>
                  ));
                }
              })}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition classNames={fadeDownClass} timeout={3000}>
                <div
                  style={{
                    transitionDelay: `${
                      isHome ? config.navLinks.length * 100 : 0
                    }ms`,
                  }}
                >
                  <a
                    href="/cv"
                    target="_blank"
                    className="bg-transparent
               border border-solid border-cyan-500
               font-mono
               px-3 py-4 ml-4 rounded
               text-xs leading-none text-cyan-500 
               transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
               hover:shadow-[3px_3px_0_0_rgba(6,182,212,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    Currículo
                  </a>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </nav>
    </header>
  );
};

export default Header;
