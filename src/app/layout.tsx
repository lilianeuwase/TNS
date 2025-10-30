import type { Metadata } from "next";
import "../styles/globals.css";
import ClientLayout from "@/components/common/ClientLayout";

export const metadata: Metadata = {
  title: "TNS Tours Company | Explore Rwanda",
  description:
    "Discover Rwanda's hidden treasures with TNS Tours Company – your trusted partner for unforgettable travel experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/qoa0yii.css" />
      </head>
      <body className="bg-night text-sand">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}