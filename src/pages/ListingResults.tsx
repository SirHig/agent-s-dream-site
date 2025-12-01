import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BuyerBuddyWidget from "@/components/BuyerBuddyWidget";

const ListingResults = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Property Listings
            </h1>
            <p className="text-xl text-muted-foreground">
              Browse available properties in your area
            </p>
          </div>
          
          {/* BuyerBuddy Listing Results Widget */}
          <BuyerBuddyWidget type="ListingResults" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ListingResults;
