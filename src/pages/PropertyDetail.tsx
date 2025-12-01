import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import BuyerBuddyWidget from "@/components/BuyerBuddyWidget";
import { 
  Bed, 
  Bath, 
  Square, 
  MapPin, 
  Calendar,
  Home,
  Car,
  ArrowLeft,
  Heart,
  Share2
} from "lucide-react";

const PropertyDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>

        {/* BuyerBuddy Property Details Widget */}
        <section className="container mx-auto px-4 pb-16">
          <BuyerBuddyWidget type="SearchDetails" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
