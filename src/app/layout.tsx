import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Saurabh Malhotra | Director, Internal Audit & Risk Management",
  description: "Strategic audit leader with 14+ years experience. CPA (Canada), CA (India). Specializing in SOX 404, enterprise risk management, and AI-powered audit innovation.",
  keywords: ["Internal Audit", "SOX 404", "Risk Management", "CPA", "Audit Automation", "AI in Audit", "Vancouver"],
  authors: [{ name: "Saurabh Malhotra" }],
  openGraph: {
    title: "Saurabh Malhotra | Director, Internal Audit & Risk Management",
    description: "Strategic audit leader with 14+ years experience. Specializing in SOX 404, enterprise risk management, and AI-powered audit innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
