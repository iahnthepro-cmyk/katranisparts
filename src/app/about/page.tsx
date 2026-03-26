import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Σχετικά με Εμάς",
  description: "Μάθετε για την Katranis Parts — τον αξιόπιστο B2B προμηθευτή αξεσουάρ αυτοκινήτων και ειδών πρατηρίων στις Αχαρνές.",
};

export default function AboutPage() {
  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-brand-950 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-2">Σχετικά</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Σχετικά με Εμάς</h1>
          <p className="mt-3 text-gray-400">Ποιοι είμαστε και τι μας κινεί.</p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Η Ιστορία μας</h2>
            <p className="text-gray-600 leading-relaxed">
              Η Katranis Parts είναι ένας αφοσιωμένος B2B προμηθευτής premium αξεσουάρ
              αυτοκινήτων και ειδών πρατηρίων. Με έδρα τις Αχαρνές, εξυπηρετούμε
              επιχειρήσεις σε όλη την Ελλάδα με ποιοτικά προϊόντα, ανταγωνιστικές
              χονδρικές τιμές και αξιόπιστη εξυπηρέτηση.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Η αποστολή μας είναι απλή: να παρέχουμε ό,τι χρειάζεται η επιχείρησή
              σας από μία μόνο αξιόπιστη πηγή &mdash; ώστε εσείς να επικεντρωθείτε
              στην εξυπηρέτηση των δικών σας πελατών.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Γιατί να Συνεργαστείτε μαζί μας</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold text-lg leading-none mt-0.5">&#10003;</span>
                <span>Μεγάλη ποικιλία αξεσουάρ αυτοκινήτων και ειδών πρατηρίων</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold text-lg leading-none mt-0.5">&#10003;</span>
                <span>Ανταγωνιστικές χονδρικές τιμές για B2B συνεργάτες</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold text-lg leading-none mt-0.5">&#10003;</span>
                <span>Γρήγορη, αξιόπιστη παράδοση σε όλη την Ελλάδα</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-500 font-bold text-lg leading-none mt-0.5">&#10003;</span>
                <span>Προσωπική υποστήριξη και εξειδικευμένη διαχείριση λογαριασμού</span>
              </li>
            </ul>
          </div>

          {/* Location Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Επισκεφθείτε μας</h2>
              <div className="space-y-5 text-gray-600">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Διεύθυνση</h3>
                  <p>Μόλας 8, Αχαρναί</p>
                  <p>Ελλάδα</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p>info@katranisparts.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Τηλέφωνο</h3>
                  <p>+30 210 000 0000</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Ωράριο Λειτουργίας</h3>
                  <p>Δευτέρα &ndash; Παρασκευή: 9:00 &ndash; 18:00</p>
                  <p>Σάββατο: 9:00 &ndash; 14:00</p>
                </div>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                title="Katranis Parts Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.5!2d23.73!3d38.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMolas%208%2C%20Acharnai!5e0!3m2!1sen!2sgr"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-500 transition-colors"
              >
                Επικοινωνήστε μαζί μας
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
