export default function Loading() {
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

      {/* Skeleton Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse">
              <div className="bg-gray-100 h-48" />
              <div className="p-5 space-y-3">
                <div className="h-5 w-20 bg-gray-100 rounded-full" />
                <div className="h-4 w-3/4 bg-gray-100 rounded" />
                <div className="h-6 w-16 bg-gray-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}