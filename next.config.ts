import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/tours/mount-entoto-viewpoint-tour", destination: "/tours/full-day-city-tour", permanent: true },
      { source: "/tours/unity-park-imperial-palace", destination: "/tours/half-day-city-tour", permanent: true },
      { source: "/tours/national-museum-lucy-tour", destination: "/tours/half-day-city-tour", permanent: true },
      { source: "/tours/merkato-market-experience", destination: "/tours/half-day-city-tour", permanent: true },
      { source: "/tours/holy-trinity-cathedral-visit", destination: "/tours/half-day-city-tour", permanent: true },
      { source: "/tours/entoto-park-nature-escape", destination: "/tours/full-day-city-tour", permanent: true },
      { source: "/tours/full-day-addis-ababa-city-tour", destination: "/tours/full-day-city-tour", permanent: true },
      { source: "/tours/culture-coffee-ceremony-tour", destination: "/tours/short-city-tour", permanent: true },
    ];
  },
};

export default nextConfig;
