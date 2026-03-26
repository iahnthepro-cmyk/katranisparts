import Link from "next/link";
import Image from "next/image";

const features = [
  {
    title: "Χονδρικές Τιμές",
    description: "Ανταγωνιστικές τιμές B2B σε όλα τα αξεσουάρ αυτοκινήτων και είδη πρατηρίων.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Ποιοτικά Προϊόντα",
    description: "Προσεκτικά επιλεγμένα, ανθεκτικά προϊόντα από αξιόπιστους κατασκευαστές.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Γρήγορη Παράδοση",
    description: "Αξιόπιστες αποστολές σε όλη την Ελλάδα με γρήγορους χρόνους παράδοσης.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Εξειδικευμένη Υποστήριξη",
    description: "Προσωπικοί υπεύθυνοι λογαριασμού για όλες τις χονδρικές σας ανάγκες.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Landing() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-950 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/90 to-brand-900" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="max-w-3xl lg:max-w-none lg:flex-1">
            <div className="inline-flex items-center gap-2 bg-brand-800/60 border border-brand-700/40 rounded-full px-4 py-1.5 text-sm text-brand-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              B2B Χονδρική Πώληση
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Ο Συνεργάτης σας για{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-gold-400">
                Ανταλλακτικά Αυτοκινήτων
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Premium αξεσουάρ αυτοκινήτων και είδη πρατηρίων σε χονδρικές τιμές.
              Έμπιστοι από επιχειρήσεις σε όλη την Ελλάδα.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catalog"
                className="bg-brand-500 text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-brand-400 transition-all duration-200 shadow-lg shadow-brand-900/50 text-center"
              >
                Περιήγηση Καταλόγου
              </Link>
              <Link
                href="/contact"
                className="border border-gray-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-white/5 hover:border-gray-400 transition-all duration-200 text-center"
              >
                Ζητήστε Προσφορά
              </Link>
            </div>
          </div>

          {/* Logo on the right */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <Image
              src="/images/logo.png"
              alt="Katranis Accessories"
              width={600}
              height={180}
              className="w-full max-w-[500px] h-auto drop-shadow-2xl"
              priority
            />
          </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-50 to-transparent" />
      </section>

      {/* Features */}
      <section className="bg-surface-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-brand-600 font-semibold text-sm uppercase tracking-widest mb-3">Πλεονεκτήματα</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Γιατί Katranis Accessories</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto text-lg">
              Ό,τι χρειάζεται η επιχείρησή σας, από έναν αξιόπιστο προμηθευτή.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-7 rounded-2xl border border-gray-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 to-brand-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-700/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Έτοιμοι να Προμηθευτείτε;</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">
            Δείτε τον πλήρη κατάλογό μας ή επικοινωνήστε για χονδρικές παραγγελίες.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/catalog"
              className="bg-white text-brand-900 px-8 py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Δείτε Προϊόντα
            </Link>
            <Link
              href="/contact"
              className="border border-brand-400 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-brand-800 transition-colors"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}