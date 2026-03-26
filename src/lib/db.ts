export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

const products: Product[] = [
  { id: "1", name: "Πατάκια Premium", category: "Προστασία Δαπέδου", price: "€199", image: "/images/mats.jpg" },
  { id: "2", name: "LED Φώτα Εργασίας", category: "Φωτισμός", price: "€89", image: "/images/lights.jpg" },
  { id: "3", name: "Μπαταρία Βαρέως Τύπου", category: "Ηλεκτρικά", price: "€149", image: "/images/battery.png" },
  { id: "4", name: "Σετ Φίλτρων Λαδιού", category: "Συντήρηση", price: "€45", image: "/images/filters.jpg" },
  { id: "5", name: "Κουκούλα Αυτοκινήτου Premium", category: "Προστασία", price: "€65.00", image: "/images/cover.jpg" },
  { id: "6", name: "Δερμάτινα Καλύμματα Καθισμάτων", category: "Εσωτερικό", price: "€249", image: "/images/seats.jpg" },
];

export function getAllProducts(): Product[] {
  return [...products].sort((a, b) => a.name.localeCompare(b.name, "el"));
}

export function insertContactSubmission(submission: ContactSubmission): void {
  // In production, replace with a real database or email service
  console.log("Contact submission received:", submission);
}