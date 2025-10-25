import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SpeedInsights } from '@vercel/speed-insights/next';
import TawkTo from "@/components/TawkTo";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hexxhive Solutions - IT Solutions & Services",
  description: "Hexxhive Solutions provides cutting-edge IT solutions and services to help your business thrive in the digital age.",
  keywords: "IT solutions, software development, web development, technology consulting, startup",
  icons: {
    icon: '/official_logo_nobg.png',
    shortcut: '/official_logo_nobg.png',
    apple: '/official_logo_nobg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <SpeedInsights />
          <Footer />
          {/* Replace 'YOUR_PROPERTY_ID' with your actual Tawk.to Property ID */}
          <TawkTo propertyId="68f68456a66b1b19531da210" widgetId="1j81f9scf" />
        </ThemeProvider>
      </body>
    </html>
  );
}
