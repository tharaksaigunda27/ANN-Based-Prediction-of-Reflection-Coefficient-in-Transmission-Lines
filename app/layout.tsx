import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ANN-Based Prediction of Reflection Coefficient",
  description: "Artificial Neural Network (ANN) to predict the reflection coefficient in transmission lines based on load and characteristic impedance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
