import { ComponentProps } from "react";

export type TitleProps = ComponentProps<"h3">;

const Title = (props: TitleProps) => {
  return <h3 className="text-neutral-400 font-light" {...props} />;
};

export default Title;
