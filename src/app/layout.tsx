import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marko Perić | Software Developer",
  description:
    "Backend, Automation & Cloud-Oriented Development. I build scalable backend systems, automation tools, and data-driven applications using Python, C++, and modern cloud technologies.",
  keywords: [
    "Software Developer",
    "Backend Developer",
    "Python Developer",
    "C++ Developer",
    "AWS",
    "Cloud Development",
    "Automation",
    "FastAPI",
    "Full Stack Developer",
  ],
  authors: [{ name: "Marko Perić" }],
  openGraph: {
    title: "Marko Perić | Software Developer",
    description:
      "Backend, Automation & Cloud-Oriented Development. Building scalable systems with Python, C++, and cloud technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marko Perić | Software Developer",
    description:
      "Backend, Automation & Cloud-Oriented Development. Building scalable systems with Python, C++, and cloud technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-900 text-white antialiased">{children}</body>
    </html>
  );
}
