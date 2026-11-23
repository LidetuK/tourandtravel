export type TourItineraryStep = { time: string; text: string };
export type TourFaq = { q: string; a: string };

export type Tour = {
  slug: string;
  title: string;
  location: string;
  price: number;
  priceLabel: string;
  discount: string | null;
  duration: string;
  type: string;
  groupSize: string;
  languages: string;
  rating: string;
  reviews: number;
  img: string;
  gallery: string[];
  map: string;
  summary: string;
  description: string;
  highlights: string[];
  includes: string[];
  excludes: string[];
  itinerary: TourItineraryStep[];
  faqs: TourFaq[];
};

/** Main attractions featured across Addis packages */
export const mainAttractions = [
  {
    title: "National Museum of Ethiopia",
    desc: "Meet Lucy and explore Ethiopia’s archaeological and royal heritage.",
    img: "/images/listing/3.jpg",
    href: "/tours/half-day-city-tour",
  },
  {
    title: "Mount Entoto",
    desc: "Panoramic viewpoints and highland air above the capital.",
    img: "/images/listing/1.jpg",
    href: "/tours/full-day-city-tour",
  },
  {
    title: "Holy Trinity Cathedral",
    desc: "One of Ethiopia’s most important churches — faith, architecture, and history.",
    img: "/images/listing/5.jpg",
    href: "/tours/half-day-city-tour",
  },
  {
    title: "Unity Park",
    desc: "Palace grounds, museums, and gardens in the heart of Addis.",
    img: "/images/listing/2.jpg",
    href: "/tours/full-day-city-tour",
  },
  {
    title: "Merkato",
    desc: "Africa’s largest open-air market — spice, craft, and city energy.",
    img: "/images/listing/4.jpg",
    href: "/tours/half-day-city-tour",
  },
  {
    title: "Meskel Square",
    desc: "The capital’s landmark plaza and a classic city orientation stop.",
    img: "/images/listing/7.jpg",
    href: "/tours/short-city-tour",
  },
  {
    title: "Traditional Ethiopian coffee ceremony",
    desc: "Sit for Ethiopia’s celebrated coffee ritual with local hospitality.",
    img: "/images/listing/8.jpg",
    href: "/tours/short-city-tour",
  },
  {
    title: "Gemstone store",
    desc: "Browse Ethiopian gemstones with a guided stop and local tips.",
    img: "/images/listing/10.jpg",
    href: "/tours/short-city-tour",
  },
] as const;

export const toursCatalog: Record<string, Tour> = {
  "short-city-tour": {
    slug: "short-city-tour",
    title: "Short City Tour",
    location: "Addis Ababa City",
    price: 49,
    priceLabel: "$ 49 / Day",
    discount: "10% Off",
    duration: "4 hours",
    type: "City tours",
    groupSize: "Private or small group",
    languages: "English, Amharic",
    rating: "5.0",
    reviews: 44,
    img: "/images/listing/7.jpg",
    gallery: [
      "/images/listing/7.jpg",
      "/images/listing/3.jpg",
      "/images/listing/8.jpg",
      "/images/listing/10.jpg",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115!2d38.746!3d9.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set",
    summary: "Main city highlights in four hours — ideal when time is tight.",
    description:
      "Our Short City Tour covers Addis Ababa’s main highlights at a comfortable pace. Perfect for first-time visitors with limited time: Meskel Square orientation, a signature landmark stop, a traditional coffee ceremony, and a gemstone store visit before hotel return.",
    highlights: [
      "Main city highlights in 4 hours",
      "Meskel Square orientation",
      "National Museum or Holy Trinity Cathedral",
      "Traditional Ethiopian coffee ceremony",
      "Gemstone store stop",
      "Hotel pickup and drop-off",
    ],
    includes: ["Local guide", "Transport", "Bottled water", "Coffee ceremony experience"],
    excludes: ["Entrance fees", "Purchases at gemstone store", "Lunch", "Gratuities"],
    itinerary: [
      { time: "Start", text: "Hotel pickup and Meskel Square city orientation." },
      { time: "Highlights", text: "National Museum of Ethiopia or Holy Trinity Cathedral." },
      { time: "Culture", text: "Traditional coffee ceremony and gemstone store visit." },
      { time: "Return", text: "Drop-off at your hotel." },
    ],
    faqs: [
      {
        q: "Can we choose which landmark to visit?",
        a: "Yes — tell us your priority (museum or cathedral) and we shape the short route.",
      },
      {
        q: "Is this good for a busy schedule?",
        a: "Absolutely. Four focused hours cover the main highlights without rushing the whole city.",
      },
    ],
  },
  "half-day-city-tour": {
    slug: "half-day-city-tour",
    title: "Half-Day City Tour",
    location: "Addis Ababa City",
    price: 69,
    priceLabel: "$ 69 / Day",
    discount: null,
    duration: "6 hours",
    type: "City tours",
    groupSize: "Private or small group",
    languages: "English, Amharic",
    rating: "4.9",
    reviews: 57,
    img: "/images/listing/3.jpg",
    gallery: [
      "/images/listing/3.jpg",
      "/images/listing/5.jpg",
      "/images/listing/2.jpg",
      "/images/listing/4.jpg",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115!2d38.746!3d9.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set",
    summary: "History, culture, and landmarks across a balanced six-hour Addis itinerary.",
    description:
      "The Half-Day City Tour goes deeper into Addis Ababa’s history, culture, and landmarks. Expect guided stops at the National Museum of Ethiopia, Holy Trinity Cathedral, Unity Park or Merkato, plus Meskel Square context and time for coffee or a gemstone store visit.",
    highlights: [
      "History, culture and landmarks",
      "National Museum of Ethiopia",
      "Holy Trinity Cathedral",
      "Unity Park or Merkato",
      "Meskel Square orientation",
      "Coffee ceremony or gemstone store",
    ],
    includes: ["Local guide", "Transport", "Bottled water", "Assistance with entry"],
    excludes: ["Entrance fees", "Lunch", "Personal shopping", "Gratuities"],
    itinerary: [
      { time: "Morning", text: "Pickup, Meskel Square orientation, then National Museum of Ethiopia." },
      { time: "Midday", text: "Holy Trinity Cathedral and guided historical context." },
      { time: "Afternoon", text: "Unity Park or Merkato, plus coffee ceremony or gemstone store." },
      { time: "Return", text: "Hotel drop-off." },
    ],
    faqs: [
      {
        q: "Unity Park or Merkato — which should we pick?",
        a: "Unity Park suits history and gardens; Merkato suits markets and city energy. We’ll recommend based on your interests.",
      },
      {
        q: "How long is the tour?",
        a: "About six hours, with flexible pacing for photos and rest stops.",
      },
    ],
  },
  "full-day-city-tour": {
    slug: "full-day-city-tour",
    title: "Full-Day City Tour",
    location: "Addis Ababa City",
    price: 89,
    priceLabel: "$ 89 / Day",
    discount: null,
    duration: "8 hours",
    type: "City tours",
    groupSize: "Private or small group",
    languages: "English, Amharic",
    rating: "5.0",
    reviews: 61,
    img: "/images/listing/1.jpg",
    gallery: [
      "/images/listing/1.jpg",
      "/images/listing/7.jpg",
      "/images/listing/3.jpg",
      "/images/listing/4.jpg",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115!2d38.746!3d9.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set",
    summary: "A comprehensive Addis Ababa experience — viewpoints, culture, markets, and local flavor.",
    description:
      "See the best of Addis Ababa in one day with Mesfin Shumet Tour and Travel. This comprehensive city experience balances Mount Entoto viewpoints, the National Museum, Holy Trinity Cathedral, Unity Park, Merkato, Meskel Square, a traditional coffee ceremony, and a gemstone store stop.",
    highlights: [
      "Comprehensive city experience",
      "Mount Entoto viewpoints",
      "National Museum of Ethiopia",
      "Holy Trinity Cathedral & Unity Park",
      "Merkato and Meskel Square",
      "Traditional coffee ceremony & gemstone store",
    ],
    includes: ["Local guide", "Transport", "Bottled water", "Coffee ceremony experience"],
    excludes: ["Entrance fees", "Lunch", "Gemstone purchases", "Gratuities"],
    itinerary: [
      { time: "Morning", text: "Mount Entoto viewpoint and city panorama." },
      { time: "Midday", text: "National Museum of Ethiopia, Holy Trinity Cathedral, and lunch stop." },
      { time: "Afternoon", text: "Unity Park or Merkato, Meskel Square, coffee ceremony, and gemstone store." },
      { time: "Evening", text: "Hotel return." },
    ],
    faqs: [
      {
        q: "Can we swap stops?",
        a: "Yes — share priorities and we customize the full-day route.",
      },
      {
        q: "Is lunch included?",
        a: "Lunch is not included; we recommend a local restaurant and help with timing.",
      },
    ],
  },
  "airport-layover-tour": {
    slug: "airport-layover-tour",
    title: "Airport Layover Tour",
    location: "Bole Airport & Addis Ababa",
    price: 99,
    priceLabel: "$ 99 / Day",
    discount: "15% Off",
    duration: "6–8 hours",
    type: "City tours",
    groupSize: "Private preferred",
    languages: "English, Amharic",
    rating: "4.9",
    reviews: 28,
    img: "/images/listing/6.jpg",
    gallery: [
      "/images/listing/6.jpg",
      "/images/listing/7.jpg",
      "/images/listing/3.jpg",
      "/images/listing/8.jpg",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115!2d38.795!3d8.977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85%3A0x0!2sBole%20Airport!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set",
    summary: "Airport pickup, city sightseeing, and return — make the most of your layover in Addis.",
    description:
      "Turn a layover into a real Addis Ababa experience. We meet you at Bole Airport, guide a timed city sightseeing route (landmarks, museum or cathedral, coffee ceremony, gemstone store), and return you to the airport with buffer time for your next flight.",
    highlights: [
      "Airport pickup and return",
      "City sightseeing timed to your layover",
      "Key landmarks and culture stops",
      "Traditional coffee ceremony",
      "Gemstone store visit",
      "Flight-aware pacing with buffer time",
    ],
    includes: ["Airport pickup", "Local guide", "Transport", "Bottled water", "Airport return"],
    excludes: ["Entrance fees", "Meals", "Personal shopping", "Gratuities"],
    itinerary: [
      { time: "Pickup", text: "Meet at Bole Airport and confirm remaining layover time." },
      { time: "Sightseeing", text: "Meskel Square, National Museum or Holy Trinity, and city highlights." },
      { time: "Culture", text: "Coffee ceremony and optional gemstone store stop." },
      { time: "Return", text: "Airport drop-off with comfortable buffer before departure." },
    ],
    faqs: [
      {
        q: "How long does my layover need to be?",
        a: "Ideally 8+ hours total airport-to-airport. We tailor a 6–8 hour tour once we know your arrival and departure times.",
      },
      {
        q: "Do you help with luggage?",
        a: "Yes — we can store bags in the vehicle or advise on airport left-luggage options.",
      },
    ],
  },
} as Record<string, Tour>;

/** Legacy slugs redirect to the closest current package */
export const legacyTourRedirects: Record<string, string> = {
  "mount-entoto-viewpoint-tour": "full-day-city-tour",
  "unity-park-imperial-palace": "half-day-city-tour",
  "national-museum-lucy-tour": "half-day-city-tour",
  "merkato-market-experience": "half-day-city-tour",
  "holy-trinity-cathedral-visit": "half-day-city-tour",
  "entoto-park-nature-escape": "full-day-city-tour",
  "full-day-addis-ababa-city-tour": "full-day-city-tour",
  "culture-coffee-ceremony-tour": "short-city-tour",
};

export function getAllTours(): Tour[] {
  return Object.values(toursCatalog);
}

export function getTourBySlug(slug: string): Tour | undefined {
  const redirected = legacyTourRedirects[slug];
  if (redirected) return toursCatalog[redirected];
  return toursCatalog[slug] ?? getAllTours().find((t) => t.slug === slug);
}

export function getRelatedTours(slug: string, limit = 3): Tour[] {
  return getAllTours().filter((t) => t.slug !== slug).slice(0, limit);
}

export const dealSlugs = ["short-city-tour", "airport-layover-tour", "full-day-city-tour"] as const;
