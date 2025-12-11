import { useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { mainNavItems, NavItem } from "@/components/navlinks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isCommunitiesOpen, setIsCommunitiesOpen] = useState(false); // desktop dropdown

  // NEW: small delay to avoid flicker when moving between button & menu
  const communitiesTimeoutRef = useRef<number | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleNavClick = (item: NavItem) => {
    if (item.type === "scroll") {
      if (location.pathname === "/") {
        scrollToSection(item.sectionId);
      } else {
        navigate("/");
        setIsOpen(false);
      }
    } else if (item.type === "route") {
      navigate(item.to);
      setIsOpen(false);
    }
  };

  // --- Communities hover handlers ---
  const openCommunities = () => {
    if (communitiesTimeoutRef.current !== null) {
      window.clearTimeout(communitiesTimeoutRef.current);
      communitiesTimeoutRef.current = null;
    }
    setIsCommunitiesOpen(true);
  };

  const closeCommunities = () => {
    // tiny delay prevents that "I moved 1px and it vanished" feeling
    communitiesTimeoutRef.current = window.setTimeout(() => {
      setIsCommunitiesOpen(false);
      communitiesTimeoutRef.current = null;
    }, 120);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-serif text-2xl font-bold text-foreground">
            Simply Real Estate Team
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {mainNavItems.map((item) => {
              if (item.type === "menu") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={openCommunities}
                    onMouseLeave={closeCommunities}
                  >
                    <button
                      className="flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={isCommunitiesOpen}
                    >
                      {item.label}
                      <ChevronDown size={16} />
                    </button>

                    {isCommunitiesOpen && (
                      <div className="absolute left-0 mt-2 min-w-[220px] rounded-md border border-border bg-background shadow-lg z-50">
                        <ul className="py-2">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <Link
                                to={child.to}
                                className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary"
                                onClick={() => {
                                  // close immediately on click
                                  if (communitiesTimeoutRef.current !== null) {
                                    window.clearTimeout(
                                      communitiesTimeoutRef.current
                                    );
                                    communitiesTimeoutRef.current = null;
                                  }
                                  setIsCommunitiesOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              // scroll or route simple link
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground hover:text-primary transition-colors"
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}

            {/* Call-to-action button */}
            <Button
              onClick={() =>
                handleNavClick({
                  label: "Contact",
                  type: "scroll",
                  sectionId: "contact",
                })
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {mainNavItems.map((item) => {
              if (item.type === "menu") {
                return (
                  <div key={item.label} className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase text-muted-foreground">
                      {item.label}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-foreground hover:text-primary transition-colors text-left"
                  type="button"
                >
                  {item.label}
                </button>
              );
            })}

            <Button
              onClick={() =>
                handleNavClick({
                  label: "Contact",
                  type: "scroll",
                  sectionId: "contact",
                })
              }
              className="w-full"
            >
              Get In Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;