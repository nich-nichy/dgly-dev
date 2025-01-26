import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "DGLY-Dev",
  description: "This is a development site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return <html suppressHydrationWarning>
    <body>
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <main>
          <ThemeProvider
          // attribute="class"
          // defaultTheme="light"
          // enableSystem
          // disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </main>
      </SidebarProvider>
    </body>
  </html>

}
