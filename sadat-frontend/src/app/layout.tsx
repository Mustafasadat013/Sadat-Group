import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { NotificationContainer } from "@/components/ui/Notification";
import { CommandPalette } from "@/components/ui/CommandPalette";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sadat Group - Multi-Business Ecosystem",
  description: "Empowering businesses and individuals through innovative solutions across multiple industries. From luxury cosmetics to financial services, we're your trusted partner for success.",
  keywords: "Sadat Group, business ecosystem, luxury cosmetics, financial services, real estate, energy, transport, investments",
  manifest: "/manifest.json",
  themeColor: "#2563eb",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sadatgroup.com",
    title: "Sadat Group - Multi-Business Ecosystem",
    description: "Empowering businesses and individuals through innovative solutions across multiple industries.",
    siteName: "Sadat Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sadat Group - Multi-Business Ecosystem",
    description: "Empowering businesses and individuals through innovative solutions across multiple industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Sadat Group" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sadat Group" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <QueryProvider>
            <ThemeProvider>
              <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
                <Navigation />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <NotificationContainer />
                <CommandPalette />
              </div>
            </ThemeProvider>
          </QueryProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
