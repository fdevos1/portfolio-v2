"use client";

import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Side = ({
  children,
  orientation,
  isHome,
}: {
  children: JSX.Element;
  orientation: string;
  isHome: Boolean;
}) => {
  const [isMounted, setIsMounted] = useState(!isHome);

  useEffect(() => {
    if (!isHome) {
      return;
    }
    const timeout = setTimeout(() => setIsMounted(true), 2000);
    return () => clearTimeout(timeout);
  }, []);

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
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition
            classNames={isHome ? "fade" : ""}
            timeout={isHome ? 1500 : 0}
          >
            {children}
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Side;
