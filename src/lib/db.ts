import Database from "better-sqlite3";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
}

// Open database (synchronous)
const db = new Database("./data/katranisparts.db");

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    price TEXT NOT NULL,
    image TEXT NOT NULL
  )
`);

// Contact submissions table
db.exec(`
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  )
`);

export interface ContactSubmission {
  id?: number;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export function insertContactSubmission(submission: ContactSubmission): void {
  db.prepare(
    "INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)"
  ).run(submission.name, submission.email, submission.message);
}

// Seed data if empty
const countRow = db.prepare<{ count: number }>("SELECT COUNT(*) as count FROM products").get();
if (countRow && countRow.count === 0) {
  const seedProducts: Product[] = [
    { id: "1", name: "Πατάκια Premium", category: "Προστασία Δαπέδου", price: "€199", image: "/images/mats.jpg" },
    { id: "2", name: "LED Φώτα Εργασίας", category: "Φωτισμός", price: "€89", image: "/images/lights.jpg" },
    { id: "3", name: "Μπαταρία Βαρέως Τύπου", category: "Ηλεκτρικά", price: "€149", image: "/images/battery.png" },
    { id: "4", name: "Σετ Φίλτρων Λαδιού", category: "Συντήρηση", price: "€45", image: "/images/filters.jpg" },
    { id: "5", name: "Κουκούλα Αυτοκινήτου Premium", category: "Προστασία", price: "€65.00", image: "/images/cover.jpg" },
    { id: "6", name: "Δερμάτινα Καλύμματα Καθισμάτων", category: "Εσωτερικό", price: "€249", image: "/images/seats.jpg" }
  ];
  const insert = db.prepare(
    "INSERT INTO products (id, name, category, price, image) VALUES (?, ?, ?, ?, ?)"
  );
  for (const p of seedProducts) {
    insert.run(p.id, p.name, p.category, p.price, p.image);
  }
}

export function getAllProducts(): Product[] {
  return db.prepare("SELECT * FROM products ORDER BY name").all();
}