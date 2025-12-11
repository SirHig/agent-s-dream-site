// src/pages/delano.tsx

import Navigation from "@/components/Navigation";
import CommunityPage, {
  CommunityPageConfig,
} from "@/components/community/CommunityPage";

const delanoConfig: CommunityPageConfig = {
  slug: "delano",
  name: "Delano, Minnesota",
  subtitle: "Community Guide",
  heroTagline:
    "Small-town charm, riverfront views, and an easy Twin Cities commute.",
  heroIntro:
    "Delano offers a blend of historic downtown, welcoming neighborhoods, and modern amenities — all along the banks of the South Fork of the Crow River. Whether you're upsizing, downsizing, or relocating, it's a community that feels like home quickly.",
  stats: [
    { label: "Avg. Sale Price*", value: "$XXX,000", helper: "Past 6 months" },
    { label: "Days on Market*", value: "XX", helper: "Typical listing time" },
    { label: "List-to-Sale Ratio*", value: "XX%", helper: "Pricing strength" },
  ],
  highlights: [
    {
      title: "Historic Downtown",
      body: "Locally owned shops, restaurants, and coffee spots give Delano a true main-street feel — perfect for weekend strolls and meeting the neighbors.",
    },
    {
      title: "Parks & Trails",
      body: "Riverfront parks, playgrounds, and nearby trails make it easy to get outside, whether it's a quiet walk or a full family outing.",
    },
    {
      title: "Strong Schools",
      body: "Delano's highly regarded schools are a major draw for buyers looking for both quality education and community involvement.",
    },
  ],
  neighborhoods: [
    {
      name: "Downtown & Riverfront",
      blurb:
        "Walkable streets, character homes, and quick access to shops, dining, and community events.",
    },
    {
      name: "Newer Developments",
      blurb:
        "Modern floorplans, open concept living, and cul-de-sacs that are made for bike rides and chalk art.",
    },
    {
      name: "Acreage & Outskirts",
      blurb:
        "More space, more privacy, and that classic Minnesota feel — all while staying connected to town.",
    },
  ],
  lifestyleTitle: "Is Delano the right fit for you?",
  lifestyleBody:
    "If you’re looking for a community that feels tight-knit but still offers convenient access to the west metro, Delano belongs on your short list. From Friday night lights at the high school to summer festivals and riverfront sunsets, it’s a place where people tend to stay once they arrive.",
  listingsCtaLabel: "View all Delano properties →",
  listingsCtaHref: "#", // later: link this to your IDX search for Delano
};

const Delano = () => {
  return (
    <>
      <Navigation />
      <CommunityPage config={delanoConfig} />
    </>
  );
};

export default Delano;