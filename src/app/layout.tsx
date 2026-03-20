import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Header } from "@/components/shared/header";
import { Footer } from "@/components/shared/footer";
import PageTransition from "@/components/ui/page-transition";
import InitialLoader from "@/components/ui/initial-loader";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solar - Renewable Energy Solutions",
  description: "High-quality solar panels and renewable energy products in the UK.",
  metadataBase: new URL("https://www.solar-example.co.uk"),
  openGraph: {
    title: "Solar - Renewable Energy Solutions",
    description: "High-quality solar panels and renewable energy products in the UK.",
    type: "website",
    locale: "en_GB",
    url: "https://www.solar-example.co.uk",
    images: [
      {
        url: "https://www.solar-example.co.uk/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Solar Panels on a Modern Home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar - Renewable Energy Solutions",
    description: "High-quality solar panels and renewable energy products in the UK.",
    images: ["https://www.solar-example.co.uk/assets/og-image.jpg"],
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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <InitialLoader />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
