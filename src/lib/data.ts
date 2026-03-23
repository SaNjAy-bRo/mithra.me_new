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
    tagline: "High-Frequency Mobility Advertising",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Your Brand, Travelling Miles",
      heading: "Massive Mobility",
      headingHighlight: "Networks",
      description:
        "Dominate the urban landscape with high-impact branding across Cabs, Autos, Busses, Metro, and even In-flight networks. Capture undivided attention during every commute with our pan-India mobility fleet.",
      bgImage:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=2671&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "1600+", label: "Daily Flights" },
        { value: "360k+", label: "Metro Commuters" },
        { value: "Pan-India", label: "Fleet Reach" },
      ],
    },
    features: [
      {
        title: "Auto Rickshaw Branding",
        description:
          "High-visibility, low-cost branding that reaches every corner of residential and commercial neighborhoods. Ideal for hyper-local market penetration.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
        items: ["Rear Hoods", "Back Rest Ads", "Full Body Wraps"],
        href: "/services/auto-rickshaw-branding",
      },
      {
        title: "Metro Network Dominance",
        description:
          "Target 3.6 Lakh+ professional commuters daily across Bangalore's Purple and Green lines with high-dwell internal panels and station branding.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
        items: ["Interior Panels", "Train Wraps", "Mandatory Kannada Text"],
        href: "/services/metro-advertising",
      },
      {
        title: "Indigo In-flight Media",
        description:
          "Captive audience advertising via Asia's largest low-cost carrier. Reach premium flyers through seat-back trays, boarding passes, and inflight sampling.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
        items: ["Tray Tables", "Boarding Passes", "Hello 6E Magazine"],
        href: "/services/indigo-inflight-media",
      },
      {
        title: "Cab & Fleet Branding",
        description:
          "Full wraps and seatback branding on high-mileage Ola, Uber, and corporate fleets covering 100+ km daily for maximum frequency.",
        image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
        items: ["Ola/Uber Wraps", "Internal Screens", "Premium Tech Corridors"],
        href: "/services/cab-fleet-branding",
      },
      {
        title: "LED Mobile Billboards",
        description:
          "Dynamic digital vans positioned on premium transit routes. Perfect for evening activations and high-impact event launches.",
        image: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
        items: ["HD Video Ads", "GPS Tracking", "Event Routes"],
        href: "/services/led-advertising",
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
      title: "Scale Your Mobility Campaigns",
      description:
        "Connect with millions on the move. From the last mile into the clouds, Mithrah.Me executes your transit strategy with data-driven precision.",
      buttonText: "Get Transit Media Rates",
      icon: "ph-car-profile",
    },
    showcase: {
      title: "Detailed Media Outlook",
      description: "A deep dive into how our mobility formats capture attention across urban corridors.",
      items: [
        {
          title: "Auto Rickshaw Branding",
          subtitle: "Hyper-Local Penetration",
          description: "One of the most traditional yet effective ways to promote a brand in Bangalore. Autos navigate through narrow residential lanes where bigger billboards cannot reach.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
          uses: ["Rear Panel Branding", "Backrest Advertising", "Full Hood Wraps"],
          benefits: ["Reaches all age groups", "Low cost, high frequency", "Targets scattered audiences"],
        },
        {
          title: "Metro Advertising",
          subtitle: "Professional Reach",
          description: "Command the undivided attention of 3.6 Lakh+ daily commuters. Namma Metro offers a premium environment for brands seeking professional and HNI engagement.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
          uses: ["Interior Panel Displays", "Train Dangler Ads", "Side Wall Panels"],
          benefits: ["Captive professional audience", "High dwell times (15-30 mins)", "Elite brand association"],
        },
        {
          title: "In-flight Media (Indigo)",
          subtitle: "Sky-High Engagement",
          description: "Reach premium flyers across India's largest domestic network. Indigo's captive cabin environment ensures your message is seen by high-net-worth travellers.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
          uses: ["Tray Table Branding", "Boarding Pass Ads", "E-Ticket Banners", "Water Cup Branding"],
          benefits: ["100% Captive attention", "HNI Demographic reach", "Unmatched brand recall"],
        },
        {
          title: "Cab & Fleet Branding",
          subtitle: "Continuous Visibility",
          description: "Turning premium Ola and Uber fleets into moving billboards. These vehicles cover 100+ km daily, predominantly in high-income tech corridors and shopping hubs.",
          image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
          uses: ["Full Exterior Car Wraps", "In-cab Tablet Screens", "Branded Receipt Integration"],
          benefits: ["City-wide 24/7 mileage", "Primary focus in Tech Parks", "Massive reach in HNI zones"],
        },
        {
          title: "LED Mobile Billboards",
          subtitle: "Dynamic Impact",
          description: "Mobile digital billboards that can be positioned exactly where your audience is. Perfect for product launches, events, and evening city tours.",
          image: "/assets/images/services/transit/led-van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
          uses: ["Video Content Broadcast", "GPS-Targeted Route Planning", "Event Site Presence"],
          benefits: ["Dynamic & Interactive", "Unmissable brightness", "Scalable for grand launches"],
        },
      ],
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
        title: "Hoardings",
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
        href: "/services/digital-wall-printing",
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
        image: "/assets/images/services/premium-ooh/led-screen/outer ring road.jpeg",
        items: ["Drone Light Shows", "Aerial Banners", "Event Spectaculars"],
        href: "/services/drone-advertising",
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
    showcase: {
      title: "What is LED Van Marketing?",
      description: "A Moving Billboard That Comes to You. LED Van Marketing is a powerful mobile Out-of-Home (OOH) format where large, high-brightness LED screens are mounted on vans and driven through targeted routes — carrying your brand directly to the audience.",
      items: [
        {
          title: "Tata Ace — LED Van",
          subtitle: "6×8 ft LED Display",
          description: "Perfect for narrow lanes, local markets, and deeply residential areas. Delivers hyper-local neighbourhood-level reach.",
          image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM.jpeg",
          uses: [
            "Narrow residential lanes",
            "Local street markets",
            "High-density urban cores",
          ],
          benefits: [
            "25–50 km Daily Coverage",
            "Morning to Evening Operating Hours",
            "Unmatched Hyper-Local targeting",
          ],
        },
        {
          title: "Canter Van — LED Van",
          subtitle: "12×8 ft Wide-Format LED",
          description: "Ultra-bright wide-format LED panel built to command attention on main roads, events, commercial zones, and highways.",
          image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (1).jpeg",
          uses: [
            "Main arterial roads",
            "Highway junctions",
            "Mass event zones",
          ],
          benefits: [
            "25–50 km Daily Coverage",
            "Massive City-wide audience targeting",
            "Giant Screen Impact",
          ],
        },
      ],
    },
    features: [
      {
        title: "High-Brightness Outdoor LED",
        description: "Commercial-grade panels with high-nit ratings remain clearly visible in direct sunlight, ensuring crisp content from morning to evening.",
        image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (2).jpeg",
        items: ["Outdoor LED", "Glare-free", "Sunlight Visible"],
      },
      {
        title: "Route-Targeted Campaigns",
        description: "Routes are precisely mapped through specific pin codes, markets, schools, or hospitals for maximum relevant exposure.",
        image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (3).jpeg",
        items: ["GPS Tracked", "Pin code Mapping", "Catchment Focus"],
      },
      {
        title: "Audio + Visual Capability",
        description: "LED vans carry PA systems for jingles, voice announcements, and call-to-action audio — creating a complete sensory brand experience.",
        image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (4).jpeg",
        items: ["Brand Jingles", "Voice Announcements", "Multi-sensory"],
      },
      {
        title: "Dynamic Content in Real Time",
        description: "Videos, animations, offers, QR codes, and countdowns — all updatable remotely without stopping the van or reprinting.",
        image: "/images/LED Van/WhatsApp Image 2026-02-28 at 10.27.04 AM (5).jpeg",
        items: ["Live Updates", "Remote Upload", "Zero Printing Costs"],
      },
    ],
    useCases: {
      title: "Ideal Use Cases & Industries",
      subtitle: "Because your audience doesn't always come to you — your brand goes to them.",
      items: [
        {
          title: "Retail & Shop Launches",
          description: "Drive footfall to new store openings, grand sales, and seasonal offers by routing vans through nearby residential and commercial zones.",
          icon: "ph-storefront",
        },
        {
          title: "Healthcare & Hospitals",
          description: "Promote health camps, new departments, specialist doctors, and free check-up drives in targeted residential catchment areas.",
          icon: "ph-first-aid",
        },
        {
          title: "Education & Institutes",
          description: "Reach students and parents in specific zones during admission season — an LED van in the right street does more than any pamphlet.",
          icon: "ph-graduation-cap",
        },
        {
          title: "Real Estate Projects",
          description: "Showcase properties with LED visuals and QR codes near project sites and in target affluent residential localities.",
          icon: "ph-buildings",
        },
        {
          title: "Events & Festivals",
          description: "Build anticipation before concerts, exhibitions, temple festivals, or sporting events by routing the van through the target audience area.",
          icon: "ph-ticket",
        },
        {
          title: "Food, Retail & Franchise",
          description: "Announce new menu launches, delivery offers, and openings to hungry audiences in busy streets and food-loving neighbourhoods.",
          icon: "ph-fork-knife",
        },
      ],
    },
    process: {
      title: "How It Works — Campaign Process",
      subtitle: "End-to-End Execution for Flawless On-Road Campaigns",
      steps: [
        {
          number: "01",
          title: "Brief & Objectives",
          description: "Share your brand goals, target zones, preferred timings, and creative vision with the Mithrah.Me planning team.",
        },
        {
          number: "02",
          title: "Route Planning",
          description: "We map precision routes through your chosen pin codes, markets, and high-footfall areas for maximum daily coverage.",
        },
        {
          number: "03",
          title: "Content Creation",
          description: "Our designers build LED-ready visuals, animations, and audio assets that bring your brand to life on the road.",
        },
        {
          number: "04",
          title: "Campaign Execution",
          description: "Vans roll out morning to evening covering 25–50 km daily through agreed routes with trained operators onboard.",
        },
        {
          number: "05",
          title: "GPS Monitoring & Report",
          description: "Live GPS tracking ensures route adherence; you receive a post-campaign report with coverage maps and reach data.",
        },
      ],
    },
    comparison: {
      title: "LED Van vs Other Formats",
      subtitle: "Why an LED Van delivers higher impact and ROI.",
      columns: ["Feature", "LED Van", "Hoarding", "Social Media", "Print / Flyer"],
      features: [
        {
          name: "Mobility",
          options: [
            { label: "Moves city-wide daily", value: "High", highlight: true },
            { label: "Fixed forever", value: "Medium" },
            { label: "Digital reach only", value: "Low" },
            { label: "Delivery-limited", value: "Low" },
          ],
        },
        {
          name: "Screen Size",
          options: [
            { label: "Up to 12×8 ft LED", value: "High", highlight: true },
            { label: "Billboard (fixed)", value: "Medium" },
            { label: "Device screen", value: "Low" },
            { label: "A3/A4 max", value: "Low" },
          ],
        },
        {
          name: "Daily Coverage",
          options: [
            { label: "25–50 km per day", value: "High", highlight: true },
            { label: "Single location", value: "Low" },
            { label: "Algorithm-based", value: "Medium" },
            { label: "Distribution only", value: "Low" },
          ],
        },
        {
          name: "Audience Control",
          options: [
            { label: "Route-targeted", value: "High", highlight: true },
            { label: "Catchment-based", value: "Medium" },
            { label: "Interest-based", value: "Medium" },
            { label: "Uncontrolled", value: "Low" },
          ],
        },
        {
          name: "Brand Recall",
          options: [
            { label: "Very High (moving)", value: "High", highlight: true },
            { label: "Moderate", value: "Medium" },
            { label: "Low (scroll-past)", value: "Low" },
            { label: "Low", value: "Low" },
          ],
        },
        {
          name: "Audio Capable",
          options: [
            { label: "Sound + LED", value: "High", highlight: true },
            { label: "None", value: "Low" },
            { label: "Video sound", value: "Medium" },
            { label: "None", value: "Low" },
          ],
        },
      ],
    },
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
    slug: "digital-wall-printing",
    title: "Digital Wall Printing",
    tagline: "High-Resolution Outdoor Brand Presence",
    pillar: "premium-ooh",
    pillarColor: "#db9318",
    pillarColorBg: "bg-[#db9318]",
    hero: {
      badge: "Neighborhood-Level Brand Dominance",
      heading: "Digital Wall",
      headingHighlight: "Printing",
      description: "Turn neighborhood walls into powerful brand canvases with high-resolution, weather-resistant prints. Bold, beautiful, and long-lasting visibility for up to 3 years.",
      bgImage: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2574&auto=format&fit=crop",
      gradientOverlay: "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#db9318]/30",
      stats: [
        { value: "6x4 ft", label: "Ideal Size" },
        { value: "720+", label: "DPI Quality" },
        { value: "3 Yrs", label: "Durability" },
      ],
    },
    features: [
      {
        title: "Hyper-Local Reach",
        description: "Wall prints placed in targeted localities speak directly to residents—building trust and brand recall where it matters most.",
        image: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-03-07 at 11.20.34 AM (2).jpeg",
        items: ["Residential Colonies", "Busy Markets", "Catchment Zones"],
      },
      {
        title: "Unmissable Visibility",
        description: "A bold 6x4 ft print commands attention every time someone walks, drives, or cycles past—day and night, rain or shine.",
        image: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.14 PM.jpeg",
        items: ["High Contrast", "Visible from Distance", "24/7 Exposure"],
      },
      {
        title: "Zero Recurring Cost",
        description: "Unlike digital ads with monthly spends, one print lasts up to 3 years. No renewals, no algorithm—just pure, uninterrupted visibility.",
        image: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.16 PM (1).jpeg",
        items: ["One-time Investment", "Maximized ROI", "Lowest CPM"],
      },
      {
        title: "Weather-Resistant Quality",
        description: "UV-cured and solvent-based inks are tested to withstand rain, heat, and dust—maintaining vibrant color for years outdoors.",
        image: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.17 PM (1).jpeg",
        items: ["UV Shielded", "Rain Proof", "Solvent-based Inks"],
      },
    ],
    gallery: {
      title: "Digital Wall Execution Network",
      subtitle: "Strategically positioned assets across urban arteries and affluent residential corridors.",
      images: [
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-03-07 at 11.20.34 AM (2).jpeg", alt: "Wall Printing Execution" },
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.18 PM.jpeg", alt: "Wall Branding" },
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-03-07 at 11.20.33 AM.jpeg", alt: "High-Res Printing" },
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.20 PM (2).jpeg", alt: "Urban Wall Media" },
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.04.12 PM.jpeg", alt: "Neighborhood Branding" },
        { src: "/assets/images/services/premium-ooh/digital-wall/WhatsApp Image 2026-02-26 at 6.03.44 PM (2).jpeg", alt: "Commercial Wall Ad" },
      ]
    },
    cta: {
      title: "Ready to Make Every Wall Your Billboard?",
      description: "Let Mithrah.Me turn neighborhood walls into powerful brand canvases. Secure your target localities today.",
      buttonText: "Get Wall Printing Rates",
      icon: "ph-paint-brush",
    },
    process: {
      title: "The Mithrah.Me Process",
      subtitle: "From Brief to Wall — Professional execution at every stage.",
      steps: [
        {
          number: "01",
          title: "Brief & Objectives",
          description: "Share your brand goals, target localities, and creative assets with our team.",
        },
        {
          number: "02",
          title: "Wall Identification",
          description: "We scout and shortlist high-footfall, high-visibility surfaces in your target zones.",
        },
        {
          number: "03",
          title: "Design & Approval",
          description: "Our designers create a stunning 6x4 ft layout for your review and approval.",
        },
        {
          number: "04",
          title: "Printing & Lamination",
          description: "High-res outdoor printing with UV/solvent inks and protective lamination.",
        },
        {
          number: "05",
          title: "Installation & Report",
          description: "Professional installation with photographic proof and location tags.",
        },
      ],
    },
    comparison: {
      title: "Why Digital Wall Printing?",
      subtitle: "How it stacks up against traditional and digital formats.",
      columns: ["Feature", "Wall Print", "Hoarding", "Digital Ads"],
      features: [
        {
          name: "Visibility Hours",
          options: [
            { label: "24/7 Always Visible", value: "High", highlight: true },
            { label: "24/7 Static", value: "Medium" },
            { label: "During Ad Spend", value: "Low" },
          ],
        },
        {
          name: "Durability",
          options: [
            { label: "Up to 3 Years", value: "High", highlight: true },
            { label: "1-2 Years", value: "Medium" },
            { label: "Short-term", value: "Low" },
          ],
        },
        {
          name: "Brand Recall",
          options: [
            { label: "High (Daily)", value: "High", highlight: true },
            { label: "Moderate", value: "Medium" },
            { label: "Skip-prone", value: "Low" },
          ],
        },
        {
          name: "Cost Model",
          options: [
            { label: "One-time Print", value: "High", highlight: true },
            { label: "High Monthly", value: "Low" },
            { label: "Ongoing CPM", value: "Low" },
          ],
        },
      ],
    },
    useCases: {
      title: "Ideal Use Cases",
      subtitle: "Strategic wall placements for high-impact ROI across diverse industries.",
      items: [
        {
          title: "Retail & Shop Fronts",
          description: "Print on shop shutters and adjacent walls to attract walk-in customers.",
          icon: "ph-storefront",
        },
        {
          title: "Healthcare & Clinics",
          description: "Promote doctors and health camps near hospitals and residential lanes.",
          icon: "ph-first-aid",
        },
        {
          title: "Education & Coaching",
          description: "Reach parents and students in key school zones during admission season.",
          icon: "ph-graduation-cap",
        },
        {
          title: "Real Estate & Housing",
          description: "Display project highlights on boundary walls near project sites.",
          icon: "ph-buildings",
        },
        {
          title: "Restaurants & Food",
          description: "Put your menu highlights in front of hungry eyes near busy streets.",
          icon: "ph-fork-knife",
        },
        {
          title: "Events & Launches",
          description: "Create pre-event buzz near venues and high-footfall intersections.",
          icon: "ph-ticket",
        },
      ],
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
  {
    slug: "drone-advertising",
    title: "Drone Advertising",
    tagline: "Unmatched Sky-High Visibility",
    pillar: "premium-ooh",
    pillarColor: "#db9318",
    pillarColorBg: "bg-[#db9318]",
    hero: {
      badge: "Sky-High Brand Visibility",
      heading: "Drone",
      headingHighlight: "Advertising",
      description:
        "Capture the sky with massive ~150 sq ft aerial LED screens. Breathtaking, unmissable, and eco-friendly brand experiences for high-impact events and massive brand launches.",
      bgImage:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=2670&auto=format&fit=crop",
      gradientOverlay:
        "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-[#db9318]/30",
      stats: [
        { value: "150 Sq Ft", label: "Screen Size" },
        { value: "500m+", label: "Visibility Radius" },
        { value: "Zero", label: "Emissions" },
      ],
    },
    showcase: {
      title: "What is Drone Marketing?",
      description:
        "A New Era of Outdoor Advertising. Drone Marketing uses advanced unmanned aerial vehicles equipped with LED display screens, projection systems, or banner payloads to broadcast brand messages at public events, open spaces, and high-footfall locations.",
      items: [
        {
          title: "~150 Sq Ft Screen",
          subtitle: "Massive Airborne Display",
          description:
            "Visible from hundreds of metres away, ensuring your message dominates the local skyline and captures every eye in the crowd.",
          image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=2670&auto=format&fit=crop",
          uses: ["Sky-High Branding", "Logo Display", "Product Messaging"],
          benefits: ["Unmissable Scale", "Multi-Angle Visibility", "Day & Night Glow"],
        },
        {
          title: "15-20 Min Per Show",
          subtitle: "Captivated Audience",
          description:
            "Each show runs for 15 to 20 minutes — long enough to captivate the audience and create a lasting impact with storytelling choreography.",
          image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2670&auto=format&fit=crop",
          uses: ["Storytelling", "Brand Reveal", "Event Spectaculars"],
          benefits: ["Captive Emotion", "High Engagement", "Memorability"],
        },
        {
          title: "3+ Shows Daily",
          subtitle: "Repeated Exposure",
          description:
            "Minimum three shows per day ensure your audience sees your brand multiple times, boosting recall rates and reinforcing the message effectively.",
          image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2670&auto=format&fit=crop",
          uses: ["Frequency Play", "Retail Footfall", "Sustained Recall"],
          benefits: ["Message Reinforcement", "Maximized Reach", "Ongoing Excitement"],
        },
      ],
    },
    features: [
      {
        title: "Screen Size: ~150 Sq Ft",
        description:
          "An airborne screen measuring approximately 150 sq ft ensures your brand message is seen from every angle across the venue.",
        image: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?w=400&h=400&fit=crop",
        items: ["High Luminosity", "Multi-Angle", "Wide Aspect"],
      },
      {
        title: "500m+ Visibility Radius",
        description:
          "A massive audience reach within a half-kilometre radius, making it the most visible OOH format in the sky.",
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?w=400&h=400&fit=crop",
        items: ["Sky Dominance", "Crowd Targeting", "Zero Clutter"],
      },
      {
        title: "Ideal Timing: Dusk & Night",
        description:
          "Drone screens are most impactful after dusk when the screen luminosity stands out against the dark sky, creating a mesmerising visual spectacle.",
        image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&h=400&fit=crop",
        items: ["High Intensity", "Night Specatcle", "Mesmerising luminosity"],
      },
      {
        title: "Eco-Friendly Technology",
        description:
          "Fully electric drones produce zero emissions during operation, aligning your brand with sustainable and forward-thinking values.",
        image: "https://images.unsplash.com/photo-1473960104312-bf9e182f3ef2?w=400&h=400&fit=crop",
        items: ["Zero Emissions", "Silent Operation", "Sustainable OOH"],
      },
    ],
    useCases: {
      title: "Ideal Use Cases",
      subtitle: "Innovative sky-high branding for high-impact environments.",
      items: [
        {
          title: "Sports & IPL Events",
          description:
            "Brand your logo above the crowd during cricket, football, and sports events. Captivate tens of thousands at once.",
          icon: "ph-trophy",
        },
        {
          title: "Festivals & Fairs",
          description:
            "Diwali, New Year, trade fairs — drone shows add festive grandeur while putting your brand centre-stage in the sky.",
          icon: "ph-tent",
        },
        {
          title: "Mall & Retail Launches",
          description:
            "Draw massive footfall to grand openings and sale events with a sky spectacle visible from surrounding streets and towers.",
          icon: "ph-shopping-bag",
        },
        {
          title: "Residential Activations",
          description:
            "Reach entire residential zones and apartment clusters with evening drone shows — high recall in a trusted neighbourhood setting.",
          icon: "ph-house",
        },
        {
          title: "Education & Institution",
          description:
            "Colleges, university fests and campus events make ideal drone advertising grounds with a young, engaged audience.",
          icon: "ph-graduation-cap",
        },
        {
          title: "Airport & Expo Zones",
          description:
            "Capture business travellers and premium audiences near airports, convention centres and international exhibitions.",
          icon: "ph-airplane-tilt",
        },
      ],
    },
    process: {
      title: "How It Works — The Process",
      subtitle: "Professional execution and clearance at every flight stage.",
      steps: [
        {
          number: "01",
          title: "Brief & Campaign Planning",
          description:
            "Share your brand goals, target audience, event details and creative assets. Our team maps the show concept.",
        },
        {
          number: "02",
          title: "Content Design & Approval",
          description:
            "We design display content — logos, animations, product visuals — for your review and approval before the show.",
        },
        {
          number: "03",
          title: "Location Recce & DGCA Clearance",
          description:
            "Site survey and all required drone permissions are obtained. Safety is our top priority for every flight.",
        },
        {
          number: "04",
          title: "Show Execution",
          description:
            "Our trained pilots fly the drone show at your event — minimum 3 shows per day, 15–20 minutes each.",
        },
        {
          number: "05",
          title: "Post-Show Report",
          description:
            "Receive a detailed report with show footage, audience reach estimates and social media performance data.",
        },
      ],
    },
    comparison: {
      title: "Drone vs Traditional Advertising",
      subtitle: "Why Drone Advertising is the ultimate 'Live Wow' format.",
      columns: ["Feature", "Drone", "Hoarding / OOH", "TV / Digital"],
      features: [
        {
          name: "Audience Reach",
          options: [
            { label: "500m+ radius", value: "High", highlight: true },
            { label: "Fixed location only", value: "Medium" },
            { label: "Broad but passive", value: "Low" },
          ],
        },
        {
          name: "Screen Size",
          options: [
            { label: "~150 Sq Ft aerial", value: "High", highlight: true },
            { label: "Billboard size only", value: "Medium" },
            { label: "Device screen only", value: "Low" },
          ],
        },
        {
          name: "Engagement Level",
          options: [
            { label: "Very High (live wow)", value: "High", highlight: true },
            { label: "Moderate", value: "Medium" },
            { label: "Low (skip-prone)", value: "Low" },
          ],
        },
        {
          name: "Eco Impact",
          options: [
            { label: "Zero emissions", value: "High", highlight: true },
            { label: "Vinyl / material waste", value: "Low" },
            { label: "Energy intensive", value: "Medium" },
          ],
        },
        {
          name: "Brand Recall",
          options: [
            { label: "3× higher (aerial)", value: "High", highlight: true },
            { label: "Average", value: "Medium" },
            { label: "Varies widely", value: "Low" },
          ],
        },
        {
          name: "Uniqueness",
          options: [
            { label: "Exclusive sky space", value: "High", highlight: true },
            { label: "Cluttered landscape", value: "Low" },
            { label: "Ad fatigue", value: "Low" },
          ],
        },
        {
          name: "Repeat Exposure",
          options: [
            { label: "3+ shows / day", value: "High", highlight: true },
            { label: "24/7 static", value: "Medium" },
            { label: "Frequency buying", value: "Medium" },
          ],
        },
      ],
    },
    gallery: {
      title: "Drone Shows Gallery",
      subtitle: "Spectacular aerial brand experiences captured live.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&w=2670&auto=format&fit=crop",
          alt: "Drone Show 1",
        },
        {
          src: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2670&auto=format&fit=crop",
          alt: "Drone Show 2",
        },
        {
          src: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=2670&auto=format&fit=crop",
          alt: "Drone Show 3",
        },
      ],
    },
    cta: {
      title: "Ready for a Sky-High Launch?",
      description:
        "Partner with Mithrah.Me to own the sky. Contact us today for event-specific drone marketing plans.",
      buttonText: "Inquire Drone Pricing",
      icon: "ph-airplane-tilt",
    },
  },
  {
    slug: "auto-rickshaw-branding",
    title: "Auto Rickshaw Branding",
    tagline: "Hyper-Local Urban Penetration",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Traditional Yet Powerful",
      heading: "Auto Rickshaw",
      headingHighlight: "Branding",
      description:
        "Auto rickshaw branding is a high-impact, traditional way to promote your brand. Navigating through the narrowest residential and commercial lanes, it targets scattered audiences across every geographical corner of the city.",
      bgImage: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
      gradientOverlay: "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "Low Cost", label: "Per Impression" },
        { value: "Moving", label: "Visibility" },
        { value: "All Ages", label: "Reach" },
      ],
    },
    features: [
      {
        title: "Moving Visibility",
        description: "Your brand travels where the people are, ensuring constant exposure in high-footfall areas.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.08 AM.jpeg",
        items: ["Rear Panel", "Full Hood", "Inside Backrest"],
      },
      {
        title: "Hyper-Local Reach",
        description: "Autos penetrate deep into residential neighborhoods and local markets that larger billboards miss.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.09 AM.jpeg",
        items: ["Local Markets", "Tech Corridors", "Residential Lanes"],
      },
      {
        title: "Cost-Effective",
        description: "One of the most budget-friendly transit media options with high frequency of views.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg",
        items: ["Budget Friendly", "High Frequency", "Massive Reach"],
      },
    ],
    showcase: {
      title: "Our Mission & Vision",
      description: "Taking your brand to the last mile.",
      items: [
        {
          title: "Low Cost but Effective",
          subtitle: "Budget Visibility",
          description: "Ideal for brands seeking high ROI through massive frequency and neighborhood-level penetration.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg",
          uses: ["Retail Launches", "Local Services", "Mass Awareness"],
          benefits: ["Lowest CPL", "Unmissable Presence", "Constant Movement"],
        },
        {
          title: "Responsive Mode",
          subtitle: "Targeted Audience",
          description: "A mode of advertising that reaches all age groups and demographics effectively.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg",
          uses: ["Educational Institutes", "Real Estate", "Healthcare"],
          benefits: ["High Recall", "Daily Visibility", "Active Commute Catch"],
        },
      ],
    },
    gallery: {
      title: "Auto Branding Gallery",
      subtitle: "See our fleet in action across the city.",
      images: [
        { src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.07 AM.jpeg", alt: "Auto Branding 1" },
        { src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.08 AM.jpeg", alt: "Auto Branding 2" },
        { src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.09 AM.jpeg", alt: "Auto Branding 3" },
        { src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.10 AM.jpeg", alt: "Auto Branding 4" },
      ],
    },
    cta: {
      title: "Scale Your Local Presence",
      description: "Reach every street in the city with our expansive auto rickshaw network.",
      buttonText: "Request Auto Branding Rates",
      icon: "ph-car",
    },
  },
  {
    slug: "metro-advertising",
    title: "Metro Network Advertising",
    tagline: "High-Dwell Professional Audience",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Professional Reach",
      heading: "Bangalore Metro",
      headingHighlight: "Network",
      description:
        "Command the undivided attention of over 3.6 Lakh+ professional commuters daily. Namma Metro offers a premium, captive environment for brands seeking elite engagement.",
      bgImage: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
      gradientOverlay: "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "3.6L+", label: "Daily Ridership" },
        { value: "15-30m", label: "Dwell Time" },
        { value: "64+", label: "Stations" },
      ],
    },
    features: [
      {
        title: "Interior Panels",
        description: "High-dwell internal panels positioned at eye-level for commuters.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 10.37.11 AM.jpeg",
        items: ["8.5 in x 35 in Cards", "UV Printed", "Durable Material"],
      },
      {
        title: "Train Danglers",
        description: "Eye-catching double-sided hanging ads throughout the train corridor.",
        image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
        items: ["Double Sided", "Corridor Placement", "High Frequency"],
      },
    ],
    gallery: {
      title: "Metro Branding Gallery",
      subtitle: "Dominating the underground and elevated corridors of Bengaluru.",
      images: [
        { src: "/assets/images/services/transit/auto/WhatsApp Image 10.37.11 AM.jpeg", alt: "Metro Branding 1" },
        { src: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg", alt: "Metro Branding 2" },
      ],
    },
    process: {
      title: "Artwork Requirements",
      subtitle: "Adhering to BMRCL Guidelines",
      steps: [
        {
          number: "01",
          title: "BMRCL Approval",
          description: "All artwork must be approved by the BMRCL Authority before printing and installation.",
        },
        {
          number: "02",
          title: "Language Policy",
          description: "Mandatory requirement of 20-30% content in Kannada language for all display cards.",
        },
        {
          number: "03",
          title: "Production",
          description: "High-quality UV printing on approved display cards (8.5 in x 35 in) for maximum durability.",
        },
      ],
    },
    comparison: {
      title: "Bangalore Metro Facts",
      subtitle: "The lifeline of Bengaluru.",
      columns: ["Quick Facts", "Purple Line", "Green Line"],
      features: [
        {
          name: "Line Length",
          options: [
            { label: "Whitefield-KR Puram", value: "35 Stations" },
            { label: "North-South Corridor", value: "29 Stations" },
          ],
        },
        {
          name: "Ridership",
          options: [
            { label: "Approx Daily", value: "1.91 Lakhs", highlight: true },
            { label: "Approx Daily", value: "1.71 Lakhs" },
          ],
        },
        {
          name: "Estimated Cost",
          options: [
            { label: "Line Dev", value: "₹4,500 Cr", highlight: true },
            { label: "Line Dev", value: "₹2,100 Cr" },
          ],
        },
        {
          name: "Status",
          options: [
            { label: "Launch Date", value: "25 March" },
            { label: "Launch Date", value: "1 March" },
          ],
        },
      ],
    },
    showcase: {
      title: "Inside Metro Branding",
      description: "Captive audience marketing at scale.",
      items: [
        {
          title: "Interior Panels",
          subtitle: "Eye-Level Visibility",
          description: "Each train with 6 coaches provides 4 to 5 interior panels per coach, ensuring high-frequency viewing during the commute.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
          uses: ["Side Wall Panels", "Train Danglers", "Door Stickers"],
          benefits: ["Long dwell times", "Targeted reach", "Premium association"],
        },
        {
          title: "Train Stats",
          subtitle: "Network Coverage",
          description: "Total 4 Trains from KR Puram to Whitefield with a total of 28 display cards in each train.",
          image: "/assets/images/services/transit/auto/WhatsApp Image 2026-03-14 at 10.37.11 AM.jpeg",
          uses: ["Route Specific Ads", "Frequency Campaigns", "Mass Branding"],
          benefits: ["High recall", "Professional audience", "Elite exposure"],
        },
      ],
    },
    cta: {
      title: "Launch Your Metro Campaign",
      description: "Connect with the professional heartbeat of Bangalore. Get started with Namma Metro branding today.",
      buttonText: "Request Metro Rates",
      icon: "ph-train",
    },
  },
  {
    slug: "indigo-inflight-media",
    title: "Indigo Inflight Media",
    tagline: "Sky-High Brand Engagement",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Elite Audience",
      heading: "Inflight",
      headingHighlight: "Advertising",
      description:
        "Partner with Asia's largest low-cost carrier. With a 57.7% market share and 1600+ daily flights, Indigo offers an unmatched captive environment for premium brand experiences.",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=1200&h=800&fit=crop",
      gradientOverlay: "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "57.7%", label: "Market Share" },
        { value: "1600+", label: "Daily Flights" },
        { value: "300M+", label: "Customers" },
      ],
    },
    features: [
      {
        title: "Digital & Paper Media",
        description: "Engage passengers before they even board with targeted e-tickets, emailers, and boarding passes.",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop",
        items: ["E-Tickets", "Boarding Passes", "Emailers"],
      },
      {
        title: "In-Cabin Branding",
        description: "Zero distraction environment where your message stays with the passenger for the entire duration of the flight.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
        items: ["Tray Tables", "Inside Panels", "In-flight Magazine"],
      },
      {
        title: "Experiential Ad",
        description: "Tangible brand associations through sampling and branded utility items inside the cabin.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
        items: ["Sampling", "Water Cups", "Hot Beverage Glass"],
      },
    ],
    gallery: {
      title: "Inflight Media Gallery",
      subtitle: "Premium brand placements at 35,000 feet.",
      images: [
        { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop", alt: "Indigo Boarding Pass" },
        { src: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=800&h=600&fit=crop", alt: "Indigo Tray Table" },
      ],
    },
    showcase: {
      title: "Media Options Outlook",
      description: "A 360° approach to inflight advertising.",
      items: [
        {
          title: "Clickable Banners",
          subtitle: "Digital Interaction",
          description: "Reach flyers through interactive e-boarding passes and mobile notifications for immediate digital conversions.",
          image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=400&fit=crop",
          uses: ["Mobile App Ads", "E-Ticket Banners", "Email Campaigns"],
          benefits: ["Direct Clicks", "Measurable ROI", "High Engagement"],
        },
        {
          title: "In-Cabin Assets",
          subtitle: "Captive Attention",
          description: "Branded tray tables and Hello 6E magazine placements ensure 100% captive attention of HNI travellers.",
          image: "https://images.unsplash.com/photo-1436491865332-7a61a109c05d?w=400&h=400&fit=crop",
          uses: ["Tray Tables", "Magazine Ads", "Grab Handles"],
          benefits: ["Zero distractions", "Elite recall", "Premium reach"],
        },
      ],
    },
    useCases: {
      title: "About Indigo Flyway",
      subtitle: "Connecting 78 Indian & 26 International destinations.",
      items: [
        {
          title: "Unmatched Reach",
          description: "Connecting over 78 domestic destinations with a fleet of 304+ aircraft and 1600+ daily flights.",
          icon: "ph-airplane",
        },
        {
          title: "On-Time Performance",
          description: "A staggering 88.6% on-time performance rate, building trust with millions of travellers.",
          icon: "ph-clock",
        },
        {
          title: "International Scope",
          description: "Reach worldwide via codeshare partners like Turkish Airlines, KLM, Air France, Qantas, and more.",
          icon: "ph-globe",
        },
      ],
    },
    cta: {
      title: "Take Your Brand Sky-High",
      description: "Leverage Asia's largest low-cost carrier network to reach premium flyers across India and the globe.",
      buttonText: "Inquire Inflight Rates",
      icon: "ph-airplane-takeoff",
    },
  },
  {
    slug: "cab-fleet-branding",
    title: "Cab & Fleet Branding",
    tagline: "Continuous Urban Visibility",
    pillar: "transit",
    pillarColor: "#ff6b63",
    pillarColorBg: "bg-brand-coral",
    hero: {
      badge: "Moving Billboards",
      heading: "Cab & Fleet",
      headingHighlight: "Advertising",
      description:
        "Turning premium Ola, Uber, and corporate fleets into moving billboards. These vehicles cover 100+ km daily, predominantly in high-income tech corridors and shopping hubs.",
      bgImage: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
      gradientOverlay: "bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40",
      stats: [
        { value: "100+ km", label: "Daily Coverage" },
        { value: "24/7", label: "Visibility" },
        { value: "Ola/Uber", label: "Network" },
      ],
    },
    features: [
      {
        title: "Exterior Wraps",
        description: "Full or partial car wraps that command attention on the road, 24 hours a day.",
        image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.00 PM.jpeg",
        items: ["Side Wraps", "Full Body", "Window Stickers"],
      },
      {
        title: "In-Car Advertisement",
        description: "Target the passenger directly with high-dwell internal media options during their ride.",
        image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.17.58 PM.jpeg",
        items: ["Headrest Covers", "Seat Back Pockets", "Internal Screens"],
      },
      {
        title: "Tech Park Focus",
        description: "Strategic routing through premium IT hubs and commercial zones for HNI engagement.",
        image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.17.56 PM.jpeg",
        items: ["Electronic City", "Whitefield", "Manyata Tech Park"],
      },
    ],
    gallery: {
      title: "Cab Branding Gallery",
      subtitle: "Moving billboards across the city's tech hubs.",
      images: [
        { src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg", alt: "Cab Branding 1" },
        { src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.00 PM.jpeg", alt: "Cab Branding 2" },
        { src: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.17.58 PM.jpeg", alt: "Cab Branding 3" },
      ],
    },
    showcase: {
      title: "Recent Campaigns",
      description: "Delivering success across diverse industries.",
      items: [
        {
          title: "Consumer Electronics",
          subtitle: "Philips, HP, Reliance Digital",
          description: "High-impact frequency campaigns in tech corridors targeting IT professionals.",
          image: "/assets/images/services/transit/cab/WhatsApp Image 2026-03-07 at 1.18.02 PM.jpeg",
          uses: ["Product Launches", "Sale Announcements", "Brand Recall"],
          benefits: ["Niche targeting", "High tech-park reach", "Elite exposure"],
        },
        {
          title: "App-Based Services",
          subtitle: "Flipkart, Swiggy, Quick Ride",
          description: "Building massive trust and visibility for digital-first brands in urban centers.",
          image: "/assets/images/services/transit/cab/WhatsApp Image 1.17.58 PM.jpeg",
          uses: ["User Acquisition", "New Feature Launch", "Market Dominance"],
          benefits: ["Digital-Physical Sync", "Mass City reach", "Hyper-local catch"],
        },
        {
          title: "Banking & Finance",
          subtitle: "Bank of Baroda, IDFC, AU Bank",
          description: "Establishing brand authority and trust through premium transit presence.",
          image: "/assets/images/services/transit/cab/WhatsApp Image 1.17.56 PM.jpeg",
          uses: ["Trust Building", "Loan Offers", "Premium Services"],
          benefits: ["Steady visibility", "HNI demographic", "Reliable recall"],
        },
      ],
    },
    cta: {
      title: "Mobilize Your Brand",
      description: "Connect with commuters across the city's most affluent corridors with our premium cab network.",
      buttonText: "Request Cab Branding Rates",
      icon: "ph-taxi",
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
