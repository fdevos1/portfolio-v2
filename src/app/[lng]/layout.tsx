import "../globals.css";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";

import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio - Felipe Devos",
  description: "Criado com NextJS",
};

export function generateStaticParams() {
  return [{ locale: "en-US" }, { locale: "pt-BR" }];
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  let messages: any;
  try {
    messages = (await import(`../../messages/${lng}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={lng}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={lng} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
