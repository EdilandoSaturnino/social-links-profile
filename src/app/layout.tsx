import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/static/Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/static/Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/static/Inter-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Social Links Profile",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
