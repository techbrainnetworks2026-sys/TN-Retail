import { 
  ShoppingCart, Database, Glasses, Users, LineChart, 
  Share2, Layers, Radio, Smartphone, Shirt, 
  GraduationCap, Truck, PackageCheck, Gift, MonitorPlay, 
  ClipboardList, MessageSquareText, ThumbsUp, DollarSign, Leaf 
} from 'lucide-react';

export const productsList = [
  { 
    id: "e-commerce-platforms",
    title: "E-commerce Platforms with Personalization", 
    icon: ShoppingCart, 
    // color: "#FACC15",
    relatedSentence: "Empowering retailers with hyper-personalized shopping experiences that drive conversions and build lasting brand loyalty.",
    advantages: [
      "Increases customer retention through tailored recommendations.",
      "Optimizes upselling and cross-selling dynamically.",
      "Delivers a seamless, frictionless checkout experience.",
      "Integrates cleanly with existing product catalogs."
    ],
    scope20Years: "Over the next two decades, e-commerce platforms will evolve into fully autonomous, AI-driven ecosystems. They will anticipate consumer needs before a search is even made, utilizing neural interfaces and immersive spatial web integration.",
    featureBenefits: [
      { feature: "AI Recommendation Engine", benefit: "Suggests products based on live user behavior, increasing average order value." },
      { feature: "Omnichannel Sync", benefit: "Ensures the shopping cart is identical whether the user is on mobile app or web." },
      { feature: "Real-time Personalization", benefit: "Adapts the UI/UX layout instantly to match the consumer's demographic and psychographic profile." }
    ]
  },
  { 
    id: "pos-inventory-management",
    title: "POS & Inventory Management Systems", 
    icon: Database, 
    color: "#EAB308",
    relatedSentence: "Unifying sales and stock data to eliminate out-of-stock scenarios and streamline the transaction process.",
    advantages: [
      "Drastically reduces inventory holding costs.",
      "Speeds up checkout times for better customer satisfaction.",
      "Provides granular visibility into stock levels across all locations.",
      "Minimizes human error in sales reconciliation."
    ],
    scope20Years: "Future POS systems will become invisible. Inventory will be managed by microscopic IoT sensors, and checkout will be handled seamlessly via advanced biometrics, replacing physical registers entirely.",
    featureBenefits: [
      { feature: "Cloud-based Syncing", benefit: "Access inventory data across global locations securely and instantly." },
      { feature: "Automated Reordering", benefit: "Automatically drafts purchase orders when stock hits optimal threshold limits." },
      { feature: "Mobile POS Capable", benefit: "Allows staff to ring up customers anywhere on the floor." }
    ]
  },
  { 
    id: "ar-shopping-apps",
    title: "Augmented Reality Shopping Applications", 
    icon: Glasses, 
    color: "#FDE047",
    relatedSentence: "Bridging the gap between the physical and digital, allowing customers to 'try before they buy' directly from their devices.",
    advantages: [
      "Substantially reduces return rates of goods.",
      "Enhances brand engagement and time spent on app.",
      "Boosts buyer confidence for big-ticket items.",
      "Provides a competitive, futuristic retail edge."
    ],
    scope20Years: "AR applications will transition into mixed-reality wearable tech ecosystems, rendering physical showrooms completely digital. Consumers will experience tactile feedback of fabrics and materials digitally.",
    featureBenefits: [
      { feature: "1:1 Scale Rendering", benefit: "Visualizes exactly how furniture or clothing will look in reality." },
      { feature: "Real-time Lighting Adaptation", benefit: "Digital items blend perfectly with the room's physical lighting conditions." },
      { feature: "Social Sharing Hooks", benefit: "Users can share their AR experiences, driving organic marketing." }
    ]
  },
  { 
    id: "crm-systems-retail",
    title: "CRM Systems for Retail", 
    icon: Users, 
    color: "#F59E0B",
    relatedSentence: "Centralizing customer interactions to forge deeper, data-driven relationships and targeted marketing campaigns.",
    advantages: [
      "Provides a 360-degree view of the customer journey.",
      "Enables highly targeted segmentation for marketing.",
      "Improves customer service response accuracy.",
      "Automates follow-ups and engagement loops."
    ],
    scope20Years: "CRMs will evolve into autonomous empathy engines, preemptively understanding consumer emotional states to deliver perfectly timed support and marketing, fully removing manual data entry.",
    featureBenefits: [
      { feature: "Unified Inbox", benefit: "Consolidates emails, social DMs, and chat into one agent view." },
      { feature: "Predictive Churn Analysis", benefit: "Flags customers likely to leave before they actually do." },
      { feature: "Automated Workflows", benefit: "Triggers campaigns based on exact behavioral milestones." }
    ]
  },
  { 
    id: "retail-analytics",
    title: "Retail Analytics & Predictive Merchandising", 
    icon: LineChart, 
    color: "#FBBF24",
    relatedSentence: "Turning raw sales data into actionable, predictive foresight for optimized supply and demand orchestration.",
    advantages: [
      "Identifies hidden trends in purchasing behavior.",
      "Reduces markdowns via precise inventory forecasting.",
      "Optimizes product placement within physical stores.",
      "Maximizes profit margins on seasonal goods."
    ],
    scope20Years: "Predictive systems will achieve near perfectly precise foresight using quantum computing, capable of optimizing entire global supply chains seconds after a macro-economic event occurs.",
    featureBenefits: [
      { feature: "Heatmap Generation", benefit: "Visualizes high-traffic zones in both physical footfall and digital tracking." },
      { feature: "Demand Forecasting", benefit: "Uses machine learning against historical data and weather patterns." },
      { feature: "Competitor Price Tracking", benefit: "Monitors rival prices and suggests dynamic adjustments." }
    ]
  },
  { 
    id: "omnichannel-platforms",
    title: "Omnichannel Retail Management Platforms", 
    icon: Share2, 
    color: "#FACC15",
    relatedSentence: "Eradicating operational silos by unifying in-store, online, and social commerce into a single synchronized core.",
    advantages: [
      "Provides consistent brand experiences everywhere.",
      "Allows 'Buy Online, Pick Up In-Store' (BOPIS).",
      "Streamlines complicated return policies.",
      "Centralizes the operational dashboard."
    ],
    scope20Years: "The concept of 'channels' will dissolve. Consumers will exist in a continuous, ambient commerce environment where purchasing happens fluidly across VR, AR, mobile, and physical settings seamlessly.",
    featureBenefits: [
      { feature: "Unified Catalog", benefit: "Manage product details once, publish everywhere." },
      { feature: "Cross-channel Cart", benefit: "Items added on a watch can be paid for on a desktop." },
      { feature: "Universal Loyalty", benefit: "Points earned in-store apply seamlessly to digital purchases." }
    ]
  },
  { 
    id: "intelligent-shelf-systems",
    title: "Intelligent Shelf Management Systems", 
    icon: Layers, 
    color: "#EAB308",
    relatedSentence: "Transforming static retail displays into real-time interactive nodes that communicate dynamically with stockrooms and shoppers.",
    advantages: [
      "Instantly flags misplaced or out-of-stock items.",
      "Updates pricing digitally in seconds.",
      "Delivers localized, targeted ads at eye level.",
      "Reduces manual audit labor by store associates."
    ],
    scope20Years: "Shelves will become robotic micro-fulfillment centers, capable of physically moving products to the front and adapting structural layouts based on predictive daily footfall.",
    featureBenefits: [
      { feature: "Digital Price Tags", benefit: "Eliminates the cost and errors of printing physical labels." },
      { feature: "Weight Sensor Integration", benefit: "Detects exact quantity left by measuring shelf load." },
      { feature: "NFC Enabled", benefit: "Customers can tap their phones for instant nutritional/product info." }
    ]
  },
  { 
    id: "beacon-technology",
    title: "Beacon Technology for In-Store Engagement", 
    icon: Radio, 
    color: "#FDE047",
    relatedSentence: "Delivering hyper-localized, proximity-based notifications to shoppers the moment they step into a specific aisle.",
    advantages: [
      "Increases spur-of-the-moment purchases.",
      "Enhances in-store navigation for large layouts.",
      "Gathers precise foot traffic analytics.",
      "Provides a personalized VIP store experience."
    ],
    scope20Years: "Beacons will integrate with augmented contact lenses and neural nets, offering immersive, personalized, localized virtual guides that assist shoppers without requiring a handheld device.",
    featureBenefits: [
      { feature: "Proximity Alerts", benefit: "Pings user with a discount when standing near a specific brand." },
      { feature: "Wayfinding", benefit: "Guides customers directly to the item on their shopping list." },
      { feature: "Dwell Time Tracking", benefit: "Measures exactly how long people stop at specific displays." }
    ]
  },
  { 
    id: "mobile-shopping-payments",
    title: "Mobile Shopping & Payment Applications", 
    icon: Smartphone, 
    color: "#F59E0B",
    relatedSentence: "Putting the entire store and checkout process directly into the palm of the consumer's hand.",
    advantages: [
      "Eliminates checkout friction completely.",
      "Keeps the brand within the user's daily ecosystem.",
      "Facilities instant push-notification marketing.",
      "Supports advanced biometric security."
    ],
    scope20Years: "Mobile interfaces will give way to ambient transactional capabilities where identity and intent are enough to execute secure purchases instantaneously without any physical interface.",
    featureBenefits: [
      { feature: "Scan-and-Go checkout", benefit: "Customers act as their own cashiers, saving staff time." },
      { feature: "One-Tap Integrations", benefit: "Supports Apple Pay, Google Pay, and crypto seamlessly." },
      { feature: "In-app Exclusive Drops", benefit: "Creates urgency through mobile-only flash sales." }
    ]
  },
  { 
    id: "virtual-stylist",
    title: "AI-Driven Virtual Stylist Applications", 
    icon: Shirt, 
    color: "#FBBF24",
    relatedSentence: "Blending cutting-edge artificial intelligence with high fashion to curate bespoke wardrobes for every individual.",
    advantages: [
      "Dramatically increases multi-item basket sizes.",
      "Deepens brand trust through personalized advice.",
      "Reduces returns by ensuring aesthetic compatibility.",
      "Provides VIP styling scalability to all customers."
    ],
    scope20Years: "Virtual stylists will become generative AI companions who not only suggest outfits but actively design and 3D print custom clothing tailored perfectly to the user's changing biometric data.",
    featureBenefits: [
      { feature: "Style Quiz Engine", benefit: "Rapidly learns user preferences via an engaging visual onboarding." },
      { feature: "Wardrobe Integration", benefit: "Suggests new items that pair with things the user already owns." },
      { feature: "Size Aggregation", benefit: "Recommends the best size based on global brand charting differences." }
    ]
  },
  { 
    id: "retail-training-software",
    title: "Retail Employee Training Software", 
    icon: GraduationCap, 
    color: "#FACC15",
    relatedSentence: "Empowering frontline staff with gamified, micro-learning platforms to boost knowledge retention and lower onboarding times.",
    advantages: [
      "Standardizes training across all geographical branches.",
      "Cuts down onboarding duration by 50%.",
      "Improves customer service through deeper product knowledge.",
      "Tracks compliance and certification easily."
    ],
    scope20Years: "Training will utilize direct neural-link knowledge transfer and deep-immersion VR roleplay, enabling employees to master complex procedures and customer psychology in minutes.",
    featureBenefits: [
      { feature: "Gamified Modules", benefit: "Keeps employees engaged using points, badges, and leaderboards." },
      { feature: "Mobile-First Accessibility", benefit: "Staff can complete modules on their own phones during downtime." },
      { feature: "Manager Dashboard", benefit: "Provides analytics on which store branches are falling behind on training." }
    ]
  },
  { 
    id: "supply-chain-visibility",
    title: "Supply Chain Visibility Platforms", 
    icon: Truck, 
    color: "#EAB308",
    relatedSentence: "Illuminating every node of the logistics network, ensuring transparency from manufacturer to the final mile.",
    advantages: [
      "Mitigates risks associated with shipping delays.",
      "Provides customers with exact ETA tracking.",
      "Optimizes vendor and supplier relationships.",
      "Lowers overall logistics expenditures."
    ],
    scope20Years: "Supply chains will become fully self-healing networks. Quantum AI will autonomously reroute physical deliveries via hyperloop and drones the microsecond a weather or political delay is detected.",
    featureBenefits: [
      { feature: "Real-time Node Tracking", benefit: "See exactly which warehouse or ship holds the inventory." },
      { feature: "Supplier Audits", benefit: "Ensures ESG compliance and ethical sourcing standards are met." },
      { feature: "Exception Alerts", benefit: "Instantly notifies managers only when items deviate from the critical path." }
    ]
  },
  { 
    id: "order-fulfillment",
    title: "Order Fulfillment & Logistics Optimization", 
    icon: PackageCheck, 
    color: "#FDE047",
    relatedSentence: "Orchestrating warehouse robotics and routing software to ensure rapid, error-free final delivery.",
    advantages: [
      "Enhances same-day delivery capabilities.",
      "Reduces packaging waste and shipping costs.",
      "Minimizes manual picking errors.",
      "Scales flawlessly during peak holiday seasons."
    ],
    scope20Years: "Fulfillment will be decentralized to local neighborhood 3D-printing hubs and autonomous drone swarms, achieving consistent sub-30-minute delivery times regardless of location.",
    featureBenefits: [
      { feature: "Smart Route Planning", benefit: "Calculates the most carbon-efficient delivery path." },
      { feature: "Robotics Integration", benefit: "Interfaces easily with warehouse picking robots." },
      { feature: "Dynamic Binning", benefit: "Organizes warehouse layouts based on live product popularity." }
    ]
  },
  { 
    id: "loyalty-management",
    title: "Loyalty Program Management Solutions", 
    icon: Gift, 
    color: "#F59E0B",
    relatedSentence: "Designing rewarding ecosystems that transform occasional buyers into lifelong, highly engaged brand advocates.",
    advantages: [
      "Incentivizes repeat purchases organically.",
      "Builds an invaluable primary data reservoir.",
      "Curates a distinct, exclusive brand community.",
      "Reduces overall customer acquisition costs."
    ],
    scope20Years: "Loyalty networks will transition to blockchain-based universal tokens. Consumers will hold decentralized brand equity that can appreciate in value, turning shoppers into actual stakeholders.",
    featureBenefits: [
      { feature: "Tiered Rewards", benefit: "Encourages users to spend more to unlock VIP statuses." },
      { feature: "Referral Engine", benefit: "Automates the distribution of rewards for successful friend invites." },
      { feature: "Experiential Rewards", benefit: "Allows points to be spent on events, not just discounts." }
    ]
  },
  { 
    id: "digital-signage",
    title: "Digital Signage Platforms", 
    icon: MonitorPlay, 
    color: "#FBBF24",
    relatedSentence: "Replacing static billboard displays with dynamic, highly captivating digital canvases managed centrally.",
    advantages: [
      "Captures higher shopper attention than static prints.",
      "Allows instantaneous, network-wide campaign updates.",
      "Reduces long-term printing and shipping costs.",
      "Adapts ad content based on time of day."
    ],
    scope20Years: "Physical screens will become obsolete as localized holographic projection technology and AR overlays weave digital marketing seamlessly into the architectural fabric of physical spaces.",
    featureBenefits: [
      { feature: "Cloud CMS", benefit: "Push video updates to thousands of screens worldwide with one click." },
      { feature: "Contextual Triggers", benefit: "Changes ads based on current local weather (e.g., umbrella ads when raining)." },
      { feature: "Audience Analytics", benefit: "Uses built-in cameras to estimate viewer age and sentiment." }
    ]
  },
  { 
    id: "retail-merchandising",
    title: "Retail Merchandising & Assortment Planning", 
    icon: ClipboardList, 
    color: "#FACC15",
    relatedSentence: "Architecting the perfect product mix for maximum localized profitability and minimal waste.",
    advantages: [
      "Ensures stores only stock what the local demographic buys.",
      "Prevents heavy discounting of over-ordered stock.",
      "Maximizes shelf-space profit yield.",
      "Streamlines the buying process for enterprise purchasers."
    ],
    scope20Years: "Assortment planning will shift to hyper-local predictive generation. Stores will serve primarily as experience centers, with the inventory physically adapting daily via localized micro-manufacturing.",
    featureBenefits: [
      { feature: "Visual Planogram Tool", benefit: "Allows remote generation of 3D visual shelf layouts." },
      { feature: "Localized Clustering", benefit: "Group stores mathematically based on actual buying habits." },
      { feature: "Lifecycle Management", benefit: "Predicts the exact date a product will fall out of trend." }
    ]
  },
  { 
    id: "customer-feedback",
    title: "Customer Feedback & Survey Tools", 
    icon: MessageSquareText, 
    color: "#EAB308",
    relatedSentence: "Harvesting vital consumer sentiment to continuously refine products, services, and the overall retail experience.",
    advantages: [
      "Provides actionable alerts on negative store experiences.",
      "Tracks Net Promoter Score (NPS) dynamically.",
      "Crowdsources future product development ideas.",
      "Shows customers their opinions are deeply valued."
    ],
    scope20Years: "Feedback loops will become passive and continuous. Sentient AI will gauge consumer satisfaction via biometric telemetry securely, entirely removing the friction of manual surveying.",
    featureBenefits: [
      { feature: "Sentiment Tracking", benefit: "Uses NLP to automatically assign 'angry' or 'happy' tags to text." },
      { feature: "Intercept Surveys", benefit: "Triggers a quick poll the moment a user completes a purchase." },
      { feature: "Review Moderation", benefit: "Central command to reply to Google, Yelp, and native reviews." }
    ]
  },
  { 
    id: "social-commerce",
    title: "Social Commerce & Influencer Marketing", 
    icon: ThumbsUp, 
    color: "#FDE047",
    relatedSentence: "Leveraging the immense power of social networks to build community-driven, viral purchasing funnels.",
    advantages: [
      "Harnesses peer-to-peer authentic recommendations.",
      "Integrates the checkout squarely inside social feeds.",
      "Scales marketing rapidly through micro-influencers.",
      "Drives immense brand virality."
    ],
    scope20Years: "Social commerce will shift into decentralized creator ecosystems. Virtual influencers driven by AI will tailor bespoke social experiences to individual consumers instantly.",
    featureBenefits: [
      { feature: "Shoppable Posts", benefit: "Reduces friction by allowing 1-click buys without leaving the social app." },
      { feature: "Affiliate Tracking", benefit: "Automatically distributes kickbacks to influencers via trackable links." },
      { feature: "UGC Curation", benefit: "Easily collects and displays user-generated content on main product pages." }
    ]
  },
  { 
    id: "dynamic-pricing",
    title: "Dynamic Pricing Software", 
    icon: DollarSign, 
    color: "#F59E0B",
    relatedSentence: "Utilizing agile algorithms to adjust prices dynamically, maximizing margin against real-time market contexts.",
    advantages: [
      "Protects market share during intense price wars.",
      "Capitalizes instantly on sudden spikes in demand.",
      "Eliminates the heavy labor of manual price auditing.",
      "Increases overall annual yield significantly."
    ],
    scope20Years: "Pricing will shift to a fully personalized fluidity model, safely accounting for an individual consumer's real-time digital leverage, loyalty, and micro-economic status seamlessly.",
    featureBenefits: [
      { feature: "Rules-based Guardrails", benefit: "Ensures the algorithm never drops a price below cost margin." },
      { feature: "Competitor Scraping", benefit: "Reacts instantly when a rival site deploys a flash sale." },
      { feature: "A/B Price Testing", benefit: "Safely tests different price points to find the highest conversion elasticity." }
    ]
  },
  { 
    id: "sustainable-retail",
    title: "Sustainable Retail Practices Tracking", 
    icon: Leaf, 
    color: "#FBBF24",
    relatedSentence: "Monitoring and enforcing strict ESG standards to guarantee ethical supply chains and eco-conscious operations.",
    advantages: [
      "Aligns the brand with modern, eco-conscious consumer values.",
      "Ensures strict compliance with evolving environmental regulations.",
      "Identifies vast cost savings in energy and waste reduction.",
      "Strengthens the corporate image and investor relations."
    ],
    scope20Years: "Sustainability tracking will become totally absolute. Advanced closed-loop manufacturing tracking will establish complete carbon-negative lifecycles natively embedded into every transaction ledger.",
    featureBenefits: [
      { feature: "Carbon Footprint Calc", benefit: "Automatically assigns carbon scores to every unit manufactured." },
      { feature: "Supplier Auditing", benefit: "Verifies the ethical labor practices of tier-3 vendors globally." },
      { feature: "Raw Material Traceability", benefit: "Proves to the consumer exactly which farm/source generated the product." }
    ]
  }
];
