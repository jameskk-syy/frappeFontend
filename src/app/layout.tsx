import { StrictMode } from "react";
import "./globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Frappe Saas",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <html lang="en">
        <title>Frappe Saas</title>
        
        <link rel="icon" href="../icon.png" type="image/x-icon" sizes="32x32" />
        <body suppressHydrationWarning={true}>{children}</body>
      </html>
     
    
  );
}
