import { useTranslations } from "next-intl";

import config from "@/config";
import Icon from "./icons/icon";

const Footer = () => {
  const text = useTranslations("Footer");

  return (
    <footer className="flex flex-col items-center justify-center h-auto min-h-[70px] p-4 text-center">
      <div className="w-full max-w-[280px] mb-[10px] mx-auto text-slate-200 xl:hidden">
        <ul className="flex justify-between items-center">
          {config.socialMedias &&
            config.socialMedias.map(
              ({ name, url }: { name: string; url: string }, i: number) => {
                return (
                  <li key={i}>
                    <a href={url} aria-label={name}>
                      <Icon name={name} />
                    </a>
                  </li>
                );
              }
            )}
        </ul>
      </div>

      <div className="text-slate-200 font-mono text-[10px] leading-none">
        <a href="https://github.com/fdevos1" className="p-2">
          <div>{text("made_by")} Felipe Devos</div>
          <div>{text("design_by")} Chiang</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
