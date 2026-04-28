// Stock images & product catalog data — verified Pexels Indian wedding photos
// (extracted from pexels.com/search/indian%20wedding)
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

// Image URL builder for Pexels with auto-compression
const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`;

// Path-style for IDs that have nested folder
const pxF = (id, path) =>
  `https://images.pexels.com/photos/${id}/${path}?auto=compress&cs=tinysrgb&w=900`;

export const occasions = [
  {
    id: "haldi",
    name: "Haldi Look",
    subtitle: "Sunlit & Joyful",
    icon: "fa-sun",
    color: "#e6b800",
    image: px(8819253),
  },
  {
    id: "mehndi",
    name: "Mehndi Look",
    subtitle: "Color & Celebration",
    icon: "fa-leaf",
    color: "#0c8a3e",
    image: px(12037072),
  },
  {
    id: "sangeet",
    name: "Sangeet Night",
    subtitle: "Music & Glamour",
    icon: "fa-music",
    color: "#8a2a3a",
    image: px(9778787),
  },
  {
    id: "wedding",
    name: "Wedding Royal",
    subtitle: "The Grand Day",
    icon: "fa-crown",
    color: "#c9a646",
    image: pxF(34479857, "free-photo-of-traditional-indian-wedding-ceremony-in-indore.jpeg"),
  },
  {
    id: "daily",
    name: "Daily Elegance",
    subtitle: "Everyday Grace",
    icon: "fa-feather",
    color: "#6a1e2c",
    image: pxF(33006935, "free-photo-of-elegant-sikh-wedding-ceremony-indoors.jpeg"),
  },
];

export const collections = {
  brides: {
    title: "For The Bride",
    accent: "Lehengas • Sarees • Jewellery",
    items: [
      {
        name: "Royal Maroon Lehenga",
        price: "Visit For Price",
        tag: "Bridal",
        img: pxF(33101418, "free-photo-of-intricate-details-of-traditional-indian-bridal-lehenga.jpeg"),
      },
      {
        name: "Banarasi Silk Saree",
        price: "Visit For Price",
        tag: "Heritage",
        img: pxF(35872894, "free-photo-of-traditional-indian-wedding-ceremony-ritual.jpeg"),
      },
      {
        name: "Pastel Reception Lehenga",
        price: "Visit For Price",
        tag: "Reception",
        img: pxF(17000467, "free-photo-of-newlyweds-in-traditional-dress-and-turban.jpeg"),
      },
      {
        name: "Kundan Bridal Jewellery",
        price: "Visit For Price",
        tag: "Jewellery",
        img: pxF(33101418, "free-photo-of-intricate-details-of-traditional-indian-bridal-lehenga.jpeg"),
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
        img: pxF(35843780, "free-photo-of-traditional-indian-wedding-ceremony-celebration.jpeg"),
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
        img: pxF(17000467, "free-photo-of-newlyweds-in-traditional-dress-and-turban.jpeg"),
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
        img: pxF(35872894, "free-photo-of-traditional-indian-wedding-ceremony-ritual.jpeg"),
      },
      {
        name: "Cotton Daily Saree",
        price: "Visit For Price",
        tag: "Daily",
        img: pxF(33006935, "free-photo-of-elegant-sikh-wedding-ceremony-indoors.jpeg"),
      },
      {
        name: "Boys Sherwani Set",
        price: "Visit For Price",
        tag: "Kids",
        img: pxF(34479857, "free-photo-of-traditional-indian-wedding-ceremony-in-indore.jpeg"),
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
    image: px(9778787),
  },
  {
    title: "Saree Festival Discounts",
    subtitle: "Banarasi • Kanjeevaram • Designer",
    save: "Flat 20% Off",
    color: "#c9a646",
    icon: "fa-tags",
    image: pxF(35872894, "free-photo-of-traditional-indian-wedding-ceremony-ritual.jpeg"),
  },
  {
    title: "Groom Special Offer",
    subtitle: "Sherwani + Sehra + Mojari Combo",
    save: "Save ₹4,000+",
    color: "#4a121d",
    icon: "fa-user-tie",
    image: pxF(17000467, "free-photo-of-newlyweds-in-traditional-dress-and-turban.jpeg"),
  },
  {
    title: "Bulk Purchase Benefits",
    subtitle: "Wholesale Rates for Retailers & Families",
    save: "Best Prices",
    color: "#8a2a3a",
    icon: "fa-store",
    image: pxF(35843780, "free-photo-of-traditional-indian-wedding-ceremony-celebration.jpeg"),
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
  px(9778787),
  pxF(35872894, "free-photo-of-traditional-indian-wedding-ceremony-ritual.jpeg"),
  pxF(33101418, "free-photo-of-intricate-details-of-traditional-indian-bridal-lehenga.jpeg"),
  pxF(34479857, "free-photo-of-traditional-indian-wedding-ceremony-in-indore.jpeg"),
  pxF(17000467, "free-photo-of-newlyweds-in-traditional-dress-and-turban.jpeg"),
  pxF(35843780, "free-photo-of-traditional-indian-wedding-ceremony-celebration.jpeg"),
  px(8938193),
  px(29357484),
  "/assets/images/showroom.jpg",
  pxF(33006935, "free-photo-of-elegant-sikh-wedding-ceremony-indoors.jpeg"),
  px(12037072),
  px(8819253),
];

export const reels = [
  "/assets/videos/reel-1.mp4",
  "/assets/videos/reel-2.mp4",
  "/assets/videos/reel-3.mp4",
];
