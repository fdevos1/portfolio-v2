import { ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  isActive: boolean;
  index: number;
  companyName: string;
};

const TabButton = ({ isActive, index, companyName, ...props }: ButtonProps) => {
  return (
    <button
      className={`flex items-center w-full h-[42px] px-[20px] pb-[2px] border-l  bg-transparent font-mono text-left text-sm whitespace-nowrap relative
     border-zinc-700
      ${isActive ? "text-cyan-500" : "text-slate-300"}
        hover:outline-0 hover:bg-zinc-900
        focus:outline-0 focus:bg-zinc-800
        transition-allCubic
        lg:px-[15px] lg:pt-0 lg:pb-[2px]
        md:justify-center md:w-[120px] md:px-[15px] md:py-0 md:border-l-0 md:border-b-2 md:text-center
        `}
      {...props}
    >
      <span>{companyName}</span>
    </button>
  );
};

export default TabButton;
