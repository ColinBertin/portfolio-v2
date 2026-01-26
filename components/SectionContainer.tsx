"use client";

import { ReactNode } from "react";

export default function SectionContainer({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="my-10 mx-5 md:mx-20 lg:mx-40">
      <h2
        className="inline-block
  text-[32px]
  font-roboto
  text-tertiary
  border-b-4 border-pink-500
  mt-0
  pb-2"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
