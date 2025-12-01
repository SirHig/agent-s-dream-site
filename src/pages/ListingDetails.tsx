import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BuyerBuddyWidget from "@/components/BuyerBuddyWidget";
import { ArrowLeft } from "lucide-react";

const ListingDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link to="/listing-results">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Listings
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

export default ListingDetails;
