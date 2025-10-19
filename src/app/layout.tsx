import type { Metadata } from "next";
import "../styles/globals.css";
import ClientLayout from "@/components/common/ClientLayout";
import Navbar from "@/components/common/Navbar";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-night text-sand">
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
