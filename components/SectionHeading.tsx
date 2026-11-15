import type { ReactNode } from "react";

type Props = { eyebrow: string; title: string; children: ReactNode };

export default function SectionHeading({ eyebrow, title, children }: Props) {
  return (
    <div className="sec-h reveal">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
