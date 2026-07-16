export interface NavItem {
  title: string
  href: string
}

export const navigationItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Doctors", href: "/doctors" },
  { title: "Treatments", href: "/treatments" },
  { title: "Gallery", href: "/gallery" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
]
