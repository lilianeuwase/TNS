import type { Metadata } from "next";
import "../styles/globals.css";
import ClientLayout from "@/components/common/ClientLayout";

export const metadata: Metadata = {
  title: "TNS Tours Company | Explore Rwanda",
  description: "Discover Rwanda's hidden treasures with TNS Tours Company – your trusted partner for unforgettable travel experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-night text-sand">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
