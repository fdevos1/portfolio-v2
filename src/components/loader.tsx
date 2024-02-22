"use client";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import anime from "animejs";

const Loader = ({ finishLoading }: { finishLoading: () => void }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader.add({
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
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-neutral-900 z-50">
      <Helmet bodyAttributes={{ class: `hidden` }} />
    </div>
  );
};

export default Loader;
