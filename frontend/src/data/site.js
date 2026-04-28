// Stock images & product catalog data
// Mix of category-verified Unsplash + Pexels images, hand-mapped to context.
export const SITE = {
  name: "Radha Madhav",
  fullName: "Radha Madhav Wholesale Family Mart",
  tagline: "Har Khushi, Har Occasion — Ek Hi Jagah",
  city: "Gorakhpur",
  phone1: "9151687774",
  phone2: "9151687775",
  whatsapp: "919151687774",
  address: "10 Park Road, Opposite Rangrezza Restaurant, Gorakhpur",
  hours: "10:00 AM – 8:30 PM • All Days",
  email: "info@radhamadhavmart.in",
  instagram: "https://instagram.com/radhamadhavwholesalefamilymart",
  facebook: "https://facebook.com/radhamadhavwholesalefamilymart",
  mapUrl: "https://www.google.com/maps?q=Park+Road+Gorakhpur",
};

export const waLink = (msg) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

// Image URL builders — each verified via direct fetch.
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

// Unsplash canonical photo URL (verified against unsplash.com page renders)
const us = (slug) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=900&q=70`;

// === Verified category-matched images ===
// HALDI (yellow / turmeric tones)
const HALDI_BRIDE = us("photo-1698460895537-a418b64bcc54"); // bride in yellow dress, haldi ceremony
const HALDI_SARI = us("photo-1698460917986-8dfcea8b6ca7"); // yellow sari on bench
const HALDI_SMILE = us("photo-1703044687659-465a1513aaae"); // yellow sari smiling

// WEDDING / BRIDE (red & gold)
const BRIDE_RED_GOLD = us("photo-1640745693152-1c2aab4a8253"); // red & gold wedding outfit
const BRIDE_LEHENGA = us("photo-1645856048246-2ea2557cc3e1"); // red & gold lehenga
const BRIDE_RECEPTION = us("photo-1737515045456-176abaccbe93"); // red & gold outfit
const BRIDE_BANARASI = us("photo-1737515046830-1680d82e043c"); // red & gold bridal
const BRIDE_ORNATE = us("photo-1762708597713-5d7a1d1d98ee"); // ornate red bridal

// JEWELLERY (gold close-ups, kundan, polki vibe)
const JEWEL_NECKLACE = us("flagged/photo-1570055349452-29232699cc63"); // gold necklace on bride
const JEWEL_GOLD_SET = us("photo-1645856049138-bcb23afaeefb"); // gold necklace + earrings
const JEWEL_BANGLES = us("photo-1704136404616-0fe61c322633"); // necklace & bracelet close up
const JEWEL_KUNDAN = us("photo-1641382161166-4f3c320f0c6d"); // gold & red — kundan look
const JEWEL_POLKI = us("photo-1710494421236-2f9c1182998a"); // red & gold jewellery

// MEHNDI (orange/maroon hennaed hands)
const MEHNDI_PEXELS = px(12037072); // pexels mehndi search result

// SANGEET (jewel-tone night)
const SANGEET_NIGHT = px(9778787);

// DAILY ELEGANCE
const DAILY_PASTEL = px(33006935);

// SHOWROOM
const SHOWROOM = "/assets/images/showroom.jpg";

export const occasions = [
  {
    id: "haldi",
    name: "Haldi Look",
    subtitle: "Sunlit & Joyful",
    icon: "fa-sun",
    color: "#e6b800",
    image: HALDI_BRIDE,
  },
  {
    id: "mehndi",
    name: "Mehndi Look",
    subtitle: "Color & Celebration",
    icon: "fa-leaf",
    color: "#0c8a3e",
    image: MEHNDI_PEXELS,
  },
  {
    id: "sangeet",
    name: "Sangeet Night",
    subtitle: "Music & Glamour",
    icon: "fa-music",
    color: "#8a2a3a",
    image: SANGEET_NIGHT,
  },
  {
    id: "wedding",
    name: "Wedding Royal",
    subtitle: "The Grand Day",
    icon: "fa-crown",
    color: "#c9a646",
    image: BRIDE_ORNATE,
  },
  {
    id: "daily",
    name: "Daily Elegance",
    subtitle: "Everyday Grace",
    icon: "fa-feather",
    color: "#6a1e2c",
    image: DAILY_PASTEL,
  },
];

export const collections = {
  brides: {
    title: "For The Bride",
    accent: "Lehengas • Sarees • Bridal Wear",
    items: [
      {
        name: "Royal Maroon Lehenga",
        price: "Visit For Price",
        tag: "Bridal",
        img: BRIDE_LEHENGA,
      },
      {
        name: "Banarasi Silk Saree",
        price: "Visit For Price",
        tag: "Heritage",
        img: BRIDE_BANARASI,
      },
      {
        name: "Pastel Reception Lehenga",
        price: "Visit For Price",
        tag: "Reception",
        img: BRIDE_RECEPTION,
      },
      {
        name: "Sunshine Haldi Saree",
        price: "Visit For Price",
        tag: "Haldi",
        img: HALDI_SARI,
      },
    ],
  },
  jewellery: {
    title: "Artificial Jewellery",
    accent: "Kundan • Polki • Choker • Maang Tikka",
    items: [
      {
        name: "Kundan Bridal Necklace Set",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_NECKLACE,
      },
      {
        name: "Polki Choker & Earrings",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_GOLD_SET,
      },
      {
        name: "Gold Bangles & Bracelet",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_BANGLES,
      },
      {
        name: "Maang Tikka & Earring Combo",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_KUNDAN,
      },
      {
        name: "Heavy Bridal Haar",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_POLKI,
      },
      {
        name: "Daily Wear Earrings",
        price: "Visit For Price",
        tag: "Jewellery",
        img: JEWEL_GOLD_SET,
      },
    ],
  },
  grooms: {
    title: "For The Groom",
    accent: "Sherwani • Suits • Kurta Pajama",
    items: [
      {
        name: "Ivory Embroidered Sherwani",
        price: "Visit For Price",
        tag: "Wedding",
        img: px(35843780),
      },
      {
        name: "Royal Maroon Indo-Western",
        price: "Visit For Price",
        tag: "Reception",
        img: px(9778787),
      },
      {
        name: "Three-Piece Tuxedo",
        price: "Visit For Price",
        tag: "Suit",
        img: px(29357484),
      },
      {
        name: "Silk Kurta Pajama Set",
        price: "Visit For Price",
        tag: "Festive",
        img: px(17000467),
      },
    ],
  },
  family: {
    title: "For The Family",
    accent: "Ladies Suits • Kids Wear • Daily Wear",
    items: [
      {
        name: "Anarkali Suit Set",
        price: "Visit For Price",
        tag: "Ladies",
        img: px(8938193),
      },
      {
        name: "Festive Kids Lehenga",
        price: "Visit For Price",
        tag: "Kids",
        img: px(35872894),
      },
      {
        name: "Cotton Daily Saree",
        price: "Visit For Price",
        tag: "Daily",
        img: DAILY_PASTEL,
      },
      {
        name: "Boys Sherwani Set",
        price: "Visit For Price",
        tag: "Kids",
        img: px(34479857),
      },
    ],
  },
};

export const offers = [
  {
    title: "Wedding Combo Deals",
    subtitle: "Bride + Groom + Family — All Together",
    save: "Up to 35% Off",
    color: "#6a1e2c",
    icon: "fa-ring",
    image: BRIDE_RED_GOLD,
  },
  {
    title: "Saree Festival Discounts",
    subtitle: "Banarasi • Kanjeevaram • Designer",
    save: "Flat 20% Off",
    color: "#c9a646",
    icon: "fa-tags",
    image: BRIDE_BANARASI,
  },
  {
    title: "Artificial Jewellery Bonanza",
    subtitle: "Kundan • Polki • Maang Tikka Sets",
    save: "Up to 40% Off",
    color: "#a78429",
    icon: "fa-gem",
    image: JEWEL_NECKLACE,
  },
  {
    title: "Groom Special Offer",
    subtitle: "Sherwani + Sehra + Mojari Combo",
    save: "Save ₹4,000+",
    color: "#4a121d",
    icon: "fa-user-tie",
    image: px(35843780),
  },
  {
    title: "Bulk Purchase Benefits",
    subtitle: "Wholesale Rates for Retailers & Families",
    save: "Best Prices",
    color: "#8a2a3a",
    icon: "fa-store",
    image: px(17000467),
  },
];

export const testimonials = [
  {
    name: "Anjali Mishra",
    place: "Gorakhpur",
    text:
      "Best quality in budget! Maine apni shaadi ka pura collection yahin se liya — bride, groom aur family — sab ke liye perfect.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    place: "Deoria",
    text:
      "Family shopping ke liye perfect jagah. Wholesale price mein latest fashion. Staff bhi bahut helpful hai.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    place: "Basti",
    text:
      "Wedding shopping yahin se ki ❤️. Itna bada showroom Gorakhpur mein dekh ke yakeen nahi hua. Sabko zaroor visit karna chahiye.",
    rating: 5,
  },
  {
    name: "Vikash Yadav",
    place: "Gorakhpur",
    text:
      "Mere bete ki shaadi ka sherwani liya — Royal feel aur premium quality. Budget mein bhi best option mil gaya.",
    rating: 5,
  },
];

export const galleryImages = [
  HALDI_BRIDE,
  BRIDE_RED_GOLD,
  JEWEL_NECKLACE,
  BRIDE_BANARASI,
  HALDI_SARI,
  BRIDE_LEHENGA,
  JEWEL_KUNDAN,
  BRIDE_ORNATE,
  SHOWROOM,
  JEWEL_BANGLES,
  HALDI_SMILE,
  BRIDE_RECEPTION,
];

export const reels = [
  "/assets/videos/reel-1.mp4",
  "/assets/videos/reel-2.mp4",
  "/assets/videos/reel-3.mp4",
];
