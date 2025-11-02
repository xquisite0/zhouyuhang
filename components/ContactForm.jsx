"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    setIsLoading(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      setStatus({ ok: true, msg: "Thanks! I'll get back to you soon." });
      e.currentTarget.reset();
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input name="name" className="input input-bordered w-full" required />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Subject</label>
          <input name="subject" className="input input-bordered w-full" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full min-h-32"
          required
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="btn btn-primary" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </button>
        {status && (
          <p
            className={
              status.ok ? "text-green-600 text-sm" : "text-red-600 text-sm"
            }
          >
            {status.msg}
          </p>
        )}
      </div>
    </form>
  );
}
