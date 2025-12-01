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

          {/* IDX Search Widget Placeholder */}
          <div className="bg-background border border-border rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="lg:col-span-2">
                <Input
                  placeholder="City, Neighborhood, or ZIP"
                  className="h-12"
                />
              </div>
              
              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="land">Land</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">$0 - $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                  <SelectItem value="2m+">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Beds" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1+">1+</SelectItem>
                  <SelectItem value="2+">2+</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Baths" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1+">1+</SelectItem>
                  <SelectItem value="2+">2+</SelectItem>
                  <SelectItem value="3+">3+</SelectItem>
                  <SelectItem value="4+">4+</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Min Sqft" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1000">1,000+</SelectItem>
                  <SelectItem value="2000">2,000+</SelectItem>
                  <SelectItem value="3000">3,000+</SelectItem>
                  <SelectItem value="4000">4,000+</SelectItem>
                  <SelectItem value="5000">5,000+</SelectItem>
                </SelectContent>
              </Select>

              <Button className="h-10" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
              <p className="font-medium">BuyerBuddy IDX Ready</p>
              <p className="text-xs mt-1">
                Add BuyerBuddy widget codes here to display live property search
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySearch;
