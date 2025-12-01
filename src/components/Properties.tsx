import PropertyCard from "./PropertyCard";
import { motion } from "framer-motion";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import BuyerBuddyWidget from "./BuyerBuddyWidget";

const properties = [
  {
    image: property1,
    title: "Modern Villa",
    location: "Beverly Hills, CA",
    price: "$2,850,000",
    beds: 5,
    baths: 4,
    sqft: "4,200 sq ft",
  },
  {
    image: property2,
    title: "Luxury Penthouse",
    location: "Downtown, LA",
    price: "$1,950,000",
    beds: 3,
    baths: 3,
    sqft: "3,100 sq ft",
  },
  {
    image: property3,
    title: "Estate Home",
    location: "Malibu, CA",
    price: "$4,200,000",
    beds: 6,
    baths: 5,
    sqft: "5,800 sq ft",
  },
];

const Properties = () => {
  return (
    <section id="properties" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of the finest homes available in prime locations
          </p>
        </motion.div>

        {/* BuyerBuddy Listing Results Widget */}
        <BuyerBuddyWidget type="ListingResults" />
      </div>
    </section>
  );
};

export default Properties;
