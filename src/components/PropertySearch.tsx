import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

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
            {/* 
              To integrate BuyerBuddy search widget:
              1. Log into your BuyerBuddy dashboard at https://www.mbb2.com
              2. Navigate to Widgets or Integration section
              3. Copy the search widget HTML code (usually a div with data attributes or script)
              4. Replace this comment and the placeholder below with that code
              
              Example: <div data-mbb-widget="search" data-mbb-config="..."></div>
            */}
            
            <div id="mbb-search-widget" className="min-h-[300px] flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Search className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p className="font-medium text-lg mb-2">BuyerBuddy Search Widget</p>
                <p className="text-sm max-w-md">
                  To display the live MLS search, add your BuyerBuddy widget code from your dashboard.
                </p>
                <p className="text-xs mt-3 opacity-70">
                  Dashboard → Widgets → Search Widget
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;
