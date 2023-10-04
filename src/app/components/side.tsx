const Side = ({
  children,
  orientation,
}: {
  children: JSX.Element;
  orientation: string;
}) => {
  return (
    <div
      className={`
      lg:hidden
      w-[40px] fixed bottom-0 ${
        orientation === "left"
          ? "left-[40px] max-[1080px]:left-[20px] right-auto"
          : "left-auto right-[40px] max-[1080px]:right-[20px]"
      }
      z-10
      text-slate-300    
      `}
    >
      {children}
    </div>
  );
};

export default Side;
