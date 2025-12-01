import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import BuyerBuddyWidget from "./BuyerBuddyWidget";

const PropertySearch = () => {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Find Your Perfect Property
            </h2>
            <p className="text-muted-foreground">
              Search thousands of listings in your desired location
            </p>
          </div>

          {/* BuyerBuddy IDX Search Widget */}
          <div className="bg-background border border-border rounded-lg p-8 shadow-lg">
            {/* BuyerBuddy Search Form Widget */}
            <BuyerBuddyWidget type="SearchForm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;
