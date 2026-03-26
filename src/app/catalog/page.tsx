import type { Metadata } from "next";
import ProductCard from "../../components/ProductCard";
import { getAllProducts, Product } from "../../lib/db";

export const metadata: Metadata = {
  title: "Κατάλογος Προϊόντων",
  description: "Περιηγηθείτε στον πλήρη B2B κατάλογο αξεσουάρ αυτοκινήτων, ανταλλακτικών και ειδών πρατηρίων σε χονδρικές τιμές.",
};

interface ProductCardProps {
  product: Product;
}

export default function CatalogPage() {
  const products = getAllProducts();

  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-brand-950 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-2">Κατάλογος</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Κατάλογος Προϊόντων</h1>
          <p className="mt-3 text-gray-400 max-w-2xl">Περιηγηθείτε στην πλήρη γκάμα χονδρικής αξεσουάρ αυτοκινήτων και ειδών πρατηρίων.</p>
        </div>
      </div>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}