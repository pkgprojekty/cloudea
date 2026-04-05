export const metadata = {
  title: "Strategy & Architecture",
  description: "Premium advisory in IT architecture, trusted data foundations, and strategy execution.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
