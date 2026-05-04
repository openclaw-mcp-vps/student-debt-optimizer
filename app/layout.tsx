import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Debt Optimizer – Optimize Your Loan Repayment",
  description:
    "Compare income-driven plans, refinancing options, and forgiveness programs. Get personalized student loan repayment recommendations."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="19f2239b-745e-44bc-a39d-a9d5dd2e3594"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
