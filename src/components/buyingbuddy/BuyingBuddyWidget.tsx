import { useEffect, useRef } from "react";

interface BuyingBuddyWidgetProps {
  shortcode: string; // e.g. "[mbb_widget id='MBBv3_FeaturedGallery' filter='city:Delano+state_province:MN']"
}

const BuyingBuddyWidget = ({ shortcode }: BuyingBuddyWidgetProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Put the shortcode into the DOM so the BB script can see it
    containerRef.current.innerHTML = shortcode;

    // If BuyingBuddy ever tells you “call this global function to re-scan the page
    // after AJAX / SPA navigation”, this is where you’d call it, e.g.:
    //
    //   (window as any).MBB && (window as any).MBB.processWidgets?.();
    //
    // For now we let its default behavior handle it.
  }, [shortcode]);

  return <div ref={containerRef} />;
};

export default BuyingBuddyWidget;