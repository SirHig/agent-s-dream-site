import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Square } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  index: number;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  index,
}: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden group cursor-pointer">
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-serif text-2xl font-bold text-foreground">
              {title}
            </h3>
            <span className="font-serif text-2xl font-bold text-primary">
              {price}
            </span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <Bed size={16} />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath size={16} />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center gap-2">
              <Square size={16} />
              <span>{sqft}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
