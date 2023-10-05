import { ComponentProps } from "react";

export type TextProps = ComponentProps<"p">;

const Text = (props: TextProps) => {
  return <p className="text-neutral-300 font-medium truncate" {...props} />;
};

export default Text