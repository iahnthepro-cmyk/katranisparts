import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center font-black text-sm text-white">
                K
              </div>
              <span className="text-white text-xl font-bold">
                Katranis<span className="text-gold-400">Parts</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Ο αξιόπιστος B2B συνεργάτης σας για premium αξεσουάρ αυτοκινήτων
              και είδη πρατηρίων. Ποιοτικά προϊόντα σε ανταγωνιστικές χονδρικές τιμές.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Σύνδεσμοι
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-300 transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-brand-300 transition-colors">
                  Κατάλογος Προϊόντων
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-300 transition-colors">
                  Σχετικά με Εμάς
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-300 transition-colors">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Επικοινωνία
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Μόλας 8, Αχαρναί, Ελλάδα
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                info@katranisparts.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-brand-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +30 210 000 0000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-900/80 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Katranis Parts. Με επιφύλαξη παντός δικαιώματος.</p>
          <p>Σχεδιασμένο στην Ελλάδα</p>
        </div>
      </div>
    </footer>
  );
}
