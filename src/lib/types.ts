export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  pillar: "transit" | "digital-telecom" | "premium-ooh" | "digital-marketing";
  pillarColor: string;
  pillarColorBg: string;
  hero: {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    bgImage: string;
    gradientOverlay: string;
    stats: { value: string; label: string }[];
  };
  features: {
    title: string;
    description: string;
    image: string;
    items?: string[];
    href?: string;
  }[];
  gallery: {
    images: { src: string; alt: string }[];
    title: string;
    subtitle: string;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    icon: string;
  };
}

export interface MegaMenuItem {
  href: string;
  title: string;
  description: string;
  borderColor: string;
  bgColor: string;
  hoverBorderColor: string;
  hoverBgColor: string;
  textColor: string;
}

export interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
}
