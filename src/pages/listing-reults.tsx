
import Navigation from "@/components/Navigation";
import BuyingBuddyWidget from "@/components/buyingbuddy/BuyingBuddyWidget";

const ListingResults = () => {
  return (
    <>
      <Navigation />

      <main className="pt-28 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              Listing Results
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              This page is the foundation results page for Buying Buddy. All
              IDX search results will use this as the base URL.
            </p>
          </header>

          <section
            aria-label="Buying Buddy listing results"
            className="rounded-xl border border-border bg-background/80 p-4 shadow-sm"
          >
            <BuyingBuddyWidget
              // 🔴 REPLACE THIS WITH THE EXACT SHORTCODE FROM YOUR BB DASHBOARD
              markup={'<bb-widget data-type="ListingResults"></bb-widget>'}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default ListingResults;