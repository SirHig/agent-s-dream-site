// src/pages/buffalo.tsx

import Navigation from "@/components/Navigation";
import CommunityPage, {
  CommunityPageConfig,
} from "@/components/community/CommunityPage";

// 🔽 Import your images (make sure these files exist)
import buffaloHero from "@/assets/communities/buffalo/buffalo-hero.jpg";
import buffaloLake from "@/assets/communities/buffalo/buffalo-lake.jpg";
import buffaloDowntown from "@/assets/communities/buffalo/buffalo-downtown.jpg";

const buffaloConfig: CommunityPageConfig = {
  slug: "buffalo",
  name: "Buffalo, Minnesota",
  subtitle: "Community Guide",
  heroTagline: "Lakeside living, small-town feel, and an easy Twin Cities commute.",
  heroIntro:
    "Buffalo sits between two full-recreation lakes — Buffalo Lake and Lake Pulaski — and blends small-town charm with big-city conveniences. As the Wright County seat and a regional hub for shopping, services, and healthcare, it offers a lot of everyday ease without losing that “everybody knows your name” vibe. Whether you’re upsizing, downsizing, or relocating for work, Buffalo gives you options: in-town neighborhoods, newer developments, and lake homes that keep you close to the water.",

  stats: [
    { label: "Avg. Sale Price*", value: "$XXX,000", helper: "Past 6 months" },
    { label: "Days on Market*", value: "XX", helper: "Typical listing time" },
    { label: "List-to-Sale Ratio*", value: "XX%", helper: "Pricing strength" },
  ],

  highlights: [
    {
      title: "Lakes & Outdoor Life",
      body: "Buffalo is nestled between Buffalo Lake and Lake Pulaski, with public beaches, boat launches, and plenty of parks and trails. Summer means paddleboards, pontoons, and picnics; winter brings ice fishing, hockey, and snowy walks with lake views.",
    },
    {
      title: "Charming Downtown",
      body: "Buffalo’s walkable, lakeside downtown is packed with local shops, boutiques, cafés, and restaurants. Between seasonal events and evenings on the patio, there’s usually something happening around the main streets.",
    },
    {
      title: "Everyday Convenience",
      body: "Along Highway 55 and Highway 25 you’ll find larger retailers, groceries, home improvement stores, and services — so you get small-town feel without giving up practical convenience or commute options into the west metro.",
    },
    {
      title: "Schools & Community",
      body: "The Buffalo–Hanover–Montrose school district is a major draw, with a well-regarded high school, active activities programs, and strong community support around youth sports and the arts.",
    },
  ],

  neighborhoods: [
    {
      name: "In-Town Neighborhoods",
      blurb:
        "Tree-lined streets, sidewalks, and established homes close to schools, parks, and downtown. Great for buyers who value walkability and a strong neighborhood feel.",
    },
    {
      name: "Lake Homes",
      blurb:
        "Homes along Buffalo Lake and Lake Pulaski range from cozy seasonal cabins to updated year-round properties, often with docks, lake views, and direct access to the water.",
    },
    {
      name: "Newer Developments",
      blurb:
        "Modern floorplans, open concept living, multi-car garages, and cul-de-sacs made for bike rides and chalk art, all within a short drive of highways, schools, and shopping.",
    },
    {
      name: "Acreage & Outskirts",
      blurb:
        "If you’re looking for more space, hobby acreage, or a little extra privacy, the outskirts of Buffalo and nearby townships offer rural charm while keeping daily amenities within reach.",
    },
  ],

  lifestyleTitle: "Is Buffalo the right fit for you?",
  lifestyleBody:
    "If you want lake access, strong community ties, and a reasonable Twin Cities commute, Buffalo belongs on your short list. From youth sports at the Civic Center to summer concerts, farmers markets, and evenings by the water, it’s a city where people tend to put down roots.",

  listingsCtaLabel: "View all Buffalo properties →",
  listingsCtaHref: "#", // later: link this to your IDX search for Buffalo

  heroImage: {
    src: buffaloHero,
    alt: "Lakeside view of downtown Buffalo along Buffalo Lake",
    label: "Lakeside downtown Buffalo overlooking Buffalo Lake",
  },

  gallery: [
    {
      src: buffaloLake,
      alt: "Park and trail along the lake in Buffalo",
      label: "Lakes, parks, and trails woven into everyday life",
    },
    {
      src: buffaloDowntown,
      alt: "Shops and cafes in downtown Buffalo, Minnesota",
      label: "Local boutiques, coffee shops, and small businesses",
    },
    {
      src: buffaloHero,
      alt: "Neighborhood and homes near the lake in Buffalo",
      label: "Established neighborhoods and newer developments",
    },
  ],
};

const Buffalo = () => {
  return (
    <>
      <Navigation />
      <CommunityPage config={buffaloConfig} />
    </>
  );
};

export default Buffalo;
