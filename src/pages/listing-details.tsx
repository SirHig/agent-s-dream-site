import Navigation from "@/components/Navigation";
import BuyingBuddyWidget from "@/components/buyingbuddy/BuyingBuddyWidget";

const ListingDetails = () => {
  return (
    <>
      <Navigation />

      <main className="pt-28 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4 space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              Listing Details
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              This is the BuyingBuddy foundation page for individual property
              details.
            </p>
          </header>

          <section
            aria-label="BuyingBuddy listing details"
            className="rounded-xl border border-border bg-background/80 p-4 shadow-sm"
          >
            <BuyingBuddyWidget
              markup={'<bb-widget data-type="SearchDetails"></bb-widget>'}
            />
          </section>
        </div>
      </main>
    </>
  );
};

export default ListingDetails;