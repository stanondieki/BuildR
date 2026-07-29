import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Turkidd Devs — We Build Digital Products That Grow Your Business",
  description:
    "Turkidd Devs builds websites, apps, and digital products that help businesses grow. Web development, UI/UX design, and tech consulting.",
  icons: {
    icon: "/TD_logo.png",
    apple: "/TD_logo.png",
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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
