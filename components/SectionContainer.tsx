"use client";


export default function SectionContainer({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 mb-10 md:mb-40 mx-5 md:mx-20 lg:mx-40 ">
      <h2
        className="inline-block
  text-2xl
  md:text-4xl
  font-roboto
  text-tertiary
  font-extrabold
  border-b-4 border-pink-500
  mb-2 md:mb-20
  pb-2"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
