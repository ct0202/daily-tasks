import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Tasks",
  description: "Приложение для управления ежедневными задачами",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}