import { ComponentProps } from "react";

import IconFolder from "./folder";
import IconGitHub from "./github";
import IconInstagram from "./instagram";
import IconLinkedin from "./linkedin";
import IconLogo from "./logo";

export type IconProps = ComponentProps<"svg"> & {
  name: string;
};

const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case "Github":
      return <IconGitHub />;
    case "Instagram":
      return <IconInstagram />;
    case "Linkedin":
      return <IconLinkedin />;
    case "Logo":
      return <IconLogo />;
    case "Folder":
      return <IconFolder {...props} />;
  }
};

export default Icon;
