import type { Metadata } from "next";
import { DM_Sans, Manrope, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Airbnb Assistants For Property Management",
  description:
    "Airbnb Assistants for listing management, customer bookings, expense tracking, and guest support.",
  openGraph: {
    title: "Airbnb Assistants For Property Management",
    description:
      "Airbnb Assistants for listing management, customer bookings, expense tracking, and guest support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
  hero,
  services,
  pricing,
  tools,
  getting_start,
  reasons,
  review,
  faq,
  cta,
  footer
}: Readonly<{
  children: React.ReactNode;
  hero: React.ReactNode;
  services: React.ReactNode;
  pricing: React.ReactNode;
  tools: React.ReactNode;
  getting_start: React.ReactNode;
  reasons: React.ReactNode;
  review: React.ReactNode;
  faq: React.ReactNode,
  cta: React.ReactNode,
  footer: React.ReactNode,
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${manrope.variable} ${plusJakartaSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {hero}
        {services}
        {pricing}
        {tools}
        {getting_start}
        {reasons}
        {review}
        {faq}
        {cta}
        {footer}
        {children}
      </body>
    </html>
  );
}
