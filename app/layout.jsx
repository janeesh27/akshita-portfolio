import "./globals.css";

export const metadata = {
  title: "Akshita Agarwal - Design Partner",
  description:
    "I help consumer brands turn ideas into design-driven success. As a design partner, I craft identities, packaging, and brand experiences that don't just look good—they sell, connect, and last.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
