import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

export default function ProductCard({
  name,
  category,
  price,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-brand-100/50 hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      <div className="relative bg-surface-100 h-48 overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-5 flex flex-col flex-1 border-t border-gray-50">
        <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full mb-3 w-fit uppercase tracking-wide">
          {category}
        </span>
        <h3 className="font-semibold text-gray-900 mb-3 leading-snug">{name}</h3>
        <div className="mt-auto flex items-center justify-between">
          <p className="font-bold text-xl text-brand-700">{price}</p>
          <span className="text-xs text-gray-400 font-medium">Χονδρική</span>
        </div>
      </div>
    </div>
  );
}