import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "feasypol",
    template: "%s - feasypol"
  },
  description:
    "easy! is a self-proclaimed artist. Actively doing photography, graphic design, and 3D art.",
  openGraph: {
    url: "https://feasypol.live",
    type: "website",
    title: "feasypol",
    description: "easy! is a self-proclaimed artist. Actively doing photography, graphic design, and 3D art.",
    images: "/assets/opengraph-image.png"
  },
  twitter: {
    card: "summary_large_image",
    creator: "@feasypol",
    description: "easy! is a self-proclaimed artist. Actively doing photography, graphic design, and 3D art.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
