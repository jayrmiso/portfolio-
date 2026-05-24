import React from "react";

type PageSectionProps = {
  id: string;
  children: React.ReactNode;
};

export default function PageSection({ id, children }: PageSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="scroll-reveal mx-auto w-full max-w-[1680px] px-6 py-16 sm:px-8 md:px-12 md:py-24 2xl:px-16">
        {children}
      </div>
    </section>
  );
}
