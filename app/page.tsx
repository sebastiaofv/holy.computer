import Link from "next/link";
import { Column } from "@/components/Column";
import { PhotoStrip } from "@/components/PhotoStrip";
import { site } from "@/site.config";

export default function Home() {
  return (
    <Column className="prose">
      <h1 className="mb-5 text-[18px] font-medium">{site.name}</h1>

      {/* ---- Intro ------------------------------------------------------ */}
      <p>
        I&rsquo;m a quantitative developer at the{" "}
        <a href="https://www.bportugal.pt/en" target="_blank" rel="noreferrer">
          Banco de Portugal
        </a>
        . I build the models and the pipelines underneath them &mdash; the
        boring infrastructure that decides whether a number is trustworthy.
      </p>

      <p>
        Most of my work lives at the seam between finance and software: risk and
        forecasting models, the data that feeds them, and the tooling that keeps
        both reproducible a year later.
      </p>

      <p>
        I care about systems you can reason about end to end. Small pieces, clear
        interfaces, no magic in the middle.
      </p>

      <p>
        I occasionally write.{" "}
        <Link href="/blog" className="text-muted">
          Read the blog &rsaquo;
        </Link>
      </p>

      {/* ---- Contact ---------------------------------------------------- */}
      <h2 className="mt-10 mb-3 text-[18px] font-medium">Contact</h2>

      <p>
        Reach me at <a href="https://www.linkedin.com/in/sebastiaovicente/">/in/sebastiaovicente/</a> or <a href={`mailto:${site.email}`}>{site.email}</a> :)
      </p>

      {/* ---- Photos ----------------------------------------------------- */}
      <h2 className="mt-10 mb-3 text-[18px] font-medium">Sketchbook</h2>
      <PhotoStrip />
    </Column>
  );
}
