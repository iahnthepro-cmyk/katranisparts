"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMsg("");

    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(result.error || "Κάτι πήγε στραβά.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Σφάλμα δικτύου. Παρακαλώ δοκιμάστε ξανά.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Όνομα
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Μήνυμα
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          className="block w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all outline-none resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-600 text-white py-3.5 px-4 rounded-xl font-semibold hover:bg-brand-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-600/20"
      >
        {status === "loading" ? "Αποστολή..." : "Αποστολή Μηνύματος"}
      </button>

      {status === "success" && (
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 text-center">
          <p className="text-brand-700 text-sm font-medium">
            Ευχαριστούμε! Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε σύντομα μαζί σας.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
          <p className="text-red-600 text-sm font-medium">
            {errorMsg}
          </p>
        </div>
      )}
    </form>
  );
}