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
  process?: {
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  comparison?: {
    title: string;
    subtitle: string;
    features: {
      name: string;
      options: {
        label: string;
        value: string;
        highlight?: boolean;
      }[];
    }[];
    columns: string[];
  };
  useCases?: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  showcase?: {
    title: string;
    description: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
      image: string;
      uses: string[];
      benefits: string[];
    }[];
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
  subLinks?: { title: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
}
