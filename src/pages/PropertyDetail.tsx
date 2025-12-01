import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
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

        {/* Property Images Gallery */}
        <section className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 lg:row-span-2 aspect-video lg:aspect-[16/10] bg-muted rounded-lg overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Home className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">IDX Property Image Gallery</p>
                  <p className="text-xs mt-1">Main property photos will display here</p>
                </div>
              </div>
            </motion.div>

            {/* Thumbnail Images */}
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="aspect-video bg-muted rounded-lg overflow-hidden hidden lg:block"
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Photo {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Property Details */}
        <section className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Price and Title */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                        $2,850,000
                      </h1>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>123 Luxury Lane, Beverly Hills, CA 90210</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">For Sale</Badge>
                    <Badge variant="outline">Single Family Home</Badge>
                  </div>
                </div>

                {/* Key Features */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-4">Property Features</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Bed className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">5</p>
                          <p className="text-sm text-muted-foreground">Bedrooms</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Bath className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">4</p>
                          <p className="text-sm text-muted-foreground">Bathrooms</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Square className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">4,200</p>
                          <p className="text-sm text-muted-foreground">Sq Ft</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Car className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold">3</p>
                          <p className="text-sm text-muted-foreground">Garage</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Description */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-4">Description</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This stunning modern villa exemplifies luxury living at its finest. Nestled in the prestigious 
                      Beverly Hills neighborhood, this meticulously designed home offers an unparalleled blend of 
                      elegance, comfort, and contemporary style.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      The property features soaring ceilings, expansive windows that flood the interior with natural 
                      light, and premium finishes throughout. The gourmet kitchen boasts top-of-the-line appliances, 
                      custom cabinetry, and a spacious island perfect for entertaining.
                    </p>
                    <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground italic">
                        IDX Integration: Full property description will be dynamically loaded here
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Additional Details */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-serif text-2xl font-bold mb-4">Property Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Property Type:</span>
                        <span className="font-medium">Single Family Home</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Year Built:</span>
                        <span className="font-medium">2020</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Lot Size:</span>
                        <span className="font-medium">0.5 acres</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">HOA Fees:</span>
                        <span className="font-medium">$450/month</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">MLS#:</span>
                        <span className="font-medium">ABC123456</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-2">
                        <span className="text-muted-foreground">Status:</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                {/* Contact Card */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Request Information</h3>
                    <div className="space-y-3 mb-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      />
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none"
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      Contact Agent
                    </Button>
                    <Button variant="outline" className="w-full mt-2" size="lg">
                      Schedule Viewing
                    </Button>
                  </CardContent>
                </Card>

                {/* Agent Info Card */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold mb-4">Listing Agent</h3>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-2xl font-serif">EA</span>
                      </div>
                      <div>
                        <p className="font-bold">Elite Agent</p>
                        <p className="text-sm text-muted-foreground">Premium Realty</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>Listed: 15 days ago</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
