import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DelanoPage() {
  return (
    <section className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* HERO */}
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
          Homes for Sale in Delano, MN
        </h1>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Delano is one of the West Metro’s most desirable communities—known for 
          excellent schools, a vibrant small-town feel, and quick access to the Twin 
          Cities. Whether you’re looking for new construction, established neighborhoods, 
          acreage, or riverside living, Delano offers something for every lifestyle.
        </p>

        {/* QUICK FACTS */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Quick Facts</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card><CardContent className="p-4">Population: ~7,500</CardContent></Card>
          <Card><CardContent className="p-4">Median Home Price: ~$480,000</CardContent></Card>
          <Card><CardContent className="p-4">School District: Delano Public Schools</CardContent></Card>
          <Card><CardContent className="p-4">Commute to Minneapolis: 35–40 min</CardContent></Card>
        </div>

        {/* DESCRIPTION */}
        <h2 className="text-2xl font-bold mb-4">Why People Love Living in Delano</h2>
        <p className="text-muted-foreground mb-6">
          Delano consistently ranks among the top places to live in the West Metro...
        </p>
        
        {/* NEIGHBORHOODS */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Popular Neighborhoods</h2>
        <ul className="list-disc pl-6 text-muted-foreground mb-12">
          <li>Liberty Landing</li>
          <li>Parkview Hills</li>
          <li>Orchard Circle</li>
          <li>Downtown Delano</li>
        </ul>

        {/* IDX PLACEHOLDER */}
        <h2 className="text-2xl font-bold mt-12 mb-4">Homes for Sale in Delano</h2>
        <p className="text-muted-foreground mb-4">[Delano filtered IDX widget goes here]</p>

        {/* CTA */}
        <div className="mt-16 bg-primary/10 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4">Thinking about moving to Delano?</h3>
          <p className="text-muted-foreground mb-6">
            Schedule a tour, get listing alerts, or request a personalized market report today.
          </p>
          <Button size="lg">Get in Touch</Button>
        </div>

      </div>
    </section>
  );
}
