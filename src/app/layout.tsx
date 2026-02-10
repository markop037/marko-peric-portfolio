import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marko Perić | Software Developer",
  description:
    "Backend Development, Automation & Cloud Technologies. I design and develop backend services, automation solutions, and data-driven applications using Python, C++, cloud technologies, and modern APIs.",
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
      "Backend Development, Automation & Cloud Technologies. Building backend services and automation with Python, C++, cloud technologies, and modern APIs.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marko Perić | Software Developer",
    description:
      "Backend Development, Automation & Cloud Technologies. Building backend services and automation with Python, C++, cloud technologies, and modern APIs.",
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
