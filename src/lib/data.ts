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
    description: "Multiplex, airport, Digital Wall printing, and elite tech parks.",
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
      headingHighlight: "Fleet Branding",
      description:
        "Your moving billboard, supercharged. We couple wide-scale Cab, Auto, Bus, and LED Van physical branding to capture users exactly when they travel across the city.",
      bgImage:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "54K+", label: "Vehicles Ready" },
        { value: "Daily", label: "High Frequency" },
        { value: "City-Wide", label: "Continuous Mileage" },
      ],
    },
    features: [
      {
        title: "Cab / Ola / Uber",
        description:
          "High-visibility branding across Ola, Uber, and local cab fleets covering 100+ daily km per vehicle.",
        image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
        items: ["Full car wraps", "Backseat screens", "Branded receipts"],
      },
      {
        title: "Bus & Metro Ads",
        description:
          "Massive reach with full body wraps and internal panels across BMTC, Metro, and state-run transport networks.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg",
        items: ["Full wraps", "Inside panels", "Bus shelter ads"],
      },
      {
        title: "LED Van Advertising",
        description:
          "High-impact digital mobile billboards positioned on premium transit routes for maximum frequency and brand recall.",
        image: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
        items: ["HD Video Content", "GPS Route Planning", "Dynamic Scheduling"],
        href: "/services/led-advertising",
      },
      {
        title: "Auto Advertising",
        description:
          "Efficient last-mile visibility in high-density residential and commercial areas.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
        items: ["Rear hood branding", "Back rest ads", "Full hoods"],
      },
    ],
    gallery: {
      title: "Moving Billboards in Action",
      subtitle:
        "High-impact fleet branding that takes your message to almost every neighborhood in the city.",
      images: [
        {
          src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
          alt: "Auto Advertising",
        },
        {
          src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
          alt: "Cab Branding",
        },
        {
          src: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
          alt: "LED Van Advertising",
        },
        {
          src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.08 AM.jpeg",
          alt: "Auto Branding",
        },
        {
          src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.00 PM.jpeg",
          alt: "Cab Branding",
        },
        {
          src: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM (1).jpeg",
          alt: "LED Mobile Billboard",
        },
        {
          src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.09 AM.jpeg",
          alt: "Auto Media",
        },
        {
          src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.17.58 PM.jpeg",
          alt: "Ola Uber Ads",
        },
        {
          src: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM (2).jpeg",
          alt: "LED Van Execution",
        },
        {
          src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg",
          alt: "Bus Advertising",
        },
        {
          src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.17.56 PM.jpeg",
          alt: "Transit Media",
        },
        {
          src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
          alt: "Metro Branding",
        },
      ],
    },
    cta: {
      title: "Scale Your Mobility Campaign",
      description:
        "Combine the mass reach of OOH with the attribution of Digital via our Transit-Digital model. Let's create your fleet plan today.",
      buttonText: "Get Transit Media Rates",
      icon: "ph-car-profile",
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
        "Direct, data-driven outreach to billions of active devices. We provide enterprise-grade WhatsApp APIs, Bulk SMS, and Voice solutions to engage audiences instantly.",
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
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=400&h=400&fit=crop",
        items: ["Rich media broadcasts", "AI Chatbots", "Green Tick Verification"],
        href: "/services/whatsapp-marketing",
      },
      {
        title: "Bulk SMS Campaigns",
        description:
          "End-to-end DLT compliant promotional and transactional SMS routing with multi-operator failovers.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["DLT Compliance", "Transactional OTP", "Failover Routing"],
        href: "/services/bulk-sms",
      },
      {
        title: "OBD Voice & IVR",
        description:
          "Pre-recorded Outbound Voice Dialing and smart IVR menus to engage millions asynchronously in regional languages.",
        image: "https://images.unsplash.com/photo-1520923642038-b4259ace9439?w=400&h=400&fit=crop",
        items: ["Regional Voice", "Toll-free Provisioning", "Missed Call Marketing"],
      },
    ],
    gallery: {
      title: "Direct Engagement",
      subtitle: "Unmatched reliability across our enterprise-grade messaging networks.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
          alt: "Telecom Infrastructure",
        },
        {
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
          alt: "Broadcast Center",
        },
      ],
    },
    cta: {
      title: "Digitize Your Communications",
      description:
        "Build scalable direct-to-device marketing workflows that guarantee delivery and ROI. Partner with us for robust telecom integrations.",
      buttonText: "Get API & Telecom Pricing",
      icon: "ph-megaphone",
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
        title: "Multiplex Advertising",
        description:
          "Targeted exposure to captive audiences in premium cinema lobbies and on-screen across PVR & INOX networks.",
        image: "/assets/images/services/premium-ooh/led-screen/mantri&mallofasia.jpeg",
        items: ["On-screen spots", "Lobby displays", "Popcorn tub branding"],
        href: "/services/cinema-advertising",
      },
      {
        title: "Airport Branding",
        description:
          "Elite reach within departures, arrivals, and premium lounges for high-net-worth individuals.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
        items: ["Static panels", "Digital kiosks", "Trolley branding"],
      },
      {
        title: "Tech Park Activations",
        description:
          "Direct engagement at corporate gate entries and cafeteria zones for the IT workforce in Manyata, Bagmane, and more.",
        image: "/assets/images/services/premium-ooh/led-screen/outer ring road.jpeg",
        items: ["Entry branding", "Cafeteria ads", "Product sampling"],
      },
      {
        title: "Mall & Hoarding Media",
        description:
          "High-impact oversized billboards and digital mall networks in prime retail hotspots.",
        image: "/assets/images/services/premium-ooh/led-screen/mallofasia.jpeg",
        items: ["Backlit hoardings", "Mall standees", "Elevator branding"],
      },
      {
        title: "Digital Wall Printing",
        description:
          "Automated large-scale fade-resistant printing directly onto rural and urban structures for maximum local penetration.",
        image: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-03-07 at 11.20.34 AM (2).jpeg",
        items: ["Weather-proof ink", "High-res urban walls", "Rural reach"],
      },
      {
        title: "LED Ad Display",
        description:
          "High-definition digital screens at premium traffic junctions and commercial centers.",
        image: "/assets/images/services/premium-ooh/led-screen/mg road.jpeg",
        items: ["L-Shape screens", "Face-to-traffic", "Retail hubs"],
        href: "/services/led-advertising",
      },
      {
        title: "Drone Advertising",
        description:
          "High-spectacle drone light shows and aerial banner towing for massive impact over grand city events and festivals.",
        image: "/assets/images/services/premium-ooh/led-screen/outer ring road.jpeg", // Placeholder legacy feature
        items: ["Drone Light Shows", "Aerial Banners", "Event Spectaculars"],
      },
    ],
    gallery: {
      title: "Elite Media & Wall Printing",
      subtitle:
        "Strategically positioned assets across high-dwell time environments and urban arteries.",
      images: [
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.40 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.41 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.42 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.43 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.44 PM.jpeg",
          alt: "Digital Wall Printing",
        },
        {
          src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.12 PM.jpeg",
          alt: "Digital Wall Printing",
        },
      ],
    },
    cta: {
      title: "Secure Premium Placements",
      description:
        "Lock in elite positions across cinema, airport, and tech park networks before your competitors do.",
      buttonText: "Get Premium OOH Rates",
      icon: "ph-megaphone",
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
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["Meta Ads", "Google Search", "LinkedIn Lead Gen"],
      },
      {
        title: "SEO / SEM Services",
        description:
          "Owning page one. Technical audit, content clustering, deep backlink acquisition, and granular Search Engine Marketing.",
        image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=400&h=400&fit=crop",
        items: ["Technical SEO", "Content Clustering", "Backlink Strategy"],
      },
      {
        title: "Online Reputation Mgmt",
        description:
          "Protecting your digital narrative. Review suppression, proactive PR signaling, and sentiment analysis for enterprise brands.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["Review Management", "Sentiment Analysis", "Brand PR"],
      },
      {
        title: "Website Development",
        description:
          "Conversion-optimized landing pages and corporate sites built for lightning speed and SEO mechanics.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
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
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2670&auto=format&fit=crop",
          alt: "Performance Tracking",
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
          alt: "Data Analysis",
        },
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
          alt: "Team Strategy",
        },
      ],
    },
    cta: {
      title: "Ready to Dominate SERPs?",
      description:
        "Book a discovery call to audit your current digital stack and identify growth leakages and massive low-hanging opportunities.",
      buttonText: "Audit My Brand",
      icon: "ph-megaphone",
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
        image: "/assets/images/services/premium-ooh/led-screen/mg road.jpeg",
        items: ["High Traffic", "Retail Catchment", "Premium Branding"],
      },
      {
        title: "Koramangala & Indiranagar",
        description:
          "Sony World Junction, Bosch Junction, 100ft Road KFC Junction. Targeting Youth & F&B hubs.",
        image: "/assets/images/services/premium-ooh/led-screen/koramangala.jpeg",
        items: ["Youth Density", "Dining Hubs", "Dynamic Content"],
      },
      {
        title: "Outer Ring Road (ORR)",
        description:
          "Bellandur Flyover, Manyata Tech Park, Silk Board Junction. Massive displays for tech work force.",
        image: "/assets/images/services/premium-ooh/led-screen/outer ring road.jpeg",
        items: ["Tech Corridor", "B2B Reach", "High Dwell Time"],
      },
      {
        title: "Hebbal & Airport Road",
        description:
          "Mekhri Circle, Near Mall of Asia Sahakaranagara. Highway facing screens for HNIs & Travelers.",
        image: "/assets/images/services/premium-ooh/led-screen/hebbal.jpeg",
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
          src: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (8).jpeg",
          alt: "LED Van Execution",
        },
      ],
    },
    cta: {
      title: "Book Your LED Campaign",
      description:
        "High-impact mobile advertising that reaches your audience where they live, work, and play.",
      buttonText: "Get LED Van Rates",
      icon: "ph-megaphone",
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
        image: "/images/features/mantri&mallofasia.jpeg",
        items: ["Premium Catchment", "Icon Screens", "High Footfall"],
      },
      {
        title: "Phoenix, VR & Bhartiya",
        description:
          "PVR Phoenix Market City, PVR VR Mall, PVR Bhartiya Mall. IT Workforce & Youth hubs.",
        image: "/images/features/phoenix vr mall bangalore.jpeg",
        items: ["Tech Corridor", "Youth Hubs", "IT Audience"],
      },
      {
        title: "South Bangalore Network",
        description:
          "PVR Vega City (Platinum), PVR Forum Mall, Inox Garuda Mall (Gold). Premium catchments.",
        image: "/images/features/South Bangalore Network.jpeg",
        items: ["Platinum Screens", "Residential Hub", "Luxury Audience"],
      },
      {
        title: "Tier 2 Karnataka",
        description:
          "Multiplexes in Mysore, Dharwad, Gulbarga & Tumakuru. Capturing rapid growth markets.",
        image: "/images/features/tier 2 cities in banglore.jpeg",
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
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
        items: ["East & IT Hubs", "Whitefield", "Sarjapur Road"],
      },
      {
        title: "Mantri & Salarpuria Network",
        description:
          "Mantri Serenity, Salarpuria Sattva Greenage, Elita Promenade. Targeting Established Families.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
        items: ["South Bangalore", "Kanakapura Road", "Bommanahalli"],
      },
      {
        title: "Digital Lift & Lobby Displays",
        description:
          "32\" & 24\" Screens in high-dwell areas like Adarsh Palm Retreat and Prestige Falcon City.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
        items: ["High Dwell Time", "Unmissable Viewership", "Repeated Exposure"],
      },
      {
        title: "Puravankara & Century Corridors",
        description:
          "Century Corbel, Purva Midtown, Sobha City. Targeting Premium Buyers in North & Central Bangalore.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
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
          src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop",
          alt: "Apartment Lobby",
        },
        {
          src: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=2670&auto=format&fit=crop",
          alt: "Lobby Branding",
        },
        {
          src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2670&auto=format&fit=crop",
          alt: "Luxury Complex",
        },
        {
          src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2670&auto=format&fit=crop",
          alt: "Society Entrance",
        },
        {
          src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop",
          alt: "Community Branding",
        },
      ],
    },
    cta: {
      title: "Request Society Segmentation Data",
      description:
        "We map out household density and NCCS Class so you only spend your budget where your exact demographic lives.",
      buttonText: "Get Audience Mapping Plan",
      icon: "ph-megaphone",
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
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["Demographic Targeting", "Direct URL Pushes", "Volume Capacity"],
      },
      {
        title: "Transactional & OTP",
        description:
          "Mission-critical high-priority routes for 2FA, OTPs, and Order updates ensuring zero delay.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["High Priority Routing", "Order Updates", "2FA Security"],
      },
      {
        title: "DLT Registration Support",
        description:
          "We handle the complete TRAI/DLT registration processes including header and template approvals.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
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
        {
          src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
          alt: "Telecom Infrastructure",
        },
        {
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
          alt: "Broadcast Center",
        },
      ],
    },
    cta: {
      title: "Secure your Telecom Routes",
      description:
        "Partner with us for reliable telecom connectivity and scale your text communications.",
      buttonText: "Get API & Pricing Details",
      icon: "ph-megaphone",
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
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
        items: ["Bulk Broadcasting", "Official API Routes", "Catalog Sharing"],
      },
      {
        title: "AI Chatbot Automation",
        description:
          "Qualify leads and handle support 24/7 with customized conversation flows integrated with CRM.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
        items: ["Lead Qualification", "24/7 Support", "CRM Integration"],
      },
      {
        title: "Rich Media Support",
        description:
          "Images, HD videos, interactive CTA buttons, and PDF catalogs drive high engagement.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e3b275351?w=400&h=400&fit=crop",
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
        {
          src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=2670&auto=format&fit=crop",
          alt: "Digital Messaging",
        },
        {
          src: "https://images.unsplash.com/photo-1556656793-062ff98782ee?q=80&w=2670&auto=format&fit=crop",
          alt: "Mobile Marketing",
        },
      ],
    },
    cta: {
      title: "Get Green Tick Certified",
      description:
        "We assist with Official API onboarding, Whatsapp Business verification, and complete management.",
      buttonText: "Start Broadcasting Now",
      icon: "ph-megaphone",
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
    tags: ["Cab / Ola / Uber", "Auto Advertising", "Bus & Metro Ads", "LED Van Advertising"],
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
    tags: [
      "PVR / INOX Ads",
      "Drone Advertising",
      "LED Ad Display",
      "Digital Wall Printing",
      "Airport Branding",
    ],
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
