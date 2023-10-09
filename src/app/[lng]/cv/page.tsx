"use client";

import { usePathname } from "next/navigation";

export default function Cv() {
  const pathname = usePathname();

  const cv = pathname.startsWith("/en-US")
    ? "/cv-felipe-devos(en).pdf"
    : "/cv-felipe-devos.pdf";

  return (
    <div className="w-screen h-screen">
      <iframe src={cv} className="w-full h-full" />
    </div>
  );
}
