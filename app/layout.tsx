import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] ,variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({ subsets: ["latin"] ,weight:['400','700'],variable: '--font-ibm-plex-serif'});


export const metadata: Metadata = {
  title: "Sampath Bank",
  description: "Sampath Bank is a modern bank that offers a wide range of banking services.",
  icons:{
    icon:'/icons/sampath.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
