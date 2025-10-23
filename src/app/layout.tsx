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
        <link rel="stylesheet" href="https://use.typekit.net/qoa0yii.css"/>
      </head>
      <body className="bg-night text-sand">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}