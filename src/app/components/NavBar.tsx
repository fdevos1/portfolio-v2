import { Mail } from "lucide-react";
import LocaleSwitcher from "./LocaleSwitcher";

const NavBar = () => {
  return (
    <div className="flex w-full justify-between items-center pb-4 px-8">
      <div className="flex gap-4 justify-start items-center">
        <div className="w-[40px] h-[40px] flex justify-center items-center	 rounded-full border-2 border-solid border-neutral-700 bg-neutral-800">
          <Mail color="grey" size={20} />
        </div>
        <p className="text-gray-300	text-xs	">felipe.devosm@gmail.com</p>
      </div>

      <div className="flex gap-2 justify-center items-center">
        <a
          className="text-gray-300	text-xs"
          href="https://www.linkedin.com/in/felipe-devos-5540ab195/"
        >
          Linkedin
        </a>
        <p className="text-gray-300	text-xs">/</p>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default NavBar;
