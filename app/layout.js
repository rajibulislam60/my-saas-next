import "./globals.css";

export const metadata = {
  title: "SaaS Landing Page",
  description: "Modern SaaS Landing Page built with Next.js & TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
