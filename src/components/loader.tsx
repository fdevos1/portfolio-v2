"use client";

import { useEffect, useState } from "react";

import anime from "animejs";
import Icon from "./icons/icon";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: "#logo path",
        delay: 300,
        duration: 1500,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: "#logo #B",
        duration: 700,
        easing: "easeInOutQuart",
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 500,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".loader",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-900 z-[99]">
      <div
        className={`logo-wrapper w-max max-w-[100px] transition-all ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon
          name="Loader"
          className="block w-full h-full my-0 mx-auto fill-none"
        />
      </div>
    </div>
  );
};

export default Loader;
