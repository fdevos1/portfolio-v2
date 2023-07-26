import { ComponentProps } from "react";

export type LinkProps = ComponentProps<"a">;

const Link = (props: LinkProps) => {
  return (
    <a
      className="text-neutral-300 font-medium truncate hover:underline"
      {...props}
    />
  );
};

export default Link;
