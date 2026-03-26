import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Katranis Parts - Αξεσουάρ Αυτοκινήτων & Είδη Πρατηρίων B2B",
    template: "%s | Katranis Parts",
  },
  description:
    "Επαγγελματικός κατάλογος B2B για αξεσουάρ αυτοκινήτων, είδη πρατηρίων και ανταλλακτικά. Ποιοτικά προϊόντα σε χονδρικές τιμές.",
  keywords: ["αξεσουάρ αυτοκινήτων", "B2B", "ανταλλακτικά", "είδη πρατηρίων", "χονδρική"],
  openGraph: {
    title: "Katranis Parts - Αξεσουάρ Αυτοκινήτων & Είδη Πρατηρίων B2B",
    description:
      "Επαγγελματικός κατάλογος B2B για αξεσουάρ αυτοκινήτων, είδη πρατηρίων και ανταλλακτικά.",
    type: "website",
    locale: "el_GR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className="antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}