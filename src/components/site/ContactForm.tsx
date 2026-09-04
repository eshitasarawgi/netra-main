import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { submitContact } from "@/lib/contact.functions";

export function ContactForm() {
  const submit = useServerFn(submitContact);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setError(null);
    const fd = new FormData(form);
    const data = {
      fullName: String(fd.get("fullName") ?? "").trim(),
      business: String(fd.get("business") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      goals: String(fd.get("goals") ?? "").trim(),
      company_url: String(fd.get("company_url") ?? ""),
    };

    try {
      const res = await submit({ data });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setError(res.error ?? "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setError(err?.message ?? "Please check your inputs and try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="border border-border bg-card p-7 sm:p-10">
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" placeholder="Your name" />
        <Field label="Business" name="business" placeholder="Company / firm" />
        <Field label="Email Address" name="email" type="email" placeholder="you@company.com" />
        <Field label="Contact Number" name="phone" type="tel" placeholder="+91 ..." />
        <div className="sm:col-span-2">
          <Field
            label="How Your Business Operates Today"
            name="goals"
            textarea
            placeholder="Tell us what runs manually, where things break, and what you want the business to run on."
          />
        </div>
      </div>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow">Replies within 24 hours</p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="border border-foreground bg-foreground px-7 py-4 text-[12px] font-medium uppercase tracking-[0.16em] text-background transition-colors hover:border-accent hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Request a Conversation"}
        </button>
      </div>

      {status === "success" && (
        <div className="mt-7 border-l-2 border-accent bg-surface px-5 py-4 text-[15px] text-foreground">
          Received. We will be in touch shortly to schedule your discovery session.
        </div>
      )}
      {status === "error" && (
        <div className="mt-7 border-l-2 border-destructive bg-surface px-5 py-4 text-[15px] text-foreground">
          {error}
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full border border-border bg-background px-4 py-3.5 text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-accent";
  return (
    <label className="block">
      <span className="eyebrow mb-2 block">{label}</span>
      {textarea ? (
        <textarea required name={name} placeholder={placeholder} rows={6} className={cls} />
      ) : (
        <input required name={name} type={type} placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}
