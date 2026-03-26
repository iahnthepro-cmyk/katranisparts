"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-900 text-white py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Car Supply Catalog</h1>
      </header>
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Product Catalog
        </h2>
        <div className="p-4 bg-red-50 border border-red-200 rounded">
          <p className="text-red-700 font-medium">Failed to load products</p>
          <p className="text-red-600 mt-2">{error.message}</p>
          <button
            onClick={reset}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      </main>
    </div>
  );
}