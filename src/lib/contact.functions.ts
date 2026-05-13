import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(120),
  business: z.string().trim().min(1, "Business is required").max(160),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(4, "Contact number required").max(40),
  goals: z.string().trim().min(10, "Tell us a little more").max(2000),
  // Honeypot
  company_url: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof ContactSchema>;

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.company_url) {
      // Honeypot triggered — silently succeed
      return { ok: true };
    }

    const payload = new URLSearchParams();
    payload.set("Full Name", data.fullName);
    payload.set("Business", data.business);
    payload.set("Email", data.email);
    payload.set("Contact Number", data.phone);
    payload.set("Goals With NETRA", data.goals);
    payload.set("_subject", `NETRA — New Inquiry from ${data.fullName} (${data.business})`);
    payload.set("_template", "table");
    payload.set("_captcha", "false");

    try {
      const res = await fetch("https://formsubmit.co/ajax/eshisara@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: payload.toString(),
      });

      if (!res.ok) {
        console.error("formsubmit error", res.status, await res.text());
        return { ok: false, error: "Could not deliver your message. Please try again." };
      }

      return { ok: true };
    } catch (err) {
      console.error("contact submission failed", err);
      return { ok: false, error: "Network error. Please try again." };
    }
  });
