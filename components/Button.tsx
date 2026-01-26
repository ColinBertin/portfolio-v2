"use client";

import Link from "next/link";

export default function Button({ name, href, handleClick }: { name: string; href: string; handleClick: () => void }) {
  return (
    <Link href={href} onClick={handleClick}>{name}</Link>
  );
}