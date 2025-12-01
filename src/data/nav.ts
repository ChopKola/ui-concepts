export interface NavItem {
  id: number;
  label: string;
  link: string;
}

export const navItems: NavItem[] = [
  { id: 1, label: "Home", link: "/" },
  { id: 2, label: "Restaurants", link: "/restaurants" },
  { id: 3, label: "Marketplace", link: "/marketplace" },
  { id: 4, label: "Support", link: "/support" }
];

export const footerLinks: NavItem[] = [
  { id: 1, label: "About", link: "/about-chopkola" },
  { id: 2, label: "Partner with Us", link: "/partner-with-us" },
  { id: 3, label: "Terms & Conditions", link: "/terms-and-conditions" },
  { id: 4, label: "Privacy Policy", link: "/privacy-policy" },
  { id: 5, label: "Customer Support", link: "/support" }
];

export const footerAccountsLinks: NavItem[] = [
  { id: 1, label: "Login", link: "/login" },
  { id: 2, label: "Register", link: "/register" },
  { id: 3, label: "Vendor Login", link: "/vendor/login" },
  { id: 4, label: "Register as Vendor", link: "/vendor-registration" },
  { id: 5, label: "System User Login", link: "/back-office/login" }
];