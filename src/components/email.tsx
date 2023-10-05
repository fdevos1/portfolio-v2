import config from "@/config";
import Side from "./side";

const Email = () => {
  return (
    <Side orientation="right">
      <div className="flex flex-col items-center after:content-[''] after:block after:w-[1px] after:h-[90px] after:my-auto after:bg-slate-300">
        <a
          href={`mailto:${config.email}`}
          className="mx-auto my-[20px] font-mono text-xs leading-[18px] tracking-[0.1em] [writing-mode:vertical-lr] hover:translate-y-[-3px] focus:translate-y-[-3px]"
        >
          {config.email}
        </a>
      </div>
    </Side>
  );
};

export default Email;
