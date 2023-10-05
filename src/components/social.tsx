import config from "@/config";
import Icon from "./icons/icon";

import Side from "./side";

const Social = () => {
  return (
    <Side orientation="left">
      <ul className="flex flex-col items-center after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-auto after:bg-slate-300">
        {config.socialMedias &&
          config.socialMedias.map(
            ({ url, name }: { url: string; name: string }, i: number) => (
              <li key={i} className="last:mb-[20px]">
                <a
                  href={url}
                  className="p-[10px] hover:translate-y-[-3px] focus:translate-y-[-3px]"
                >
                  <Icon name={name} />
                </a>
              </li>
            )
          )}
      </ul>
    </Side>
  );
};

export default Social;
