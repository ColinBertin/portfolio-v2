"use client";

import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiWantedly } from "react-icons/si";
import { useI18n } from "@/app/i18n-provider";

export default function Footer() {
  const { dictionary: t } = useI18n();

  return (
    <footer className="px-4">
      <div
        className="
          flex items-center justify-center
          border-t-2 border-pink
          px-4 py-3
          sm:justify-between
        "
      >
        <p className="hidden text-sm sm:block">
          {t.footer.copyright}
        </p>

        <ul className="flex items-center gap-3">
          <li>
            <a
              href="https://github.com/ColinBertin"
              target="_blank"
              rel="noreferrer"
              className="
                text-tertiary
                transition-colors duration-300
                hover:text-pink
                text-[28px]
              "
            >
              <BsGithub />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/colinbertin/"
              target="_blank"
              rel="noreferrer"
              className="
                text-tertiary
                transition-colors duration-300
                hover:text-pink
                text-[28px]
              "
            >
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a
              href="https://www.wantedly.com/id/colin_bertin"
              target="_blank"
              rel="noreferrer"
              className="
                text-tertiary
                transition-colors duration-300
                hover:text-pink
                text-[28px]
              "
            >
              <SiWantedly />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
