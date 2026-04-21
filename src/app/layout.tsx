import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPR - Club Perspectives et Réalités | Brazzaville",
  description: "Site officiel du Club Perspectives et Réalités (CPR), parti politique membre de la Majorité Présidentielle en République du Congo. Libéralisme démocratique et valeurs humanistes.",
  keywords: ["CPR", "Club Perspectives et Réalités", "Brazzaville", "Congo", "Parti politique", "Démocratie participative", "Moungali"],
  authors: [{ name: "CPR - Club Perspectives et Réalités" }],
  icons: {
    icon: "/logo-cpr.png",
  },
  openGraph: {
    title: "CPR - Club Perspectives et Réalités",
    description: "Libéralisme démocratique et valeurs humanistes pour le développement de Brazzaville",
    url: "https://cpr-congo.cg",
    siteName: "CPR Brazzaville",
    type: "website",
    images: [
      {
        url: "/logo-cpr.png",
        width: 200,
        height: 200,
        alt: "Logo CPR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPR - Club Perspectives et Réalités",
    description: "Libéralisme démocratique et valeurs humanistes pour le développement de Brazzaville",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${sourceSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
