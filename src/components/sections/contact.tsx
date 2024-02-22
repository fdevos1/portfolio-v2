import { useTranslations } from "next-intl";

import config from "@/config";
import { RevealWrapper } from "next-reveal";

const Contact = () => {
  const text = useTranslations("Contact");

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
      <section
        className="max-w-[600px] mb-[50px] mx-auto text-center lg:mb-[100px]"
        id="contato"
      >
        <h2 className="text-4xl">{text("title")}</h2>

        <p className="text-lg text-slate-300">{text("text")}</p>

        <a
          href={`mailto:${config.email}`}
          className="mt-[50px] text-cyan-500 bg-transparent border border-solid border-cyan-500 py-5 px-6 rounded font-mono leading-none text-lg
        transition-all duration-[250ms] ease-[cubic-bezier(0.215, 0.61, 0.355, 1)]
               hover:shadow-[3px_3px_0_0_rgba(6,182,212,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]"
        >
          {text("button")}
        </a>
      </section>
    </RevealWrapper>
  );
};

export default Contact;
