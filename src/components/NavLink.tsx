// src/components/Navigation/navlinks.tsx (or wherever it lives)

export type ScrollLink = {
  label: string;
  type: "scroll";
  sectionId: string;
};

export type RouteLink = {
  label: string;
  type: "route";
  to: string;
};

export type MenuLink = {
  label: string;
  type: "menu";
  children: RouteLink[];
};

export type NavItem = ScrollLink | RouteLink | MenuLink;

export const mainNavItems: NavItem[] = [
  {
    label: "Properties",
    type: "scroll",
    sectionId: "properties",
  },
  {
    label: "About",
    type: "scroll",
    sectionId: "about",
  },
  {
    label: "Services",
    type: "scroll",
    sectionId: "services",
  },
  {
    label: "Communities",
    type: "menu",
    children: [
      { label: "Delano, MN", type: "route", to: "/delano" },
      // later: { label: "Buffalo, MN", type: "route", to: "/buffalo" },
      // etc…
    ],
  },
];
