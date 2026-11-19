import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export const runtime = "nodejs";

const clean = (v: unknown, max = 200) =>
  String(v ?? "")
    .trim()
    .slice(0, max);

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body)
    return NextResponse.json({ error: "Bad request" }, { status: 400 });

  // honeypot
  if (body.website) return NextResponse.json({ ok: true });

  const d = {
    name: clean(body.name, 80),
    phone: clean(body.phone, 30),
    email: clean(body.email, 100),
    pet: clean(body.pet, 30),
    date: clean(body.date, 20),
    from: clean(body.from, 100),
    to: clean(body.to, 100),
    message: clean(body.message, 1000),
  };

  if (!d.name || !d.phone || !d.from || !d.to) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;
  if (!user || !pass || !to)
    return NextResponse.json({ error: "Not configured" }, { status: 500 });

  const text = [
    `Ime: ${d.name}`,
    `Telefon: ${d.phone}`,
    `Email: ${d.email || "-"}`,
    `Ljubimac: ${d.pet}`,
    `Datum: ${d.date || "-"}`,
    `Ruta: ${d.from} → ${d.to}`,
    "",
    d.message || "(bez poruke)",
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `${site.name} <${user}>`,
      to,
      replyTo: d.email || undefined,
      subject: `Novi upit: ${d.from} → ${d.to} (${d.pet})`,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }
}
