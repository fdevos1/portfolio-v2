"use client";

import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import config from "@/config";
import TabButton from "../tabButton";
import TabActiveHighlight from "../tabActiveHighlight";
import { RevealWrapper } from "next-reveal";

const Jobs = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const pathname = usePathname();
  const text = useTranslations("Jobs");

  return (
    <RevealWrapper
      origin="bottom"
      distance="20px"
      duration={500}
      rotate={{ x: 0, y: 0, z: 0 }}
      opacity={0}
      scale={1}
      easing="cubic-bezier(0.645, 0.045, 0.355, 1)"
      mobile={true}
      reset={false}
      useDelay="always"
      viewFactor={0.25}
      viewOffset={{ top: 0, right: 0, bottom: 0, left: 0 }}
    >
      <section className="max-w-[700px]" id="experiencia">
        <h2 className="mt-[10px] mb-[40px]">{text("title")}</h2>

        <div className="flex md:block min-[700px]:min-h-[340px]">
          <div
            className="relative z-[3] w-max p-0 m-0  
        md:flex md:overflow-x-auto md:w-[calc(100%+100px)] md:pl-[50px] md:ml-[-50px] md:mb-[30px]
       sm:w-[calc(100%+50px)] sm:pl-[25px] sm:ml-[-25px]
        "
            aria-label="Abas de trabalho"
          >
            {config.jobsData.map((item) => {
              const { language, body } = item;

              if (language === pathname) {
                return (
                  body &&
                  body.map(({ company }, i) => (
                    <TabButton
                      key={i}
                      isActive={activeTabId === i}
                      onClick={() => setActiveTabId(i)}
                      id={`aba-${i}`}
                      role="tab"
                      index={i}
                      tabIndex={activeTabId === i ? 0 : -1}
                      companyName={company}
                    />
                  ))
                );
              }
            })}
            <TabActiveHighlight activeTabId={activeTabId} />
          </div>

          <div className="relative w-full ml-[20px] md:ml-0">
            {config.jobsData.map(({ body, language }, i: number) => {
              if (language === pathname) {
                return (
                  body &&
                  body.map(
                    ({ company, stack, date, description }, i: number) => (
                      <CSSTransition
                        key={i}
                        in={activeTabId === i}
                        timeout={250}
                        classNames="fade"
                      >
                        <div
                          className="w-full h-auto px-[5px] py-[10px] "
                          id={`panel-${i}`}
                          role="tabpanel"
                          tabIndex={activeTabId === i ? 0 : -1}
                          aria-labelledby={`aba-${i}`}
                          aria-hidden={activeTabId !== i}
                          hidden={activeTabId !== i}
                        >
                          <h3 className="mb-[2px] text-xl font-medium leading-[1.3]">
                            <span>{stack}</span>
                            <span className="text-cyan-500">
                              &nbsp;@&nbsp;
                              {company}
                            </span>
                          </h3>

                          <p className="mb-[25px] text-slate-300 text-sm font-mono">
                            {date}
                          </p>

                          <div>
                            <ul className="text-lg text-slate-400 font-light">
                              {description &&
                                description.map((item, i) => (
                                  <li
                                    key={i}
                                    className="relative pl-[30px] mb-[10px] before:content-['▹'] before:absolute before:left-0 before:text-cyan-500"
                                  >
                                    {item}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </CSSTransition>
                    )
                  )
                );
              }
            })}
          </div>
        </div>
      </section>
    </RevealWrapper>
  );
};

export default Jobs;
