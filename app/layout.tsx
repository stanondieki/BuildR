import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Turkidd Devs — We Build Digital Products That Grow Your Business",
  description:
    "Turkidd Devs builds websites, apps, and digital products that help businesses grow. Web development, UI/UX design, and tech consulting.",
  icons: {
    icon: "/Turkidd.png",
    apple: "/Turkidd.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <ScrollProgress />
        {children}
        <BackToTop />
        <ChatWidget />
      </body>
    </html>
  );
}
