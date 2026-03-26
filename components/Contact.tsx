"use client";

import { useMemo, useState } from "react";
import SectionContainer from "./SectionContainer";
import { useLanguage } from "@/contexts/LanguageContext";

type SubmitStatus =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "success" }
  | { state: "error"; message: string };

type Toast =
  | { open: false }
  | { open: true; variant: "success" | "error"; message: string };

export default function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const [toast, setToast] = useState<Toast>({ open: false });

  const canSubmit = useMemo(() => {
    if (status.state === "sending") {
      return false;
    }
    return (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      message.trim().length > 0
    );
  }, [email, message, name, status.state]);

  function showToast(nextToast: Omit<Extract<Toast, { open: true }>, "open">) {
    setToast({ open: true, ...nextToast });
    window.setTimeout(() => setToast({ open: false }), 3500);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus({ state: "sending" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await res.json().catch(() => null)) as unknown;

      if (!res.ok) {
        const errorMessage =
          typeof data === "object" && data !== null && "error" in data
            ? String((data as { error: unknown }).error)
            : t.contact.unknownError;
        setStatus({ state: "error", message: errorMessage });
        showToast({ variant: "error", message: errorMessage });
        return;
      }

      setStatus({ state: "success" });
      showToast({ variant: "success", message: t.contact.successToast });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({
        state: "error",
        message: t.contact.networkError,
      });
      showToast({
        variant: "error",
        message: t.contact.networkError,
      });
    }
  }

  return (
    <SectionContainer id="contact" title={t.sections.contact}>
      {toast.open ? (
        <div className="fixed left-1/2 top-20 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
          <div
            className={`rounded-md px-4 py-3 font-semibold shadow-lg border ${
              toast.variant === "success"
                ? "bg-green-500/10 text-green-500 border-green-500/30"
                : "bg-red-500/10 text-red-500 border-red-500/30"
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        </div>
      ) : null}

      <div className="mt-10 w-full max-w-2xl mx-auto">
        <p className="text-secondary text-lg mb-8">
          {t.contact.intro}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-name"
              className="text-secondary font-semibold"
            >
              {t.contact.nameLabel}
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              minLength={2}
              maxLength={60}
              required
              autoComplete="name"
              className="w-full rounded-md border border-tertiary/30 bg-bg px-4 py-3 text-secondary outline-none focus:border-pink-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-email"
              className="text-secondary font-semibold"
            >
              {t.contact.emailLabel}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={254}
              required
              autoComplete="email"
              className="w-full rounded-md border border-tertiary/30 bg-bg px-4 py-3 text-secondary outline-none focus:border-pink-500"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="contact-message"
              className="text-secondary font-semibold"
            >
              {t.contact.messageLabel}
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              minLength={10}
              maxLength={2000}
              required
              rows={6}
              className="w-full resize-y rounded-md border border-tertiary/30 bg-bg px-4 py-3 text-secondary outline-none focus:border-pink-500"
            />
          </div>

          {/* Honeypot */}
          <input
            name="website_url"
            tabIndex={-1}
            autoComplete="new-password"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              opacity: 0,
            }}
          />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={!canSubmit}
              className="rounded-md bg-pink-500 px-5 py-3 font-semibold text-white transition-opacity disabled:opacity-50"
            >
              {status.state === "sending" ? t.contact.sending : t.contact.submit}
            </button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
