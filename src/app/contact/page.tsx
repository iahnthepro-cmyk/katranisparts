import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Επικοινωνήστε με την Katranis Accessories. Ζητήστε προσφορά ή ρωτήστε για τα B2B αξεσουάρ αυτοκινήτων και τα είδη μας.",
};

export default function ContactPage() {
  return (
    <div className="bg-surface-50 min-h-screen">
      {/* Page Header */}
      <div className="relative bg-brand-950 text-white py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-900" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-300 font-semibold text-sm uppercase tracking-widest mb-2">Επικοινωνία</p>
          <h1 className="text-3xl sm:text-4xl font-bold">Επικοινωνήστε Μαζί μας</h1>
          <p className="mt-3 text-gray-400 max-w-2xl">Έχετε ερωτήσεις ή χρειάζεστε προσφορά; Θα χαρούμε να σας ακούσουμε.</p>
        </div>
      </div>

      {/* Two-Column Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Στείλτε Μήνυμα</h2>
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Στοιχεία Επικοινωνίας</h2>
            <div className="space-y-7 text-gray-600">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Email</h3>
                  <p>info@katranisparts.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Τηλέφωνο</h3>
                  <p>+30 210 000 0000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Τοποθεσία</h3>
                  <p>Μόλας 8, Αχαρναί</p>
                  <p>Ελλάδα</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-0.5">Ωράριο Λειτουργίας</h3>
                  <p>Δευτέρα &ndash; Παρασκευή: 9:00 &ndash; 18:00</p>
                  <p>Σάββατο: 9:00 &ndash; 14:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}