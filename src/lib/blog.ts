export type BlogPost = {
  id: number;
  img: string;
  category: string;
  title: string;
  desc: string;
};

export const blogPosts: BlogPost[] = [
  { id: 1, img: "/images/blog/1.jpg", category: "Culture", title: "A first-timer's guide to Addis Ababa museums", desc: "Where to start at the National Museum and how long to plan for Lucy and beyond." },
  { id: 2, img: "/images/blog/2.jpg", category: "Nature", title: "Why Mount Entoto belongs on every Addis itinerary", desc: "Viewpoints, churches, and cool highland air just above the capital." },
  { id: 3, img: "/images/blog/3.jpg", category: "Food", title: "Merkato mornings: spice, coffee, and street snacks", desc: "How to explore Africa's largest open-air market with a local guide." },
  { id: 4, img: "/images/blog/4.jpg", category: "History", title: "Holy Trinity Cathedral and imperial Addis", desc: "Key stories behind one of Ethiopia's most important churches." },
  { id: 5, img: "/images/blog/5.jpg", category: "Parks", title: "Unity Park: gardens, animals, and city calm", desc: "Tips for a half-day visit inside the former palace grounds." },
  { id: 6, img: "/images/blog/6.jpg", category: "Tips", title: "Best time of day for Addis city photography", desc: "Light, traffic, and viewpoints that photograph beautifully." },
  { id: 7, img: "/images/blog/7.jpg", category: "Coffee", title: "Ethiopian coffee ceremony: what to expect", desc: "A short cultural stop that makes any tour feel complete." },
  { id: 8, img: "/images/blog/8.jpg", category: "Families", title: "Planning an Addis day tour with kids", desc: "Pace, snacks, and stops that work well for families." },
  { id: 9, img: "/images/blog/9.jpg", category: "Packages", title: "How to combine Entoto and the National Museum in one day", desc: "A practical sample itinerary from Mesfin Shumet Tour and Travel." },
];

export const homeBlogPosts = blogPosts.slice(0, 3);
