"use client";

import Link from "next/link";

export default function PageNotFound() {
  return (
    <main
      id="banner"
      className="flex h-screen w-screen items-center justify-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(https://images.unsplash.com/photo-1545972154-9bb223aac798?auto=format&fit=crop&w=3050&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="text-center">
        <h2 className="m-0 p-0 text-6xl font-bold">404</h2>
        <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
        <p className="mt-2 text-lg">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Link
          href="/"
          className="mt-4 py-2 px-3 rounded-lg inline-block font-bold transition-colors hover:text-pink-600 border border-white hover:border-pink-600"
        >
          <span aria-hidden="true">&larr;</span> Back to home
        </Link>
      </div>
    </main>
  );
}