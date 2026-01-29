import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

type ProjectCardProps = {
  img: StaticImageData;
  language: React.ReactNode[];
  name: string;
  link: string;
  git?: string;
};

export default function ProjectCard({
  img,
  language,
  name,
  link,
  git,
}: ProjectCardProps) {
  return (
    <div
      className="
        relative
        max-h-[350px]
        w-full
        rounded-[10px]
        bg-[var(--dark-secondary)]
        shadow-[3px_3px_23px_3px_rgba(65,63,63,0.3)]
        sm:w-[80%]
        md:max-w-[350px]
        xl:max-w-[500px]
      "
    >
      {/* PREVIEW */}
      <div className="relative h-[80%] group">
        <Image
          src={img}
          alt={name}
          width={360}
          height={360}
          className="
            h-full w-full
            rounded-t-[10px]
            object-cover
          "
        />

        {/* LANGUAGES OVERLAY */}
        <ul
          className="
            absolute inset-0
            flex items-center justify-center
            gap-2
            rounded-t-[10px]
            bg-[rgba(60,58,58,0.9)]
            p-4
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        >
          {language.map((lng, index) => (
            <li
              key={index}
              className="
                text-[40px]
                transition-all
                duration-100
                hover:text-[44px]
                md:text-[52px]
                md:hover:text-[64px]
              "
            >
              {lng}
            </li>
          ))}
        </ul>
      </div>

      {/* INFO */}
      <div
        className="
          flex h-[20%]
          items-center justify-between
          px-4
          text-[var(--light-primary)]
          sm:px-2
        "
      >
        <h3 className="text-sm md:text-base lg:text-xl text-secondary font-semibold">{name}</h3>

        <div className="flex items-center gap-3 pt-1">
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <TbWorldWww
              className="text-[32px] sm:text-[30px] text-secondary
      transition-colors duration-200
      hover:text-pink-500"
            />
          </Link>

          {git && (
            <Link href={git} target="_blank" rel="noopener noreferrer">
              <BsGithub
                className="text-[28px] text-secondary
      transition-colors duration-200
      hover:text-pink-500"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
