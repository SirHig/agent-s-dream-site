import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertyDetail from "./pages/PropertyDetail";
import ListingResults from "./pages/ListingResults";
import ListingDetails from "./pages/ListingDetails";
import NotFound from "./pages/NotFound";
import Delano from "./pages/communities/delano"; // ⬅ NEW

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/listing-results" element={<ListingResults />} />
          <Route path="/listing-details/:id" element={<ListingDetails />} />

          {/* ✅ CUSTOM ROUTES GO HERE */}
          <Route path="/delano" element={<Delano />} />

          {/* KEEP THIS LAST */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
