import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dialogly",
  description: "Make your conversations smarter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${dmSans.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
