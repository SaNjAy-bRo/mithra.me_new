import { ServiceData, MegaMenuItem } from "./types";

export const siteConfig = {
  name: "Mithrah.ME",
  tagline: "Integrated 360° Media Solutions",
  phone: "+91 87924 59245",
  phoneHref: "tel:+918792459245",
  whatsapp: "https://wa.me/918792459245",
  email: "hello@mithrah.me",
  description:
    "Bangalore-based advertising and communication partner for transit, outdoor, digital, direct response and activation campaigns across India.",
  topbarMessages: [
    "Top rated Advertising company in Bangalore",
    "Transit Advertising",
    "Outdoor Media",
    "WhatsApp Marketing",
    "Bulk SMS Campaigns",
    "Digital Marketing",
    "BTL Activations",
  ],
};

export const megaMenuItems: MegaMenuItem[] = [
  {
    href: "/services/transit-media",
    title: "Transit Media",
    description: "Cab, auto and bus branding with in-app targeting.",
    borderColor: "border-brand-coral/30",
    bgColor: "bg-brand-coral/5",
    hoverBorderColor: "hover:border-brand-coral",
    hoverBgColor: "hover:bg-brand-coral/10",
    textColor: "text-brand-coral",
  },
  {
    href: "/services/premium-ooh",
    title: "Premium OOH",
    description: "Multiplex, airport, and elite tech park placements.",
    borderColor: "border-[#fca311]/30",
    bgColor: "bg-[#fca311]/5",
    hoverBorderColor: "hover:border-[#fca311]",
    hoverBgColor: "hover:bg-[#fca311]/10",
    textColor: "text-[#d48c0b]",
  },
  {
    href: "/services/digital-telecom",
    title: "Digital & Telecom",
    description: "WhatsApp, SMS, IVR, and automated voice outreach.",
    borderColor: "border-[#1d90d9]/30",
    bgColor: "bg-[#1d90d9]/5",
    hoverBorderColor: "hover:border-[#1d90d9]",
    hoverBgColor: "hover:bg-[#1d90d9]/10",
    textColor: "text-[#1d90d9]",
  },
  {
    href: "/services/digital-marketing",
    title: "Digital Marketing",
    description: "SEO, social media, and performance lead generation.",
    borderColor: "border-[#783e8a]/30",
    bgColor: "bg-[#783e8a]/5",
    hoverBorderColor: "hover:border-[#783e8a]",
    hoverBgColor: "hover:bg-[#783e8a]/10",
    textColor: "text-[#783e8a]",
  },
];

export const services: ServiceData[] = [
  {
    slug: "transit-media",
    title: "Transit Media & In-App Targeting",
    tagline: "Physical & Digital Convergence",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Physical & Digital Convergence",
      heading: "Transit Media &",
      headingHighlight: "In-App Targeting",
      description:
        "Your moving billboard, supercharged. We couple wide-scale Cab, Auto, and Bus physical branding with precise In-App advertising (Ola/Uber) to capture users exactly when they travel.",
      bgImage:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "54K+", label: "Vehicles Ready" },
        { value: "In-App", label: "Geo-fenced Ads" },
        { value: "City-Wide", label: "Continuous Mileage" },
      ],
    },
    features: [
      {
        title: "Cab & Taxi Branding",
        description:
          "High-visibility branding across Ola, Uber, and local cab fleets covering 100+ daily km per vehicle.",
        icon: "ph-car-profile",
        items: ["Full car wraps", "Backseat screens", "Branded receipts"],
      },
      {
        title: "Bus Advertising",
        description:
          "Large-format moving hoardings targeting specific city routes, tech parks, and long-range commuter paths.",
        icon: "ph-bus",
        items: ["Full bus wraps", "Interior branding", "Bus shelter ads"],
      },
      {
        title: "In-App Ads (Ola/Uber)",
        description:
          "Complementing the physical wrap, we target passengers during their ride with high-conversion mobile display units directly in their cab booking apps.",
        icon: "ph-device-mobile",
        items: ["Location targeting", "Retargeting pixels", "Campaign analytics"],
      },
      {
        title: "Auto Advertising",
        description:
          "Hyper-local reach through branded auto-rickshaws in high-density neighborhoods.",
        icon: "ph-scooter",
        items: ["Back panel ads", "Hood branding", "Interior cards"],
      },
    ],
    gallery: {
      title: "Moving Billboards in Action",
      subtitle:
        "High-impact fleet branding that takes your message to almost every neighborhood in the city.",
      images: [
        {
          src: "/images/auto-advertise/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/images/auto-advertise/WhatsApp Image 2026-03-14 at 10.37.08 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/images/auto-advertise/WhatsApp Image 2026-03-14 at 10.37.09 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/images/auto-advertise/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/images/auto-advertise/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/images/Taxi branding/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
          alt: "Taxi Branding",
        },
        {
          src: "/images/Taxi branding/WhatsApp Image 2026-03-07 at 1.18.00 PM.jpeg",
          alt: "Taxi Branding",
        },
        {
          src: "/images/Taxi branding/WhatsApp Image 2026-03-07 at 1.17.58 PM.jpeg",
          alt: "Taxi Branding",
        },
        {
          src: "/images/Taxi branding/WhatsApp Image 2026-03-07 at 1.17.56 PM.jpeg",
          alt: "Taxi Branding",
        },
      ],
    },
    cta: {
      title: "Scale Your Mobility Campaign",
      description:
        "Combine the mass reach of OOH with the attribution of Digital via our Transit-Digital model. Let's create your fleet plan today.",
      buttonText: "Get Transit Media Rates",
      icon: "ph-paper-plane-tilt",
    },
  },
  {
    slug: "digital-telecom",
    title: "Digital & Telecom Solutions",
    tagline: "Direct Engagement Technology",
    pillar: "digital-telecom",
    pillarColor: "#1d90d9",
    pillarColorBg: "bg-[#1d90d9]",
    hero: {
      badge: "Tech-Driven Communication",
      heading: "Digital &",
      headingHighlight: "Telecom Media",
      description:
        "Direct, data-driven outreach to billions of active devices. We provide enterprise-grade Digital Wall Printing, WhatsApp APIs, Bulk SMS, and Voice solutions to engage audiences instantly.",
      bgImage:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#1d90d9]/40",
      stats: [
        { value: "100M+", label: "Delivery Capacity" },
        { value: "Live", label: "Analytics Dashboard" },
        { value: "AI", label: "Conversational Flows" },
      ],
    },
    features: [
      {
        title: "WhatsApp Marketing",
        description:
          "Official WhatsApp Business APIs, verified Green Tick provisioning, rich-media broadcasts, and automated support paths.",
        icon: "ph-whatsapp-logo",
        items: ["Rich media broadcasts", "AI Chatbots", "Green Tick Verification"],
        href: "/services/whatsapp-marketing",
      },
      {
        title: "Bulk SMS Campaigns",
        description:
          "End-to-end DLT compliant promotional and transactional SMS routing with multi-operator failovers.",
        icon: "ph-chat-circle-text",
        items: ["DLT Compliance", "Transactional OTP", "Failover Routing"],
        href: "/services/bulk-sms",
      },
      {
        title: "Digital Wall Printing",
        description:
          "Automated large-scale fade-resistant printing directly onto rural and urban structures for maximum local penetration.",
        icon: "ph-printer",
        items: ["Weather-proof ink", "High-res urban walls", "Rural reach"],
      },
      {
        title: "OBD Voice & IVR",
        description:
          "Pre-recorded Outbound Voice Dialing and smart IVR menus to engage millions asynchronously in regional languages.",
        icon: "ph-phone-call",
        items: ["Regional Voice", "Toll-free Provisioning", "Missed Call Marketing"],
      },
    ],
    gallery: {
      title: "Digital Wall Printing in Action",
      subtitle:
        "Precision printing that turns any wall into a high-impact advertising asset across Bangalore's arteries.",
      images: [
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.31 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.32 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.33 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.34 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.35 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/images/Digital Wall Printing/WhatsApp Image 2026-02-20 at 3.32.31 PM (1).jpeg",
          alt: "Digital Wall Printing",
        },
      ],
    },
    cta: {
      title: "Digitize Your Communications",
      description:
        "Build scalable direct-to-device marketing workflows that guarantee delivery and ROI. Partner with us for robust telecom integrations.",
      buttonText: "Get API & Telecom Pricing",
      icon: "ph-lightning",
    },
  },
  {
    slug: "premium-ooh",
    title: "Premium Out-of-Home",
    tagline: "Elite Media Placements",
    pillar: "premium-ooh",
    pillarColor: "#db9318",
    pillarColorBg: "bg-[#db9318]",
    hero: {
      badge: "Elite Placement Network",
      heading: "Premium",
      headingHighlight: "Out-of-Home",
      description:
        "Capture attention where it matters most. From captive cinema audiences to high-footfall tech parks and airports, our premium network commands attention.",
      bgImage:
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#db9318]/30",
      stats: [
        { value: "500+", label: "Screen Network" },
        { value: "PVR/INOX", label: "Cinema Partners" },
        { value: "Pan-India", label: "Metro Coverage" },
      ],
    },
    features: [
      {
        title: "Cinema Advertising",
        description:
          "Unskippable 10-sec/30-sec on-screen ads, lobby standees, and seat branding across PVR & INOX.",
        icon: "ph-film-strip",
        items: ["On-screen ads", "Lobby branding", "PVR / INOX Network"],
        href: "/services/cinema-advertising",
      },
      {
        title: "Airport Advertising",
        description:
          "Aero-bridge wraps, baggage carousel screens, and departure lounge hoardings in major airports.",
        icon: "ph-airplane-in-flight",
        items: ["Arrival halls", "Departure lounges", "Baggage claim"],
      },
      {
        title: "Tech Park Advertising",
        description:
          "Elevator screens, boom barrier branding, and cafeteria activations targeting millions of IT pros.",
        icon: "ph-buildings",
        items: ["Lobby standees", "Elevator wraps", "Boom barriers"],
      },
      {
        title: "Mall & Hoarding Media",
        description:
          "Strategic placement of large static and digital hoardings at major arterial junctions and mall drop-downs.",
        icon: "ph-monitor",
        items: ["Digital LED screens", "Mall atrium ads", "Junction hoardings"],
        href: "/services/led-advertising",
      },
    ],
    gallery: {
      title: "Elite Media Placements",
      subtitle:
        "Strategically positioned assets across high-dwell time environments.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
          alt: "Cinema Advertising",
        },
        {
          src: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?q=80&w=2670&auto=format&fit=crop",
          alt: "Airport Advertising",
        },
        {
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
          alt: "Tech Park Media",
        },
        {
          src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2670&auto=format&fit=crop",
          alt: "Mall Branding",
        },
        {
          src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
          alt: "Luxury Retail",
        },
        {
          src: "https://images.unsplash.com/photo-1622321487661-0f724391307b?q=80&w=2670&auto=format&fit=crop",
          alt: "Billboard Domination",
        },
        {
          src: "https://images.unsplash.com/photo-1581452410492-35111b154b52?q=80&w=2670&auto=format&fit=crop",
          alt: "Digital Screens",
        },
        {
          src: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop",
          alt: "Metro Media",
        },
        {
          src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2670&auto=format&fit=crop",
          alt: "Corporate Spaces",
        },
      ],
    },
    cta: {
      title: "Secure Premium Placements",
      description:
        "Lock in elite positions across cinema, airport, and tech park networks before your competitors do.",
      buttonText: "Get Premium OOH Rates",
      icon: "ph-crown",
    },
  },
  {
    slug: "digital-marketing",
    title: "Performance Digital Marketing",
    tagline: "Full-Funnel Growth",
    pillar: "digital-marketing",
    pillarColor: "#763d90",
    pillarColorBg: "bg-[#763d90]",
    hero: {
      badge: "Performance & Growth",
      heading: "Digital",
      headingHighlight: "Marketing Engine",
      description:
        "Transform online visibility into measurable revenue. We build, rank, and scale your brand across the web via Search, Social, and highly-targeted Lead Generation pipelines.",
      bgImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#783e8a]/40",
      stats: [
        { value: "ROI", label: "Focused Campaigns" },
        { value: "360°", label: "Full-Funnel Mgmt" },
        { value: "Data", label: "Driven Optimization" },
      ],
    },
    features: [
      {
        title: "Lead Generation",
        description:
          "High-velocity paid media campaigns across Meta, Google, and LinkedIn engineered for aggressive CPL optimization.",
        icon: "ph-funnel",
        items: ["Meta Ads", "Google Search", "LinkedIn Lead Gen"],
      },
      {
        title: "SEO / SEM Services",
        description:
          "Owning page one. Technical audit, content clustering, deep backlink acquisition, and granular Search Engine Marketing.",
        icon: "ph-magnifying-glass",
        items: ["Technical SEO", "Content Clustering", "Backlink Strategy"],
      },
      {
        title: "Online Reputation Mgmt",
        description:
          "Protecting your digital narrative. Review suppression, proactive PR signaling, and sentiment analysis for enterprise brands.",
        icon: "ph-shield-check",
        items: ["Review Management", "Sentiment Analysis", "Brand PR"],
      },
      {
        title: "Website Development",
        description:
          "Conversion-optimized landing pages and corporate sites built for lightning speed and SEO mechanics.",
        icon: "ph-code",
        items: ["Next.js Apps", "Landing Pages", "Speed Optimization"],
      },
    ],
    gallery: {
      title: "Growth Case Studies",
      subtitle:
        "Data-driven campaigns that deliver measurable growth across all performance channels.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
          alt: "Analytics Dashboard",
        },
        {
          src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2670&auto=format&fit=crop",
          alt: "SEO Strategy",
        },
        {
          src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2670&auto=format&fit=crop",
          alt: "Social Media",
        },
      ],
    },
    cta: {
      title: "Ready to Dominate SERPs?",
      description:
        "Book a discovery call to audit your current digital stack and identify growth leakages and massive low-hanging opportunities.",
      buttonText: "Audit My Brand",
      icon: "ph-rocket-launch",
    },
  },
  {
    slug: "led-advertising",
    title: "LED Van & Mobile Advertising",
    tagline: "Mobile Digital Impact",
    pillar: "premium-ooh",
    pillarColor: "#db9318",
    pillarColorBg: "bg-[#db9318]",
    hero: {
      badge: "Mobile Digital Impact",
      heading: "LED Van &",
      headingHighlight: "Mobile Advertising",
      description:
        "Take your brand to the streets with our fleet of high-resolution LED display vans. Perfect for product launches, political campaigns, and event marketing.",
      bgImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#db9318]/30",
      stats: [
        { value: "HD", label: "LED Screens" },
        { value: "GPS", label: "Route Tracking" },
        { value: "24/7", label: "Campaign Ready" },
      ],
    },
    features: [
      {
        title: "MG Road & Brigade Road",
        description:
          "Brigade Road Junction, Trinity Circle, Anil Kumble Circle. L-Shape & Face-to-Traffic screens.",
        icon: "ph-map-pin",
        items: ["High Traffic", "Retail Catchment", "Premium Branding"],
      },
      {
        title: "Koramangala & Indiranagar",
        description:
          "Sony World Junction, Bosch Junction, 100ft Road KFC Junction. Targeting Youth & F&B hubs.",
        icon: "ph-monitor",
        items: ["Youth Density", "Dining Hubs", "Dynamic Content"],
      },
      {
        title: "Outer Ring Road (ORR)",
        description:
          "Bellandur Flyover, Manyata Tech Park, Silk Board Junction. Massive displays for tech work force.",
        icon: "ph-buildings",
        items: ["Tech Corridor", "B2B Reach", "High Dwell Time"],
      },
      {
        title: "Hebbal & Airport Road",
        description:
          "Mekhri Circle, Near Mall of Asia Sahakaranagara. Highway facing screens for HNIs & Travelers.",
        icon: "ph-airplane",
        items: ["Airport Transit", "Highway Visibility", "Massive Impact"],
      },
    ],
    gallery: {
      title: "Recent LED Executions",
      subtitle:
        "Transforming city walls and junctions into vibrant digital media assets across Bangalore's arteries.",
      images: [
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (1).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (2).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (3).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (4).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (5).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (6).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (7).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (9).jpeg",
          alt: "LED Van Execution",
        },
      ],
    },
    cta: {
      title: "Book Your LED Campaign",
      description:
        "High-impact mobile advertising that reaches your audience where they live, work, and play.",
      buttonText: "Get LED Van Rates",
      icon: "ph-van",
    },
  },
  {
    slug: "cinema-advertising",
    title: "Cinema Advertising",
    tagline: "Captive Audience Marketing",
    pillar: "premium-ooh",
    pillarColor: "#db9318",
    pillarColorBg: "bg-[#db9318]",
    hero: {
      badge: "Captive Audience Marketing",
      heading: "Cinema",
      headingHighlight: "Advertising",
      description:
        "The most captive audience in advertising. Your brand on the big screen with zero distractions, 100% attention, and premium association.",
      bgImage:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#db9318]/30",
      stats: [
        { value: "PVR", label: "& INOX Network" },
        { value: "100%", label: "Attention Rate" },
        { value: "Premium", label: "Audience" },
      ],
    },
    features: [
      {
        title: "Orion, Mantri & Mall of Asia",
        description:
          "PVR Orion Mall (Icon), Inox Mantri Square (7 Star), INOX Mall of Asia. West & North Bangalore.",
        icon: "ph-ticket",
        items: ["Premium Catchment", "Icon Screens", "High Footfall"],
      },
      {
        title: "Phoenix, VR & Bhartiya",
        description:
          "PVR Phoenix Market City, PVR VR Mall, PVR Bhartiya Mall. IT Workforce & Youth hubs.",
        icon: "ph-ticket",
        items: ["Tech Corridor", "Youth Hubs", "IT Audience"],
      },
      {
        title: "South Bangalore Network",
        description:
          "PVR Vega City (Platinum), PVR Forum Mall, Inox Garuda Mall (Gold). Premium catchments.",
        icon: "ph-ticket",
        items: ["Platinum Screens", "Residential Hub", "Luxury Audience"],
      },
      {
        title: "Tier 2 Karnataka",
        description:
          "Multiplexes in Mysore, Dharwad, Gulbarga & Tumakuru. Capturing rapid growth markets.",
        icon: "ph-film-strip",
        items: ["Growth Markets", "Mysore/Dharwad", "Regional Branding"],
      },
    ],
    gallery: {
      title: "Cinema Network",
      subtitle:
        "Premium placements across India's leading multiplex chains for maximum brand recall.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
          alt: "Cinema Hall",
        },
        {
          src: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2670&auto=format&fit=crop",
          alt: "Cinema Lobby",
        },
        {
          src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2670&auto=format&fit=crop",
          alt: "Movie Screen",
        },
        {
          src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2670&auto=format&fit=crop",
          alt: "Cinema Experience",
        },
        {
          src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2670&auto=format&fit=crop",
          alt: "Premium Seats",
        },
        {
          src: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?q=80&w=2670&auto=format&fit=crop",
          alt: "Popcorn Branding",
        },
        {
          src: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=2670&auto=format&fit=crop",
          alt: "Cinema Entrance",
        },
        {
          src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2670&auto=format&fit=crop",
          alt: "Film Reel",
        },
        {
          src: "https://images.unsplash.com/photo-1460881680858-30d872d5b530?q=80&w=2670&auto=format&fit=crop",
          alt: "Movie Premiere",
        },
      ],
    },
    cta: {
      title: "Book Cinema Ad Slots",
      description:
        "Secure premium ad slots across PVR, INOX, and single screens for unmatched brand impact.",
      buttonText: "Get Cinema Rates",
      icon: "ph-film-strip",
    },
  },
  {
    slug: "residential-branding",
    title: "Residential Society Branding",
    tagline: "Hyper-Local Targeting",
    pillar: "digital-marketing",
    pillarColor: "#763d90",
    pillarColorBg: "bg-[#763d90]",
    hero: {
      badge: "Hyper-Local BTL & Internal Connect",
      heading: "Premium Residential",
      headingHighlight: "Engagement",
      description:
        "Directly target high-net-worth households across Bangalore. We execute precise digital screen, lobby, and activation campaigns inside Prestige, Sobha, and Salarpuria communities.",
      bgImage:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "100+", label: "Premium Societies" },
        { value: "Direct", label: "Household Reach" },
        { value: "BTL", label: "Activations" },
      ],
    },
    features: [
      {
        title: "Sobha & Prestige Communities",
        description:
          "Prestige Lakeside Habitat, Prestige Ferns Residency, Sobha Rose. Targeting Tech Execs & Expats.",
        icon: "ph-buildings",
        items: ["East & IT Hubs", "Whitefield", "Sarjapur Road"],
      },
      {
        title: "Mantri & Salarpuria Network",
        description:
          "Mantri Serenity, Salarpuria Sattva Greenage, Elita Promenade. Targeting Established Families.",
        icon: "ph-buildings",
        items: ["South Bangalore", "Kanakapura Road", "Bommanahalli"],
      },
      {
        title: "Digital Lift & Lobby Displays",
        description:
          "32\" & 24\" Screens in high-dwell areas like Adarsh Palm Retreat and Prestige Falcon City.",
        icon: "ph-monitor",
        items: ["High Dwell Time", "Unmissable Viewership", "Repeated Exposure"],
      },
      {
        title: "Puravankara & Century Corridors",
        description:
          "Century Corbel, Purva Midtown, Sobha City. Targeting Premium Buyers in North & Central Bangalore.",
        icon: "ph-buildings",
        items: ["North Bangalore", "Sahakar Nagar", "Yelahanka"],
      },
    ],
    gallery: {
      title: "Society Branding Network",
      subtitle:
        "Strategically map your brand inside the most affluent residential corridors, ensuring zero wastage.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2670&auto=format&fit=crop",
          alt: "Residential Society",
        },
        {
          src: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2670&auto=format&fit=crop",
          alt: "Apartment Complex",
        },
        {
          src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2670&auto=format&fit=crop",
          alt: "Lobby Branding",
        },
      ],
    },
    cta: {
      title: "Request Society Segmentation Data",
      description:
        "We map out household density and NCCS Class so you only spend your budget where your exact demographic lives.",
      buttonText: "Get Audience Mapping Plan",
      icon: "ph-door",
    },
  },
  {
    slug: "bulk-sms",
    title: "Bulk SMS Campaigns",
    tagline: "Ultra-Fast Delivery Infrastructure",
    pillar: "digital-telecom",
    pillarColor: "#1d90d9",
    pillarColorBg: "bg-[#1d90d9]",
    hero: {
      badge: "Ultra-Fast Delivery Infrastructure",
      heading: "Enterprise Grade",
      headingHighlight: "SMS Campaigns.",
      description:
        "Instantly reach demographics across India with DLT-compliant Promotional and Transactional SMS architectures featuring failover routing.",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-[#092e47] via-[#092e47]/90 to-[#2488c9]/40",
      stats: [
        { value: "10M+", label: "TPS Capacity" },
        { value: "DLT", label: "100% Compliant" },
        { value: "OTP", label: "Critical Delivery" },
      ],
    },
    features: [
      {
        title: "Promotional Blasts",
        description:
          "Targeted Pincode / Demographic messaging data pipelines to announce sales and new launches.",
        icon: "ph-trend-up",
        items: ["Demographic Targeting", "Direct URL Pushes", "Volume Capacity"],
      },
      {
        title: "Transactional & OTP",
        description:
          "Mission-critical high-priority routes for 2FA, OTPs, and Order updates ensuring zero delay.",
        icon: "ph-shield-check",
        items: ["High Priority Routing", "Order Updates", "2FA Security"],
      },
      {
        title: "DLT Registration Support",
        description:
          "We handle the complete TRAI/DLT registration processes including header and template approvals.",
        icon: "ph-file-text",
        items: ["TRAI Compliance", "Header Approval", "Template Whitelisting"],
      },
    ],
    gallery: {
      title: "Messaging Infrastructure",
      subtitle: "Enterprise-grade reliability for mission-critical communications.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
          alt: "SMS Routing",
        },
      ],
    },
    cta: {
      title: "Secure your Telecom Routes",
      description:
        "Partner with us for reliable telecom connectivity and scale your text communications.",
      buttonText: "Get API & Pricing Details",
      icon: "ph-chat-text",
    },
  },
  {
    slug: "whatsapp-marketing",
    title: "Official WhatsApp Business APIs",
    tagline: "Conversational Marketing Engine",
    pillar: "digital-telecom",
    pillarColor: "#1d90d9",
    pillarColorBg: "bg-[#1d90d9]",
    hero: {
      badge: "Conversational Marketing Engine",
      heading: "Official WhatsApp",
      headingHighlight: "Business APIs.",
      description:
        "Shift from passive ads to active conversations. We deliver unmatched ROI with bulk rich-media broadcasting and Chatbots.",
      bgImage:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2574&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-[#075E54] via-[#075E54]/90 to-[#128C7E]/40",
      stats: [
        { value: "98%", label: "Open Rates" },
        { value: "Rich", label: "Media Support" },
        { value: "Bot", label: "Automated Workflows" },
      ],
    },
    features: [
      {
        title: "Promotional Broadcasts",
        description:
          "Send updates and catalogs directly to millions of opted-in users without risk of blocking.",
        icon: "ph-megaphone",
        items: ["Bulk Broadcasting", "Official API Routes", "Catalog Sharing"],
      },
      {
        title: "AI Chatbot Automation",
        description:
          "Qualify leads and handle support 24/7 with customized conversation flows integrated with CRM.",
        icon: "ph-robot",
        items: ["Lead Qualification", "24/7 Support", "CRM Integration"],
      },
      {
        title: "Rich Media Support",
        description:
          "Images, HD videos, interactive CTA buttons, and PDF catalogs drive high engagement.",
        icon: "ph-images",
        items: ["Video Ads", "Interactive CTA", "PDF Catalogs"],
      },
    ],
    gallery: {
      title: "WhatsApp Ad Examples",
      subtitle: "High-ROI conversational marketing via official channels.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2670&auto=format&fit=crop",
          alt: "WhatsApp Interface",
        },
      ],
    },
    cta: {
      title: "Get Green Tick Certified",
      description:
        "We assist with Official API onboarding, Whatsapp Business verification, and complete management.",
      buttonText: "Start Broadcasting Now",
      icon: "ph-whatsapp-logo",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export const homeServices = [
  {
    number: "01",
    title: "Transit Media Dominance",
    description:
      "Turn the city's daily commute into your moving billboard. We cover every inch of the urban landscape from hyper-local autos to cross-city bus networks.",
    color: "#ff6b63", // brand-coral
    tags: ["Cab / Ola / Uber", "Auto Advertising", "Bus & Metro Ads", "Full Car Wraps"],
    link: "/services/transit-media",
    linkText: "Explore Transit Campaigns",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop",
    imageAlt: "Bus advertising on city streets",
    stat: "54,000+ Vehicles Available",
    statIcon: "ph-arrow-up-right",
  },
  {
    number: "02",
    title: "Direct Digital & Telecom",
    description:
      "Reach your audience directly in their hands. Our highly targeted SMS, WhatsApp, and AI-driven voice campaigns guarantee immediate visibility and response.",
    color: "#2c6bff", // brand-blue
    tags: ["WhatsApp Marketing", "Bulk SMS & OBD Voice", "Cloud Telephony", "AI Chatbots"],
    link: "/services/digital-telecom",
    linkText: "Explore Digital & Telecom",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    imageAlt: "Mobile messaging communication",
    stat: "Mass Reach in Milliseconds",
    statIcon: "ph-paper-plane-tilt",
  },
  {
    number: "03",
    title: "Premium Out-of-Home",
    description:
      "Capture attention where it matters most. From captive cinema audiences to high-footfall tech parks and airports, our premium network commands attention.",
    color: "#ff8c42", // brand-orange
    tags: ["PVR / INOX Ads", "Airport Advertising", "Premium Hoardings", "Mall Exclusives"],
    link: "/services/premium-ooh",
    linkText: "Explore Premium OOH",
    image:
      "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
    imageAlt: "Large billboard advertising in modern city",
    stat: "Premium Cinema & City Placements",
    statIcon: "ph-film-strip",
  },
  {
    number: "04",
    title: "Performance Digital",
    description:
      "Bridge the gap between offline awareness and online conversion. We handle end-to-end digital funnels, ensuring your physical campaigns drive real digital ROI.",
    color: "#783e8a", // brand-purple (keep as is or sync if needed)
    tags: ["SEO / SEM Services", "Social Media Marketing", "Lead Generation", "Web Development"],
    link: "/services/digital-marketing",
    linkText: "Explore Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    imageAlt: "Digital marketing performance analytics",
    stat: "Data-Driven Campaign Tracking",
    statIcon: "ph-chart-line-up",
  },
];
