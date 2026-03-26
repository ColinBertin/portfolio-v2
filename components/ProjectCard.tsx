"use client";

import type { Project, ProjectTech } from "@/types";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { useLanguage } from "@/contexts/LanguageContext";

function ProjectCardBanner({
  name,
  git,
  url,
  githubAriaSuffix,
  visitPrefix,
  liveSiteTitle,
}: {
  name: string;
  git?: string;
  url: string;
  githubAriaSuffix: string;
  visitPrefix: string;
  liveSiteTitle: string;
}) {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-2 border-t border-black/10 bg-[var(--secondary)]/15 px-3 py-2.5 dark:border-white/10"
      style={{ color: "var(--primary)" }}
    >
      <h2 className="min-w-0 truncate text-xl font-bold tracking-tight">{name}</h2>
      <div className="flex shrink-0 items-center gap-1.5">
        {git ? (
          <a
            href={git}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} ${githubAriaSuffix}`}
            title="GitHub"
          >
            <BsGithub className="h-6 w-6 transition-colors hover:text-pink-500" />
          </a>
        ) : null}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${visitPrefix} ${name}`}
          title={liveSiteTitle}
        >
          <TbWorldWww className="h-7 w-7 transition-colors hover:text-pink-500" />
        </a>
      </div>
    </div>
  );
}

function ProjectImageCarousel({ slides, alt }: { slides: string[]; alt: string }) {

  const realCount = slides.length;
  const withClone = useMemo(() => (realCount > 0 ? [...slides, slides[0]] : []), [slides, realCount]);
  const count = withClone.length;
  const multi = realCount > 1;
  const slidePct = 100 / (count ?? 1);

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => {
    if (!multi) return;
    setIndex((i) => i + 1);
  }, [multi]);

  useEffect(() => {
    if (!multi) return;

    let t = window.setInterval(next, 4500);

    const onVisibility = () => {
      if (document.hidden) {
        window.clearInterval(t);
      } else {
        window.clearInterval(t);
        t = window.setInterval(next, 4500);
      }
    };

    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      window.clearInterval(t);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [multi, next]);

  useEffect(() => {
    if (!multi) return;
    if (index < realCount) return;

    const el = trackRef.current;
    if (!el) return;

    const onEnd = () => {
      setAnimate(false);
      setIndex(0);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [index, multi, realCount]);

  // const activeDot = multi ? index % realCount : 0;

  return (
    <div className="relative h-full w-full overflow-hidden bg-black/5 dark:bg-white/5">
      <div
        ref={trackRef}
        className={`flex h-full ${animate ? "transition-transform duration-500 ease-out" : ""}`}
        style={{
          width: `${count * 100}%`,
          transform: `translateX(-${slidePct * index}%)`,
        }}
      >
        {withClone.map((src, i) => (
          <div
            key={i}
            className="relative h-full min-h-[160px] shrink-0 sm:min-h-[180px]"
            style={{ width: `${slidePct}%` }}
          >
            <Image
              src={src}
              alt={i === 0 ? alt : `${alt} (${((i % realCount) + 1).toString()})`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* {multi ? (
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5" role="tablist" aria-label="Project screenshots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeDot}
              className={`h-1.5 rounded-full transition-all ${
                i === activeDot ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : null} */}
    </div>
  );
}

function TechStackOverlay({ technologies, stackLabel }: { technologies: ProjectTech[]; stackLabel: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100"
    >
      <div className="absolute inset-0 bg-[var(--primary)]/75 backdrop-blur-[2px]" />
      <p className="relative z-10 text-xs font-medium uppercase tracking-widest text-[var(--bg)]">
        {stackLabel}
      </p>
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3">
        {technologies.map((tech) => (
          <a
            key={`${tech.class}-${tech.url}`}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--bg)]/95 shadow-md transition-transform hover:scale-110 ${tech.linkClass ?? ""}`}
            title={tech.url}
          >
            <i className={`${tech.class} text-2xl`} style={{ color: tech.color }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage();
  const slides = useMemo(() => {
    if (project.images?.length) return project.images;
    if (project.imageSrc) return [project.imageSrc];
    return [];
  }, [project.imageSrc, project.images]);

  return (
    <article
      className="flex max-w-full flex-col overflow-hidden rounded-xl border border-black/10 shadow-sm transition-shadow hover:shadow-md dark:border-white/10"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="group relative aspect-[16/10] w-full overflow-hidden">
        <ProjectImageCarousel slides={slides} alt={project.name} />
        <TechStackOverlay technologies={project.technologies} stackLabel={t.projectCard.stack} />
      </div>
      <ProjectCardBanner
        name={project.name}
        git={project.git}
        url={project.url}
        githubAriaSuffix={t.projectCard.onGithub}
        visitPrefix={t.projectCard.visitProject}
        liveSiteTitle={t.projectCard.liveSite}
      />
    </article>
  );
}