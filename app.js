const WHATSAPP_NUMBER = "917325917706"; // WhatsApp number without +
const DEFAULT_DURATION = "1 month";
const DEFAULT_DISCOUNT_RATE = 0.85; // 85% off by default (pay 15%)
const USD_TO_INR = 83;
const DURATION_MULTIPLIERS = {
  "1 month": 1,
  "3 months": 2.7,
  "6 months": 5.1,
  "1 year": 9.5,
  "lifetime access": 15,
};

const fallbackTools = [
  {
    name: "ChatGPT",
    logo: "",
    price: "Rs. 747",
    original: "Rs. 1660",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Claude",
    logo: "",
    price: "Rs. 913",
    original: "Rs. 1992",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Higg Field",
    logo: "",
    price: "Rs. 996",
    original: "Rs. 2407",
    durations: ["1 month", "6 months", "1 year"],
  },
  {
    name: "Midjourney",
    logo: "",
    price: "Rs. 1328",
    original: "Rs. 2490",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Perplexity",
    logo: "",
    price: "Rs. 664",
    original: "Rs. 1660",
    durations: ["1 month", "3 months", "1 year"],
  },
  {
    name: "Notion AI",
    logo: "",
    price: "Rs. 498",
    original: "Rs. 996",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Runway",
    logo: "",
    price: "Rs. 1162",
    original: "Rs. 2324",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Synthesia",
    logo: "",
    price: "Rs. 1494",
    original: "Rs. 3320",
    durations: ["1 month", "3 months", "1 year"],
  },
  {
    name: "Gamma",
    logo: "",
    price: "Rs. 581",
    original: "Rs. 1245",
    durations: ["1 month", "6 months", "1 year"],
  },
  {
    name: "Figma AI",
    logo: "",
    price: "Rs. 830",
    original: "Rs. 1660",
  },
  {
    name: "Jasper",
    logo: "",
    price: "Rs. 1079",
    original: "Rs. 3237",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Copy AI",
    logo: "",
    price: "Rs. 498",
    original: "Rs. 1992",
  },
  {
    name: "Descript",
    logo: "",
    price: "Rs. 747",
    original: "Rs. 1992",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Canva Pro",
    logo: "",
    price: "Rs. 498",
    original: "Rs. 1079",
    durations: ["1 month", "6 months", "1 year", "lifetime access"],
  },
  {
    name: "Luma AI",
    logo: "",
    price: "Rs. 747",
    original: "Rs. 1577",
  },
];
const fallbackProofs = [
  { label: "Proof 01", image: "" },
  { label: "Proof 02", image: "" },
  { label: "Proof 03", image: "" },
  { label: "Proof 04", image: "" },
  { label: "Proof 05", image: "" },
  { label: "Proof 06", image: "" },
];
const fallbackReviews = [
  {
    text: "Saved us weeks of tooling research. The discounts are real and the setup was instant.",
    name: "Ted Fluck",
    role: "IGTD Philips",
  },
  {
    text: "The SaaSBuddy access cut our budget while keeping our favorite AI stack.",
    name: "Volodymyr Dybenko",
    role: "CEO at Salee",
  },
  {
    text: "Quick support, huge savings, and professional onboarding. Highly recommended.",
    name: "Helge Hoffmann",
    role: "Creative Director",
  },
  {
    text:
      "We never realised the power of paid advertising until we found Conversion. It's doubled our revenue in just a few months.",
    name: "Amber Staynings",
    role: "CEO at Hurricane HL Ltd",
  },
  {
    text:
      "AcquisitionX's social media expertise helped me close a commercial real estate deal through LinkedIn and Facebook outreach.",
    name: "Syed Sikandar",
    role: "Sales Manager",
  },
  {
    text:
      "Suprava and her team at Ogilvy provided incredible copywriting support with attention to detail and creativity.",
    name: "Helge Hoffmann",
    role: "Creative Director",
  },
  {
    text:
      "Our Instagram and LinkedIn pages saw up to a 50,000 view increase, bringing incredible visibility to our brand.",
    name: "Maya Schmid",
    role: "Change Consultant",
  },
  {
    text: "The AI tool discounts were legit and the onboarding was smooth and fast.",
    name: "Maya Schmid",
    role: "Consultant",
  },
  {
    text: "Support is responsive and the process is transparent. Great value.",
    name: "Amber Staynings",
    role: "CEO at Hurricane HL Ltd",
  },
];
const fallbackContent = {
  nav: {
    logoText: "SaaS Buddy",
    contactLabel: "Contact us",
    links: [
      { label: "All Tools", href: "#tools" },
      { label: "Customer Reviews", href: "#proofs" },
    ],
  },
  announcement: {
    enabled: true,
    direction: "right",
    ctaLabel: "Join Now",
    ctaUrl: "https://chat.whatsapp.com/JSwKDdlLKCEBOIe2a7hLkA",
    items: [
      {
        icon: "clock",
        title: "Limited slots today",
        text: "Delivery in 1-6 hours",
      },
      {
        icon: "users",
        title: "Daily payment proofs",
        text: "Join our WhatsApp community",
      },
      {
        icon: "tag",
        title: "Flash deal",
        text: "Save 20% today only",
      },
      {
        icon: "shield",
        title: "Verified service",
        text: "Instant replacement guarantee",
      },
    ],
  },
  hero: {
    eyebrow: "Premium AI Tools Access",
    title: "Saas Buddy",
    subtitle: "Stop Overpaying for AI Tools.",
    subheadPrefix: "Get access to premium AI tools - up to",
    highlightText: "85% off",
    highlightStyle: "hl-10",
    highlightMotion: "highlight-motion-1",
    subheadSuffix: "on",
    brandInline: "only SaaSBuddy.",
    primaryCta: "Explore Tools",
    secondaryCta: "Contact Us",
  },
  heroCard: {
    title: "Why customer buy from us",
    metrics: [
      { value: "85%", label: "Avg. savings" },
      { value: "1000+", label: "Happy customers" },
      { value: "100%", label: "Refund guarantee" },
      { value: "0-6 Hours", label: "Instant delivery" },
    ],
  },
  featuredTools: [
    { name: "ChatGPT", logo: "" },
    { name: "Claude", logo: "" },
    { name: "Gemini", logo: "" },
    { name: "Midjourney", logo: "" },
    { name: "Perplexity", logo: "" },
    { name: "Notion AI", logo: "" },
    { name: "Figma", logo: "" },
    { name: "Canva", logo: "" },
    { name: "Runway", logo: "" },
    { name: "Synthesia", logo: "" },
    { name: "Jasper", logo: "" },
    { name: "Copy.ai", logo: "" },
    { name: "Descript", logo: "" },
    { name: "Grammarly", logo: "" },
    { name: "Adobe Firefly", logo: "" },
  ],
  alerts: [
    { title: "Offer ends in", value: "01:00:00", useTimer: true },
    { title: "Hurry!", value: "Only 4 slots left today", useTimer: false },
  ],
  headings: {
    reviewsTitle: "What our customer say",
    toolsLabel: "All Tools",
    toolsTitle: "Choose the right plan for every AI workflow.",
    viewAllLabel: "View All",
    toolsModalTitle: "All Tools",
    toolsSearchPlaceholder: "Search tools by name",
    proofsLabel: "Customer Reviews",
    proofsTitle: "Customer Reviews",
    faqLabel: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqIntro: "Common questions about our premium services",
    contactLabel: "Contact us",
    contactTitle: "Get premium access in hours, not days.",
    contactSubhead:
      "Tell us the tool and duration. We'll reply with pricing, delivery time, and next steps.",
    contactCta: "WhatsApp Us",
  },
  faq: [
    {
      question: "What if the account doesn't work?",
      answer:
        "We offer a 100% Replacement Guarantee. If you face any login issues or service problems, we'll provide an instant replacement. Simply message us on Instagram, Telegram, or WhatsApp and we'll resolve the issue within 24-48 hours.",
      icon: 0,
    },
    {
      question: "How long does delivery take exactly?",
      answer:
        "After payment confirmation, delivery typically takes 0 to 6 hours. Usually you'll receive your account within 2-3 hours. During peak hours (evening), there might be slight delays, but maximum delivery time is 6 hours. Instant delivery is available for priority orders.",
      icon: 1,
    },
    {
      question: "Are shared accounts safe? Will I get banned?",
      answer:
        "Shared accounts are 100% safe. We've served 1000+ customers without any major issues. We carefully manage the number of members per account. Your privacy is protected - no one gets access to your personal details. If you need complete privacy, private account options are available in premium plans.",
      icon: 2,
    },
    {
      question: "What is your refund policy?",
      answer:
        "Our policy is: No Refunds, Only Replacements. If an account stops working, we provide a replacement. Refunds are only issued in extreme cases when we cannot deliver the service. Please carefully select your plan, and if you have doubts, DM us on Instagram first.",
      icon: 3,
    },
    {
      question: "What's the difference between Private and Shared accounts?",
      answer:
        "Shared Account: Multiple users (3-10 members) share the same account. Budget-friendly but may have minor limitations (like simultaneous usage limits). Private Account: Exclusively for you - no sharing. Full control, zero downtime, no limitations. Best for agencies and heavy users.",
      icon: 4,
    },
    {
      question: "What's the process after payment?",
      answer:
        "Step 1: Make payment via UPI - x@upi. Step 2: Fill the Google Form with screenshot. Step 3: Send a DM on Instagram for confirmation. Step 4: Receive account details within 0-6 hours (login, password, instructions). Step 5: Login and enjoy premium access.",
      icon: 5,
    },
    {
      question: "How long will the account remain valid?",
      answer:
        "The validity matches your selected plan. For example: 1 Month = 30 days, 3 Months = 90 days, etc. If any issues arise during this period, you'll get a replacement, but validity doesn't extend. You'll receive a renewal reminder before expiry.",
      icon: 6,
    },
    {
      question: "Can I order multiple services together?",
      answer:
        "Absolutely! You can order multiple services in a single order. For example: ChatGPT + Netflix + Canva together. We also offer special discounts on bulk orders. DM us on Instagram to discuss.",
      icon: 7,
    },
    {
      question: "Is this legal? Is it safe?",
      answer:
        "We resell premium accounts - this is a grey market practice (not illegal, but not officially endorsed by service providers). Thousands of people use such services safely. We provide responsible service with a replacement guarantee. Your payment is secure via UPI.",
      icon: 8,
    },
  ],
  contactPoints: [
    "Fast replies on WhatsApp",
    "Clear pricing, no surprises",
    "Delivery within 0-6 hours",
  ],
  popup: {
    title: "Wait! This Offer Ends When You Leave",
    subtitlePrefix: "Claim your",
    subtitleStrong: "5% discount",
    subtitleSuffix: "now - limited claims today.",
    badge: "SPECIAL OFFER",
    discountNumber: "5%",
    discountText: "OFF",
    description: "On Your First Order",
    codeLabel: "Use Code:",
    codeValue: "WELCOME5",
    benefits: [
      "Instant Delivery in 0-6 Hours",
      "100% Working Guarantee",
      "24/7 Customer Support",
    ],
    claimLabel: "Claim My Discount",
    declineLabel: "No thanks, I'll pay full price",
    urgency: "This offer closes when you exit this page.",
  },
  whatsapp: {
    navMessage: "Hey *Saas Buddy*,\nI want premium AI tools access.\nPlease share pricing and steps.",
    popupMessage: "Hey *Saas Buddy*,\nI want an extra 5% discount.\nPlease share the offer details.",
    toolMessageTemplate:
      "Hey *Saas Buddy*,\nI want the *{tool}* tool.\nDuration: *{duration}*\nPlease share pricing and next steps.",
  },
  seo: {
    title: "SaaS Buddy",
    description:
      "Get premium AI tools access with up to 85% off on SaaS Buddy. Fast delivery, trusted tools, and transparent pricing.",
    ogTitle: "SaaS Buddy - Premium AI Tools Access",
    ogDescription: "Stop overpaying for AI tools. Unlock premium access with up to 85% off on SaaS Buddy.",
    twitterTitle: "SaaS Buddy - Premium AI Tools Access",
    twitterDescription:
      "Stop overpaying for AI tools. Unlock premium access with up to 85% off on SaaS Buddy.",
  },
  theme: {
    accent1: "#3f7cff",
    accent2: "#5bd2ff",
    accent3: "#8a6bff",
    highlight1: "#ffffff",
    highlight2: "#6dd6ff",
    highlight3: "#ffffff",
    glowColor: "rgba(91, 210, 255, 0.25)",
    bgRadial1: "rgba(63, 124, 255, 0.18)",
    bgRadial2: "rgba(91, 210, 255, 0.18)",
    bgLinear1: "#05070b",
    bgLinear2: "#0b1220",
    bgLinear3: "#04060a",
  },
  animations: {
    featured: "1",
    proofs: "1",
    reviews: "1",
  },
};

let tools = [...fallbackTools];
let proofs = [...fallbackProofs];
let reviews = [...fallbackReviews];
let proofsDirection = "left";
let content = { ...fallbackContent };

const root = document.documentElement;
const toolsGrid = document.getElementById("toolsGrid");
const toolsGridModal = document.getElementById("toolsGridModal");
const viewAllBtn = document.getElementById("viewAllBtn");
const toolsModal = document.getElementById("toolsModal");
const toolsModalClose = document.getElementById("toolsModalClose");
const toolsModalBody = document.getElementById("toolsModalBody");
const searchWrap = document.getElementById("toolsSearch");
const searchInput = document.getElementById("toolsSearchInput");
const searchStatus = document.getElementById("toolsSearchStatus");
const proofsTrack = document.getElementById("proofsTrack");
const proofsTrackClone = document.getElementById("proofsTrackClone");
const proofsMarquee = document.querySelector(".proofs-marquee");
const featuredMarquee = document.querySelector(".marquee");
const reviewsGrid = document.getElementById("reviewsGrid");
const reviewStackA = document.getElementById("reviewStackA");
const reviewStackB = document.getElementById("reviewStackB");
const reviewStackC = document.getElementById("reviewStackC");
const proofsInner = document.querySelector(".proofs-inner");
const navLogo = document.getElementById("navLogo");
const navLinks = document.getElementById("navLinks");
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroSubheadPrefix = document.getElementById("heroSubheadPrefix");
const heroHighlight = document.getElementById("heroHighlight");
const heroSubheadSuffix = document.getElementById("heroSubheadSuffix");
const heroBrandInline = document.getElementById("heroBrandInline");
const heroPrimaryCta = document.getElementById("heroPrimaryCta");
const heroSecondaryCta = document.getElementById("heroSecondaryCta");
const heroCardTitle = document.getElementById("heroCardTitle");
const heroMetrics = document.getElementById("heroMetrics");
const featuredTrack = document.getElementById("featuredTrack");
const featuredTrackClone = document.getElementById("featuredTrackClone");
const alertTitle1 = document.getElementById("alertTitle1");
const alertTitle2 = document.getElementById("alertTitle2");
const alertValue2 = document.getElementById("alertValue2");
const announcementBanner = document.getElementById("announcementBanner");
const announcementInner = document.getElementById("announcementInner");
const announcementTrack = document.getElementById("announcementTrack");
const announcementTrackClone = document.getElementById("announcementTrackClone");
const announcementCta = document.getElementById("announcementCta");
const reviewsTitle = document.getElementById("reviewsTitle");
const toolsLabel = document.getElementById("toolsLabel");
const toolsTitle = document.getElementById("toolsTitle");
const toolsModalTitle = document.getElementById("toolsModalTitle");
const proofsLabel = document.getElementById("proofsLabel");
const proofsTitle = document.getElementById("proofsTitle");
const faqLabel = document.getElementById("faqLabel");
const faqTitle = document.getElementById("faqTitle");
const faqIntro = document.getElementById("faqIntro");
const faqGrid = document.getElementById("faqGrid");
const contactLabel = document.getElementById("contactLabel");
const contactTitle = document.getElementById("contactTitle");
const contactSubhead = document.getElementById("contactSubhead");
const contactPoints = document.getElementById("contactPoints");
const contactCta = document.getElementById("contactCta");
const popupTitle = document.getElementById("popupTitle");
const popupSubtitle = document.getElementById("popupSubtitle");
const popupBadge = document.getElementById("popupBadge");
const popupDiscountNumber = document.getElementById("popupDiscountNumber");
const popupDiscountText = document.getElementById("popupDiscountText");
const popupDescription = document.getElementById("popupDescription");
const popupCodeLabel = document.getElementById("popupCodeLabel");
const popupCodeValue = document.getElementById("popupCodeValue");
const popupBenefits = document.getElementById("popupBenefits");
const popupClaim = document.getElementById("popupClaim");
const popupDecline = document.getElementById("popupDecline");
const popupUrgency = document.getElementById("popupUrgency");
const nav = document.querySelector(".nav");
const exitPopup = document.getElementById("exitPopup");
const exitPopupClose = exitPopup ? exitPopup.querySelector(".exit-popup-close") : null;
const exitPopupClaim = exitPopup ? exitPopup.querySelector(".claim-button") : null;
const exitPopupDecline = exitPopup ? exitPopup.querySelector(".decline-button") : null;
const mobileQuery = window.matchMedia("(max-width: 760px)");
const SCROLL_THRESHOLD = 12;
let alertTimerEnabled = true;
let offerTimerInterval = null;

let expanded = false;
let query = "";
let previousActiveElement = null;

const getInitialCount = () => (mobileQuery.matches ? 6 : 9);

const createLogoMarkup = (tool) => {
  if (tool.logo) {
    return `<img src="${tool.logo}" alt="${tool.name} logo" loading="lazy" decoding="async" />`;
  }
  const initials = tool.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
  return `<span>${initials}</span>`;
};

const detectCurrency = (value) => {
  if (typeof value !== "string") return "INR";
  const lower = value.toLowerCase();
  if (lower.includes("$")) return "USD";
  if (lower.includes("rs") || lower.includes("inr")) return "INR";
  return "INR";
};

const parseMoney = (value) => {
  if (typeof value === "number") return value;
  const parsed = parseFloat(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const normalizeToINR = (value) => {
  const currency = detectCurrency(value);
  const amount = parseMoney(value);
  if (currency === "USD") return amount * USD_TO_INR;
  return amount;
};

const formatMoney = (value) => {
  const safeValue = Number.isFinite(value) ? value : 0;
  return `Rs. ${Math.max(0, Math.round(safeValue))}`;
};

const mergeArray = (value, fallback) => (Array.isArray(value) ? value : fallback);

const normalizeFeaturedTools = (items) => {
  const list = Array.isArray(items) ? items : [];
  const normalized = list
    .map((item) => {
      if (typeof item === "string") {
        return { name: item, logo: "" };
      }
      return {
        name: item?.name || "",
        logo: item?.logo || "",
      };
    })
    .filter((item) => String(item?.name || "").trim());

  if (!normalized.length) return fallbackContent.featuredTools;

  const fallback = fallbackContent.featuredTools;
  if (normalized.length >= fallback.length) return normalized;

  const existing = new Set(normalized.map((item) => item.name.toLowerCase()));
  fallback.forEach((item) => {
    if (normalized.length >= fallback.length) return;
    const name = String(item?.name || "").trim();
    if (!name) return;
    const key = name.toLowerCase();
    if (existing.has(key)) return;
    normalized.push({ name, logo: item?.logo || "" });
    existing.add(key);
  });

  return normalized;
};

const normalizeNavLinks = (links) => {
  const cleaned = Array.isArray(links)
    ? links
        .map((link) => ({
          label: String(link?.label || "").trim(),
          href: String(link?.href || "").trim(),
        }))
        .filter((link) => link.label && link.href)
    : [];
  const fallback = fallbackContent.nav.links;

  const isTools = (link) => {
    const href = String(link?.href || "").trim().toLowerCase();
    const label = String(link?.label || "").trim().toLowerCase();
    return href === "#tools" || label === "all tools" || label === "tools";
  };

  const isReviews = (link) => {
    const href = String(link?.href || "").trim().toLowerCase();
    const label = String(link?.label || "").trim().toLowerCase();
    return href === "#proofs" || label.includes("review");
  };

  const allTools = cleaned.find(isTools) || fallback.find(isTools) || fallback[0];
  const reviews = cleaned.find(isReviews) || fallback.find(isReviews) || fallback[1];
  const rest = cleaned.filter((link) => !isTools(link) && !isReviews(link));

  return [allTools, ...rest, reviews].filter(Boolean);
};

const mergeContent = (incoming = {}) => ({
  nav: {
    logoText: incoming.nav?.logoText || fallbackContent.nav.logoText,
    contactLabel: incoming.nav?.contactLabel || fallbackContent.nav.contactLabel,
    links: normalizeNavLinks(incoming.nav?.links),
  },
  announcement: {
    enabled:
      typeof incoming.announcement?.enabled === "boolean"
        ? incoming.announcement.enabled
        : fallbackContent.announcement.enabled,
    direction:
      incoming.announcement?.direction === "left" || incoming.announcement?.direction === "right"
        ? incoming.announcement.direction
        : fallbackContent.announcement.direction,
    ctaLabel: incoming.announcement?.ctaLabel || fallbackContent.announcement.ctaLabel,
    ctaUrl: incoming.announcement?.ctaUrl || fallbackContent.announcement.ctaUrl,
    items: mergeArray(incoming.announcement?.items, fallbackContent.announcement.items),
  },
  hero: {
    eyebrow: incoming.hero?.eyebrow || fallbackContent.hero.eyebrow,
    title: incoming.hero?.title || fallbackContent.hero.title,
    subtitle: incoming.hero?.subtitle || fallbackContent.hero.subtitle,
    subheadPrefix: incoming.hero?.subheadPrefix || fallbackContent.hero.subheadPrefix,
    highlightText: incoming.hero?.highlightText || fallbackContent.hero.highlightText,
    highlightStyle: incoming.hero?.highlightStyle || fallbackContent.hero.highlightStyle,
    highlightMotion: incoming.hero?.highlightMotion || fallbackContent.hero.highlightMotion,
    subheadSuffix: incoming.hero?.subheadSuffix || fallbackContent.hero.subheadSuffix,
    brandInline: incoming.hero?.brandInline || fallbackContent.hero.brandInline,
    primaryCta: incoming.hero?.primaryCta || fallbackContent.hero.primaryCta,
    secondaryCta: incoming.hero?.secondaryCta || fallbackContent.hero.secondaryCta,
  },
  heroCard: {
    title: incoming.heroCard?.title || fallbackContent.heroCard.title,
    metrics: mergeArray(incoming.heroCard?.metrics, fallbackContent.heroCard.metrics),
  },
  featuredTools: normalizeFeaturedTools(incoming.featuredTools),
  alerts: mergeArray(incoming.alerts, fallbackContent.alerts),
  headings: {
    reviewsTitle: incoming.headings?.reviewsTitle || fallbackContent.headings.reviewsTitle,
    toolsLabel: incoming.headings?.toolsLabel || fallbackContent.headings.toolsLabel,
    toolsTitle: incoming.headings?.toolsTitle || fallbackContent.headings.toolsTitle,
    viewAllLabel: incoming.headings?.viewAllLabel || fallbackContent.headings.viewAllLabel,
    toolsModalTitle:
      incoming.headings?.toolsModalTitle || fallbackContent.headings.toolsModalTitle,
    toolsSearchPlaceholder:
      incoming.headings?.toolsSearchPlaceholder || fallbackContent.headings.toolsSearchPlaceholder,
    proofsLabel: incoming.headings?.proofsLabel || fallbackContent.headings.proofsLabel,
    proofsTitle: incoming.headings?.proofsTitle || fallbackContent.headings.proofsTitle,
    faqLabel: incoming.headings?.faqLabel || fallbackContent.headings.faqLabel,
    faqTitle: incoming.headings?.faqTitle || fallbackContent.headings.faqTitle,
    faqIntro: incoming.headings?.faqIntro || fallbackContent.headings.faqIntro,
    contactLabel: incoming.headings?.contactLabel || fallbackContent.headings.contactLabel,
    contactTitle: incoming.headings?.contactTitle || fallbackContent.headings.contactTitle,
    contactSubhead: incoming.headings?.contactSubhead || fallbackContent.headings.contactSubhead,
    contactCta: incoming.headings?.contactCta || fallbackContent.headings.contactCta,
  },
  faq: mergeArray(incoming.faq, fallbackContent.faq),
  contactPoints: mergeArray(incoming.contactPoints, fallbackContent.contactPoints),
  popup: {
    title: incoming.popup?.title || fallbackContent.popup.title,
    subtitlePrefix: incoming.popup?.subtitlePrefix || fallbackContent.popup.subtitlePrefix,
    subtitleStrong: incoming.popup?.subtitleStrong || fallbackContent.popup.subtitleStrong,
    subtitleSuffix: incoming.popup?.subtitleSuffix || fallbackContent.popup.subtitleSuffix,
    badge: incoming.popup?.badge || fallbackContent.popup.badge,
    discountNumber: incoming.popup?.discountNumber || fallbackContent.popup.discountNumber,
    discountText: incoming.popup?.discountText || fallbackContent.popup.discountText,
    description: incoming.popup?.description || fallbackContent.popup.description,
    codeLabel: incoming.popup?.codeLabel || fallbackContent.popup.codeLabel,
    codeValue: incoming.popup?.codeValue || fallbackContent.popup.codeValue,
    benefits: mergeArray(incoming.popup?.benefits, fallbackContent.popup.benefits),
    claimLabel: incoming.popup?.claimLabel || fallbackContent.popup.claimLabel,
    declineLabel: incoming.popup?.declineLabel || fallbackContent.popup.declineLabel,
    urgency: incoming.popup?.urgency || fallbackContent.popup.urgency,
  },
  whatsapp: {
    navMessage: incoming.whatsapp?.navMessage || fallbackContent.whatsapp.navMessage,
    popupMessage: incoming.whatsapp?.popupMessage || fallbackContent.whatsapp.popupMessage,
    toolMessageTemplate:
      incoming.whatsapp?.toolMessageTemplate || fallbackContent.whatsapp.toolMessageTemplate,
  },
  seo: {
    title: incoming.seo?.title || fallbackContent.seo.title,
    description: incoming.seo?.description || fallbackContent.seo.description,
    ogTitle: incoming.seo?.ogTitle || fallbackContent.seo.ogTitle,
    ogDescription: incoming.seo?.ogDescription || fallbackContent.seo.ogDescription,
    twitterTitle: incoming.seo?.twitterTitle || fallbackContent.seo.twitterTitle,
    twitterDescription: incoming.seo?.twitterDescription || fallbackContent.seo.twitterDescription,
  },
  theme: {
    accent1: incoming.theme?.accent1 || fallbackContent.theme.accent1,
    accent2: incoming.theme?.accent2 || fallbackContent.theme.accent2,
    accent3: incoming.theme?.accent3 || fallbackContent.theme.accent3,
    highlight1: incoming.theme?.highlight1 || fallbackContent.theme.highlight1,
    highlight2: incoming.theme?.highlight2 || fallbackContent.theme.highlight2,
    highlight3: incoming.theme?.highlight3 || fallbackContent.theme.highlight3,
    glowColor: incoming.theme?.glowColor || fallbackContent.theme.glowColor,
    bgRadial1: incoming.theme?.bgRadial1 || fallbackContent.theme.bgRadial1,
    bgRadial2: incoming.theme?.bgRadial2 || fallbackContent.theme.bgRadial2,
    bgLinear1: incoming.theme?.bgLinear1 || fallbackContent.theme.bgLinear1,
    bgLinear2: incoming.theme?.bgLinear2 || fallbackContent.theme.bgLinear2,
    bgLinear3: incoming.theme?.bgLinear3 || fallbackContent.theme.bgLinear3,
  },
  animations: {
    featured: incoming.animations?.featured || fallbackContent.animations.featured,
    proofs: incoming.animations?.proofs || fallbackContent.animations.proofs,
    reviews: incoming.animations?.reviews || fallbackContent.animations.reviews,
  },
});

const getPricing = (tool, duration) => {
  if (tool?.pricing && tool.pricing[duration]) {
    const override = tool.pricing[duration];
    return {
      our: formatMoney(normalizeToINR(override.our)),
      original: formatMoney(normalizeToINR(override.original)),
    };
  }
  const multiplier = duration && DURATION_MULTIPLIERS[duration] ? DURATION_MULTIPLIERS[duration] : 1;
  const baseOriginal = normalizeToINR(tool?.original);
  const baseOur = normalizeToINR(tool?.price);
  const rawDiscount =
    typeof tool?.discountRate === "number" ? tool.discountRate : DEFAULT_DISCOUNT_RATE;
  const discountRate = Math.min(Math.max(rawDiscount, 0), 0.95);

  let originalValue = baseOriginal > 0 ? baseOriginal * multiplier : 0;
  let ourValue = baseOur > 0 ? baseOur * multiplier : 0;

  if (!originalValue && ourValue) {
    originalValue = ourValue / (1 - discountRate);
  }
  if (!ourValue && originalValue) {
    ourValue = originalValue * (1 - discountRate);
  }

  return {
    our: formatMoney(ourValue),
    original: formatMoney(originalValue),
  };
};

const normalizeTool = (tool) => {
  if (!tool || typeof tool !== "object") return null;
  const name = String(tool.name || "").trim();
  if (!name) return null;
  const cleaned = { name };

  const logo = String(tool.logo || "").trim();
  if (logo) cleaned.logo = logo;
  const price = String(tool.price || "").trim();
  if (price) cleaned.price = price;
  const original = String(tool.original || "").trim();
  if (original) cleaned.original = original;
  const defaultDuration = String(tool.defaultDuration || "").trim();
  if (defaultDuration) cleaned.defaultDuration = defaultDuration;

  if (Array.isArray(tool.durations)) {
    const durations = tool.durations.map((item) => String(item).trim()).filter(Boolean);
    if (durations.length) cleaned.durations = durations;
  }

  if (tool.pricing && typeof tool.pricing === "object") {
    cleaned.pricing = tool.pricing;
  }
  if (typeof tool.discountRate === "number") {
    cleaned.discountRate = tool.discountRate;
  }

  return cleaned;
};

const updateCardPrice = (card, tool, duration) => {
  const priceEl = card.querySelector(".our-price");
  const originalEl = card.querySelector(".original-price");
  const pricing = getPricing(tool, duration);
  if (priceEl) priceEl.textContent = pricing.our;
  if (originalEl) originalEl.textContent = pricing.original;
};

const getSelectedDuration = (card) => {
  if (!card) return DEFAULT_DURATION;
  const labelText = card.querySelector(".duration-label")?.textContent?.trim();
  if (labelText) return labelText;
  const wrapper = card.querySelector(".duration-select");
  const datasetDuration = wrapper?.dataset.duration || card.dataset.duration;
  if (datasetDuration) return datasetDuration;
  return card.dataset.defaultDuration || DEFAULT_DURATION;
};

const buildContactUrl = (toolName, duration) => {
  const safeTool = String(toolName || "tool").trim().slice(0, 80);
  const safeDuration = String(duration || DEFAULT_DURATION).trim().slice(0, 40);
  const template =
    content.whatsapp?.toolMessageTemplate || fallbackContent.whatsapp.toolMessageTemplate;
  const message = template
    .replace(/\{tool\}/g, safeTool)
    .replace(/\{duration\}/g, safeDuration);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const buildPlainContactUrl = (message) => {
  const safeMessage = String(message || "").trim().slice(0, 240);
  const encoded = encodeURIComponent(safeMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const applyRemoteData = (data = {}) => {
  if (Array.isArray(data.tools)) {
    tools = data.tools.map(normalizeTool).filter(Boolean);
    if (!tools.length) {
      tools = [...fallbackTools];
    }
  } else {
    tools = [...fallbackTools];
  }

  if (Array.isArray(data.proofs)) {
    proofs = data.proofs
      .map((proof) => {
        if (typeof proof === "string") {
          return { label: proof, image: "" };
        }
        if (proof && typeof proof === "object") {
          return {
            label: String(proof.label || proof.text || "Proof").trim(),
            image: String(proof.image || "").trim(),
          };
        }
        return null;
      })
      .filter(Boolean);
  } else {
    proofs = [...fallbackProofs];
  }

  if (Array.isArray(data.textReviews)) {
    reviews = data.textReviews
      .map((review) => {
        if (!review || typeof review !== "object") return null;
        const text = String(review.text || "").trim();
        const name = String(review.name || "").trim();
        const role = String(review.role || "").trim();
        if (!text || !name) return null;
        return { text, name, role };
      })
      .filter(Boolean);
  } else {
    reviews = [...fallbackReviews];
  }

  proofsDirection = data.proofsDirection === "right" ? "right" : "left";
  content = mergeContent(data.content || {});
};

const subscribeToData = () => {
  if (!window.firebaseDb) {
    renderReviews();
    renderProofs();
    renderMainTools();
    return;
  }
  const docRef = window.firebaseDb.collection("siteData").doc("current");
  docRef.onSnapshot(
    (snapshot) => {
      const data = snapshot.exists ? snapshot.data() : {};
      applyRemoteData(data);
      applyContent();
      renderReviews();
      renderProofs();
      renderMainTools();
    },
    () => {
      applyContent();
      renderReviews();
      renderProofs();
      renderMainTools();
    }
  );
};

const renderReviews = () => {
  if (!reviewStackA || !reviewStackB || !reviewStackC) return;
  const stacks = [reviewStackA, reviewStackB, reviewStackC];
  stacks.forEach((stack) => {
    stack.innerHTML = "";
  });
  if (!reviews.length) return;

  const columns = [[], [], []];
  reviews.forEach((review, index) => {
    columns[index % 3].push(review);
  });

  const buildCard = (review, isClone = false) => {
    const article = document.createElement("article");
    article.className = "review-card";
    if (isClone) {
      article.setAttribute("aria-hidden", "true");
    }
    const text = document.createElement("p");
    text.textContent = review.text;
    const client = document.createElement("div");
    client.className = "client";
    const name = document.createElement("span");
    name.className = "client-name";
    name.textContent = review.name;
    const role = document.createElement("span");
    role.className = "client-role";
    role.textContent = review.role || "";
    client.appendChild(name);
    if (review.role) {
      client.appendChild(role);
    }
    article.appendChild(text);
    article.appendChild(client);
    return article;
  };

  columns.forEach((column, index) => {
    const stack = stacks[index];
    const fragment = document.createDocumentFragment();
    column.forEach((review) => fragment.appendChild(buildCard(review)));
    column.forEach((review) => fragment.appendChild(buildCard(review, true)));
    stack.appendChild(fragment);
  });

  stacks.forEach((stack) => {
    stack.style.animation = "none";
    stack.offsetHeight; // force reflow to restart animation
    stack.style.animation = "";
  });
};

const renderProofs = () => {
  if (!proofsTrack || !proofsTrackClone) return;
  const fragment = document.createDocumentFragment();
  proofs.forEach((proof, index) => {
    const card = document.createElement("div");
    card.className = "proof-card";
    const image = document.createElement("div");
    image.className = "proof-image";
    const label = proof?.label || `Proof ${String(index + 1).padStart(2, "0")}`;
    const imageUrl = proof?.image ? String(proof.image).trim() : "";
    if (imageUrl) {
      image.style.backgroundImage = `url("${imageUrl}")`;
      image.classList.add("has-image");
      image.setAttribute("role", "img");
      image.setAttribute("aria-label", label);
    } else {
      image.textContent = label;
    }
    card.appendChild(image);
    fragment.appendChild(card);
  });
  proofsTrack.innerHTML = "";
  proofsTrack.appendChild(fragment);
  proofsTrackClone.innerHTML = proofsTrack.innerHTML;
  if (proofsMarquee) {
    proofsMarquee.classList.toggle("reverse", proofsDirection === "right");
  }
  if (proofsInner) {
    proofsInner.style.animation = "none";
    proofsInner.offsetHeight;
    proofsInner.style.animation = "";
  }
};

const FAQ_ICONS = [
  `<svg viewBox="0 0 24 24">
      <path d="M3 12a9 9 0 0 1 15.5-6.5" />
      <path d="M21 12a9 9 0 0 1-15.5 6.5" />
      <path d="M18 3v4h-4" />
      <path d="M6 21v-4h4" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <circle cx="12" cy="14" r="2" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <path d="M7 7h10" />
      <path d="M7 7l3-3" />
      <path d="M7 7l3 3" />
      <path d="M17 17H7" />
      <path d="M17 17l-3-3" />
      <path d="M17 17l-3 3" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <path d="M12 3l7 3v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V6l7-3z" />
      <path d="M9 12h6" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4v2" />
      <path d="M12 18v2" />
      <path d="M4 12h2" />
      <path d="M18 12h2" />
    </svg>`,
  `<svg viewBox="0 0 24 24">
      <path d="M12 3l9 16H3l9-16z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>`,
];

const setMetaContent = (selector, value) => {
  const el = document.querySelector(selector);
  if (el && value) {
    el.setAttribute("content", value);
  }
};

const getChipIcon = (label = "") => {
  const cleaned = String(label).replace(/[^a-zA-Z0-9 ]/g, " ").trim();
  if (!cleaned) return "T";
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

const renderNavLinks = () => {
  if (!navLinks) return;
  navLinks.innerHTML = "";
  const links = content.nav?.links || [];
  links.forEach((link) => {
    if (!link?.label || !link?.href) return;
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    navLinks.appendChild(anchor);
  });
  const contactLink = document.createElement("a");
  contactLink.className = "nav-contact";
  contactLink.setAttribute("data-whatsapp-link", "");
  contactLink.href = "#";
  contactLink.target = "_blank";
  contactLink.rel = "noopener noreferrer";
  contactLink.textContent = content.nav?.contactLabel || fallbackContent.nav.contactLabel;
  navLinks.appendChild(contactLink);
};

const renderHeroMetrics = () => {
  if (!heroMetrics) return;
  heroMetrics.innerHTML = "";
  const metrics =
    Array.isArray(content.heroCard?.metrics) && content.heroCard.metrics.length
      ? content.heroCard.metrics
      : fallbackContent.heroCard.metrics;
  metrics.forEach((metric) => {
    const item = document.createElement("div");
    const value = document.createElement("span");
    value.className = "metric";
    value.textContent = metric.value || "";
    const label = document.createElement("span");
    label.className = "metric-label";
    label.textContent = metric.label || "";
    item.appendChild(value);
    item.appendChild(label);
    heroMetrics.appendChild(item);
  });
};

const renderFeaturedTools = () => {
  if (!featuredTrack || !featuredTrackClone) return;
  const fragment = document.createDocumentFragment();
  const list = content.featuredTools || [];
  list.forEach((tool) => {
    const name = typeof tool === "string" ? tool : tool?.name || "";
    const logo = typeof tool === "string" ? "" : tool?.logo || "";
    if (!name) return;
    const chip = document.createElement("div");
    chip.className = "tool-chip";
    const icon = document.createElement("div");
    icon.className = "chip-icon";
    if (logo) {
      const img = document.createElement("img");
      img.src = logo;
      img.alt = `${name} logo`;
      img.loading = "lazy";
      img.decoding = "async";
      icon.appendChild(img);
    } else {
      icon.textContent = getChipIcon(name);
    }
    const label = document.createElement("span");
    label.textContent = name;
    chip.appendChild(icon);
    chip.appendChild(label);
    fragment.appendChild(chip);
  });
  featuredTrack.innerHTML = "";
  featuredTrack.appendChild(fragment);
  featuredTrackClone.innerHTML = featuredTrack.innerHTML;
  const marqueeInner = document.querySelector(".marquee-inner");
  if (marqueeInner) {
    marqueeInner.style.animation = "none";
    marqueeInner.offsetHeight;
    marqueeInner.style.animation = "";
  }
};

const renderAlerts = () => {
  const alerts = content.alerts || [];
  const primary = alerts[0] || fallbackContent.alerts[0];
  const secondary = alerts[1] || fallbackContent.alerts[1];
  if (alertTitle1) alertTitle1.textContent = primary.title || "";
  if (alertTitle2) alertTitle2.textContent = secondary.title || "";
  if (alertValue2) alertValue2.textContent = secondary.value || "";
  alertTimerEnabled = primary.useTimer !== false;
  if (!alertTimerEnabled && offerTimerEl) {
    offerTimerEl.textContent = primary.value || "";
    if (offerTimerInterval) {
      clearInterval(offerTimerInterval);
      offerTimerInterval = null;
    }
  }
};

const renderFaq = () => {
  if (!faqGrid) return;
  faqGrid.innerHTML = "";
  const items = content.faq || [];
  items.forEach((faq, index) => {
    if (!faq?.question) return;
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const summaryWrap = document.createElement("span");
    summaryWrap.className = "faq-summary";
    const iconWrap = document.createElement("span");
    iconWrap.className = "faq-icon";
    iconWrap.setAttribute("aria-hidden", "true");
    const iconIndex = Number.isFinite(faq.icon) ? faq.icon : index;
    iconWrap.innerHTML = FAQ_ICONS[iconIndex % FAQ_ICONS.length];
    const question = document.createElement("span");
    question.textContent = faq.question;
    summaryWrap.appendChild(iconWrap);
    summaryWrap.appendChild(question);
    summary.appendChild(summaryWrap);
    details.appendChild(summary);
    const answerText = String(faq.answer || "").trim();
    if (answerText) {
      answerText.split(/\n+/).forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        details.appendChild(p);
      });
    }
    faqGrid.appendChild(details);
  });
};

const renderContactPoints = () => {
  if (!contactPoints) return;
  contactPoints.innerHTML = "";
  (content.contactPoints || []).forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    contactPoints.appendChild(li);
  });
};

const renderPopup = () => {
  if (popupTitle) popupTitle.textContent = content.popup?.title || "";
  if (popupBadge) popupBadge.textContent = content.popup?.badge || "";
  if (popupDiscountNumber) popupDiscountNumber.textContent = content.popup?.discountNumber || "";
  if (popupDiscountText) popupDiscountText.textContent = content.popup?.discountText || "";
  if (popupDescription) popupDescription.textContent = content.popup?.description || "";
  if (popupCodeLabel) popupCodeLabel.textContent = content.popup?.codeLabel || "";
  if (popupCodeValue) popupCodeValue.textContent = content.popup?.codeValue || "";
  if (popupClaim) popupClaim.textContent = content.popup?.claimLabel || "";
  if (popupDecline) popupDecline.textContent = content.popup?.declineLabel || "";
  if (popupUrgency) popupUrgency.textContent = content.popup?.urgency || "";
  if (popupSubtitle) {
    const prefix = content.popup?.subtitlePrefix || "";
    const strong = content.popup?.subtitleStrong || "";
    const suffix = content.popup?.subtitleSuffix || "";
    popupSubtitle.innerHTML = "";
    if (prefix) popupSubtitle.appendChild(document.createTextNode(`${prefix} `));
    if (strong) {
      const bold = document.createElement("strong");
      bold.textContent = strong;
      popupSubtitle.appendChild(bold);
    }
    if (suffix) popupSubtitle.appendChild(document.createTextNode(` ${suffix}`));
  }
  if (popupBenefits) {
    popupBenefits.innerHTML = "";
    (content.popup?.benefits || []).forEach((benefit) => {
      const row = document.createElement("div");
      row.className = "benefit-item";
      row.innerHTML = `<span class="benefit-tick">&#10003;</span>${benefit}`;
      popupBenefits.appendChild(row);
    });
  }
};

const applySeo = () => {
  if (content.seo?.title) {
    document.title = content.seo.title;
  }
  setMetaContent('meta[name="description"]', content.seo?.description);
  setMetaContent('meta[property="og:title"]', content.seo?.ogTitle);
  setMetaContent('meta[property="og:description"]', content.seo?.ogDescription);
  setMetaContent('meta[name="twitter:title"]', content.seo?.twitterTitle);
  setMetaContent('meta[name="twitter:description"]', content.seo?.twitterDescription);
};

const applyTheme = () => {
  if (!root) return;
  const theme = content.theme || fallbackContent.theme;
  if (!theme) return;
  const setVar = (name, value) => {
    if (!value) return;
    root.style.setProperty(name, value);
  };
  setVar("--accent-1", theme.accent1);
  setVar("--accent-2", theme.accent2);
  setVar("--accent-3", theme.accent3);
  setVar("--highlight-1", theme.highlight1);
  setVar("--highlight-2", theme.highlight2);
  setVar("--highlight-3", theme.highlight3);
  setVar("--glow-color", theme.glowColor);
  setVar("--bg-radial-1", theme.bgRadial1);
  setVar("--bg-radial-2", theme.bgRadial2);
  setVar("--bg-linear-1", theme.bgLinear1);
  setVar("--bg-linear-2", theme.bgLinear2);
  setVar("--bg-linear-3", theme.bgLinear3);
};

const applyHighlightStyle = () => {
  if (!heroHighlight) return;
  let style = content.hero?.highlightStyle || fallbackContent.hero.highlightStyle;
  let motion = content.hero?.highlightMotion || fallbackContent.hero.highlightMotion;
  if (typeof style === "number") {
    style = `hl-${String(style).padStart(2, "0")}`;
  } else if (/^\d+$/.test(String(style || ""))) {
    style = `hl-${String(style).padStart(2, "0")}`;
  }
  if (typeof motion === "number") {
    motion = `highlight-motion-${String(motion).padStart(1, "0")}`;
  } else if (/^\d+$/.test(String(motion || ""))) {
    motion = `highlight-motion-${String(motion).padStart(1, "0")}`;
  }
  heroHighlight.className = "highlight-pill";
  if (style) heroHighlight.classList.add(style);
  if (motion) heroHighlight.classList.add(motion);
};

const applyAnimations = () => {
  const animations = content.animations || fallbackContent.animations;
  if (featuredMarquee) {
    featuredMarquee.dataset.motion = animations.featured || "1";
  }
  if (proofsMarquee) {
    proofsMarquee.dataset.motion = animations.proofs || "1";
  }
  if (reviewsGrid) {
    reviewsGrid.dataset.motion = animations.reviews || "1";
  }
};

const updateAnnouncementHeight = () => {
  if (!announcementBanner) return;
  const height = announcementBanner.classList.contains("hidden")
    ? 0
    : announcementBanner.offsetHeight || 0;
  document.documentElement.style.setProperty("--announcement-height", `${height}px`);
  const ctaHidden = announcementCta?.classList.contains("hidden");
  const ctaWidth =
    announcementBanner.classList.contains("hidden") || ctaHidden
      ? 0
      : announcementCta?.offsetWidth || 0;
  document.documentElement.style.setProperty("--announcement-cta-width", `${ctaWidth}px`);
};

const ANNOUNCEMENT_ICON_SVGS = {
  bolt:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  users:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  chat:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-1 3.8 8.5 8.5 0 0 1-6.5 4.2 8.38 8.38 0 0 1-3.8-1L3 21l1.9-5.7a8.38 8.38 0 0 1-1-3.8 8.5 8.5 0 0 1 4.2-7.3 8.38 8.38 0 0 1 3.8-1h.5a8.48 8.48 0 0 1 8 8z"/></svg>',
  tag:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41L11 3H3v8l9.59 9.59a2 2 0 0 0 2.82 0l5.18-5.18a2 2 0 0 0 0-2.82z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
};

const ANNOUNCEMENT_ICON_ALIASES = {
  bolt: "bolt",
  flash: "bolt",
  lightning: "bolt",
  clock: "clock",
  timer: "clock",
  time: "clock",
  hour: "clock",
  users: "users",
  user: "users",
  people: "users",
  community: "users",
  deal: "tag",
  tag: "tag",
  discount: "tag",
  chat: "chat",
  message: "chat",
  whatsapp: "chat",
  shield: "shield",
  verify: "shield",
  verified: "shield",
  secure: "shield",
  check: "check",
  tick: "check",
  confirm: "check",
  "\uD83D\uDD25": "bolt",
  "\uD83D\uDCF1": "chat",
  "\u26A1": "bolt",
  "\u2705": "check",
  "\u23F3": "clock",
  "\u23F0": "clock",
};

const isAnnouncementIconUrl = (value) => {
  const text = String(value || "").trim();
  if (!text) return false;
  if (text.startsWith("http://") || text.startsWith("https://") || text.startsWith("data:image/")) {
    return true;
  }
  return /\.(svg|png|jpg|jpeg|webp|gif)(\?.*)?$/i.test(text);
};

const createAnnouncementIcon = (value) => {
  const text = String(value || "").trim();
  if (!text) return null;
  const wrapper = document.createElement("span");
  wrapper.className = "icon";
  wrapper.setAttribute("aria-hidden", "true");

  if (isAnnouncementIconUrl(text)) {
    const img = document.createElement("img");
    img.src = text;
    img.alt = "";
    img.loading = "lazy";
    img.decoding = "async";
    wrapper.appendChild(img);
    return wrapper;
  }

  const key = ANNOUNCEMENT_ICON_ALIASES[text.toLowerCase()] || text.toLowerCase();
  const svg = ANNOUNCEMENT_ICON_SVGS[key];
  if (!svg) return null;
  wrapper.innerHTML = svg;
  return wrapper;
};

const renderAnnouncement = () => {
  if (!announcementBanner || !announcementTrack || !announcementTrackClone) return;
  const announcement = content.announcement || fallbackContent.announcement;
  const items = Array.isArray(announcement?.items) ? announcement.items : [];
  const enabled = announcement?.enabled !== false;
  const direction = announcement?.direction === "left" ? "left" : "right";

  if (!enabled || !items.length) {
    announcementBanner.classList.add("hidden");
    announcementBanner.setAttribute("aria-hidden", "true");
    updateAnnouncementHeight();
    return;
  }

  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    if (typeof item === "string") {
      item = { text: item };
    }
    const icon = String(item?.icon || "").trim();
    const title = String(item?.title || "").trim();
    const text = String(item?.text || "").trim();
    if (!title && !text && !icon) return;

    const span = document.createElement("span");
    span.className = "banner-item";
      const iconEl = createAnnouncementIcon(icon);
      if (iconEl) span.appendChild(iconEl);
      if (title) {
        const strong = document.createElement("strong");
        strong.textContent = title;
        span.appendChild(strong);
    }
      if (text) {
        const spacer = title ? " " : "";
        span.appendChild(document.createTextNode(`${spacer}${text}`));
      }
    fragment.appendChild(span);
    if (index !== items.length - 1) {
      const divider = document.createElement("span");
      divider.className = "banner-divider";
      divider.textContent = "•";
      fragment.appendChild(divider);
    }
  });

  announcementTrack.innerHTML = "";
  announcementTrack.appendChild(fragment);
  announcementTrackClone.innerHTML = announcementTrack.innerHTML;

  if (announcementCta) {
    const label = String(announcement?.ctaLabel || "").trim();
    const url = String(announcement?.ctaUrl || "").trim();
    if (label && url) {
      announcementCta.textContent = label;
      announcementCta.href = url;
      announcementCta.classList.remove("hidden");
      announcementCta.setAttribute("aria-hidden", "false");
    } else {
      announcementCta.classList.add("hidden");
      announcementCta.setAttribute("aria-hidden", "true");
    }
  }

  announcementBanner.classList.remove("hidden");
  announcementBanner.setAttribute("aria-hidden", "false");
  announcementBanner.dataset.direction = direction;
  if (announcementInner) {
    announcementInner.style.animation = "none";
    announcementInner.offsetHeight;
    announcementInner.style.animation = "";
  }
  updateAnnouncementHeight();
};

const applyContent = () => {
  applyTheme();
  applyHighlightStyle();
  applyAnimations();
  renderAnnouncement();
  if (navLogo) navLogo.textContent = content.nav?.logoText || "";
  renderNavLinks();
  if (heroEyebrow) heroEyebrow.textContent = content.hero?.eyebrow || "";
  if (heroTitle) heroTitle.textContent = content.hero?.title || "";
  if (heroSubtitle) heroSubtitle.textContent = content.hero?.subtitle || "";
  if (heroHighlight) heroHighlight.textContent = content.hero?.highlightText || "";
  if (heroBrandInline) heroBrandInline.textContent = content.hero?.brandInline || "";
  if (heroPrimaryCta) heroPrimaryCta.textContent = content.hero?.primaryCta || "";
  if (heroSecondaryCta) heroSecondaryCta.textContent = content.hero?.secondaryCta || "";
  if (heroCardTitle) heroCardTitle.textContent = content.heroCard?.title || "";
  if (heroSubheadPrefix) {
    const prefix = content.hero?.subheadPrefix ? `${content.hero.subheadPrefix.trim()} ` : "";
    heroSubheadPrefix.textContent = prefix;
  }
  if (heroSubheadSuffix) {
    const suffix = content.hero?.subheadSuffix ? ` ${content.hero.subheadSuffix.trim()} ` : " ";
    heroSubheadSuffix.textContent = suffix;
  }
  renderHeroMetrics();
  renderFeaturedTools();
  renderAlerts();
  if (reviewsTitle) reviewsTitle.textContent = content.headings?.reviewsTitle || "";
  if (toolsLabel) toolsLabel.textContent = content.headings?.toolsLabel || "";
  if (toolsTitle) toolsTitle.textContent = content.headings?.toolsTitle || "";
  if (viewAllBtn) viewAllBtn.textContent = content.headings?.viewAllLabel || "View All";
  if (toolsModalTitle) toolsModalTitle.textContent = content.headings?.toolsModalTitle || "";
  if (searchInput) {
    searchInput.placeholder = content.headings?.toolsSearchPlaceholder || "Search tools by name";
  }
  if (proofsLabel) proofsLabel.textContent = content.headings?.proofsLabel || "";
  if (proofsTitle) proofsTitle.textContent = content.headings?.proofsTitle || "";
  if (faqLabel) faqLabel.textContent = content.headings?.faqLabel || "";
  if (faqTitle) faqTitle.textContent = content.headings?.faqTitle || "";
  if (faqIntro) faqIntro.textContent = content.headings?.faqIntro || "";
  if (contactLabel) contactLabel.textContent = content.headings?.contactLabel || "";
  if (contactTitle) contactTitle.textContent = content.headings?.contactTitle || "";
  if (contactSubhead) contactSubhead.textContent = content.headings?.contactSubhead || "";
  if (contactCta) contactCta.textContent = content.headings?.contactCta || "";
  renderFaq();
  renderContactPoints();
  renderPopup();
  applySeo();
  applyWhatsAppLinks();
  if (alertTimerEnabled) {
    startOfferTimer();
  }
};

const applyWhatsAppLinks = () => {
  const message = content.whatsapp?.navMessage || fallbackContent.whatsapp.navMessage;
  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = buildPlainContactUrl(message);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
};

const renderToolCards = (container, list) => {
  if (!container) return;
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach((tool, index) => {
    const card = document.createElement("article");
    card.className = "tool-card";
    card.dataset.tool = tool.name;
    card.dataset.defaultDuration = tool.defaultDuration || DEFAULT_DURATION;
  const hasDurations = Array.isArray(tool.durations) && tool.durations.length > 0;
  const selectId = `duration-${tool.name.replace(/\s+/g, "-").toLowerCase()}-${index}`;
  const initialDuration = hasDurations ? tool.durations[0] : tool.defaultDuration || null;
  const pricing = getPricing(tool, initialDuration);

    card.innerHTML = `
      <div class="tool-head">
        <div class="tool-logo">
          ${createLogoMarkup(tool)}
        </div>
        <div class="tool-info">
          <h4>${tool.name}</h4>
          ${
            hasDurations
              ? `<div class="duration-select" data-duration="${initialDuration || ""}">
                  <button
                    class="duration-trigger"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="${selectId}"
                  >
                    <span class="duration-label">${initialDuration}</span>
                    <span class="duration-chevron" aria-hidden="true">v</span>
                  </button>
                  <ul class="duration-menu" id="${selectId}" role="listbox" tabindex="-1">
                    ${tool.durations
                      .map(
                        (duration, idx) => `
                        <li>
                          <button
                            type="button"
                            class="duration-option"
                            role="option"
                            data-value="${duration}"
                            aria-selected="${idx === 0 ? "true" : "false"}"
                          >
                            ${duration}
                          </button>
                        </li>`
                      )
                      .join("")}
                  </ul>
                </div>`
              : tool.defaultDuration
                ? `<div class="duration-static">${tool.defaultDuration}</div>`
                : ""
          }
        </div>
      </div>
      <div class="tool-price" aria-live="polite" aria-atomic="true">
        <div class="price-block">
          <span class="price-label">Our price</span>
          <span class="price-value our-price">${pricing.our}</span>
        </div>
        <div class="price-block original">
          <span class="price-label">Original price</span>
          <span class="price-value original-price">${pricing.original}</span>
        </div>
      </div>
      <button class="primary-btn" data-action="contact" type="button">WhatsApp Us</button>
    `;

    fragment.appendChild(card);
    if (hasDurations) {
      card.dataset.duration = initialDuration || DEFAULT_DURATION;
    }
  });

  container.appendChild(fragment);
};

const renderMainTools = () => {
  renderToolCards(toolsGrid, tools.slice(0, getInitialCount()));
};

const renderModalTools = () => {
  const filterText = query.trim().toLowerCase();
  const filtered = tools.filter((tool) => tool.name.toLowerCase().includes(filterText));
  if (filtered.length === 0 && toolsGridModal) {
    toolsGridModal.innerHTML =
      "<p class=\"tools-empty\" role=\"status\">No tools match your search.</p>";
  } else {
    renderToolCards(toolsGridModal, filtered);
  }
  if (searchStatus) {
    searchStatus.textContent = `${filtered.length} tool${filtered.length === 1 ? "" : "s"} found`;
  }
};

const openToolsModal = () => {
  if (!toolsModal) return;
  expanded = true;
  previousActiveElement = document.activeElement;
  toolsModal.classList.add("show");
  toolsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  renderModalTools();
  if (toolsModalBody) {
    toolsModalBody.scrollTop = 0;
  }
  if (searchInput) {
    searchInput.focus();
  }
};

const closeToolsModal = () => {
  if (!toolsModal) return;
  expanded = false;
  toolsModal.classList.remove("show");
  toolsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  query = "";
  if (searchInput) {
    searchInput.value = "";
  }
  if (searchStatus) {
    searchStatus.textContent = "";
  }
  renderMainTools();
  if (previousActiveElement && typeof previousActiveElement.focus === "function") {
    previousActiveElement.focus();
  }
};

const updateNavHeight = () => {
  if (!nav) return;
  const height = nav.offsetHeight;
  document.documentElement.style.setProperty("--nav-height", `${height}px`);
};

const offerTimerEl = document.getElementById("offerTimer");
const startOfferTimer = () => {
  if (!offerTimerEl || !alertTimerEnabled) return;
  const STORAGE_KEY = "saasBuddyOfferEnd";
  const now = Date.now();
  let endTime = null;
  try {
    endTime = Number(localStorage.getItem(STORAGE_KEY));
  } catch (error) {
    endTime = null;
  }
  if (!endTime || Number.isNaN(endTime)) {
    endTime = now + 45 * 60 * 1000;
    try {
      localStorage.setItem(STORAGE_KEY, String(endTime));
    } catch (error) {
      // Ignore storage errors (private mode, etc.)
    }
  } else if (endTime <= now) {
    endTime = now + 45 * 60 * 1000;
    try {
      localStorage.setItem(STORAGE_KEY, String(endTime));
    } catch (error) {
      // Ignore storage errors (private mode, etc.)
    }
  }
  const formatTime = (time) => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };
  if (offerTimerInterval) {
    clearInterval(offerTimerInterval);
  }
  offerTimerInterval = setInterval(() => {
    const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    offerTimerEl.textContent = formatTime(secondsLeft);
    if (secondsLeft <= 0) {
      offerTimerEl.textContent = "00:00:00";
      clearInterval(offerTimerInterval);
      offerTimerInterval = null;
      return;
    }
  }, 1000);
  const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
  offerTimerEl.textContent = formatTime(secondsLeft);
};

let popupTimerId = null;
let popupDismissed = false;
let popupShown = false;

const openExitPopup = () => {
  if (!exitPopup || popupDismissed || popupShown) return;
  exitPopup.classList.add("show");
  popupShown = true;
};

const closeExitPopup = () => {
  if (!exitPopup) return;
  exitPopup.classList.remove("show");
  popupDismissed = true;
  if (popupTimerId) {
    clearTimeout(popupTimerId);
    popupTimerId = null;
  }
};

const scheduleExitPopup = () => {
  if (!exitPopup || popupDismissed) return;
  popupTimerId = setTimeout(() => {
    openExitPopup();
  }, 15000);
};

if (viewAllBtn) {
  viewAllBtn.addEventListener("click", openToolsModal);
}

if (toolsModalClose) {
  toolsModalClose.addEventListener("click", closeToolsModal);
}

if (toolsModal) {
  toolsModal.addEventListener("click", (event) => {
    if (event.target === toolsModal) {
      closeToolsModal();
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    query = event.target.value;
    renderModalTools();
    if (toolsModalBody) {
      toolsModalBody.scrollTop = 0;
    }
  });
}

const handleMediaChange = () => {
  if (!expanded) {
    renderMainTools();
  } else {
    renderModalTools();
  }
};

if (typeof mobileQuery.addEventListener === "function") {
  mobileQuery.addEventListener("change", handleMediaChange);
} else if (typeof mobileQuery.addListener === "function") {
  mobileQuery.addListener(handleMediaChange);
}

const handleGridClick = (event) => {
  const button = event.target.closest("button[data-action='contact']");
  if (!button) return;
  const card = button.closest(".tool-card");
  if (!card) return;

  const toolName = card.dataset.tool || "this";
  const duration = getSelectedDuration(card);
  const url = buildContactUrl(toolName, duration);

  window.open(url, "_blank", "noopener");
};

const closeAllDurationMenus = (root = document) => {
  root.querySelectorAll(".duration-select.open").forEach((wrapper) => {
    wrapper.classList.remove("open");
    const trigger = wrapper.querySelector(".duration-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", "false");
    }
  });
};

const updateDurationSelection = (wrapper, value) => {
  if (!wrapper) return;
  const card = wrapper.closest(".tool-card");
  if (!card) return;
  const toolName = card.dataset.tool;
  const tool = tools.find((item) => item.name === toolName);
  if (!tool) return;
  const label = wrapper.querySelector(".duration-label");
  if (label) label.textContent = value;
  wrapper.dataset.duration = value;
  card.dataset.duration = value;
  wrapper.querySelectorAll(".duration-option").forEach((option) => {
    option.setAttribute("aria-selected", option.dataset.value === value ? "true" : "false");
  });
  updateCardPrice(card, tool, value);
};

const handleDurationClick = (event) => {
  const trigger = event.target.closest(".duration-trigger");
  if (trigger) {
    const wrapper = trigger.closest(".duration-select");
    if (!wrapper) return;
    const isOpen = wrapper.classList.contains("open");
    closeAllDurationMenus(wrapper.ownerDocument);
    if (!isOpen) {
      wrapper.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      const selected = wrapper.querySelector(".duration-option[aria-selected='true']");
      const first = wrapper.querySelector(".duration-option");
      (selected || first)?.focus();
    }
    return;
  }

  const option = event.target.closest(".duration-option");
  if (option) {
    const wrapper = option.closest(".duration-select");
    updateDurationSelection(wrapper, option.dataset.value);
    closeAllDurationMenus(wrapper.ownerDocument);
    const triggerButton = wrapper?.querySelector(".duration-trigger");
    if (triggerButton) triggerButton.focus();
  }
};

const handleDurationKeydown = (event) => {
  const wrapper = event.target.closest(".duration-select");
  if (!wrapper) return;
  const trigger = wrapper.querySelector(".duration-trigger");
  const options = Array.from(wrapper.querySelectorAll(".duration-option"));
  if (!options.length) return;
  const currentIndex = options.indexOf(document.activeElement);

  if (event.target.classList.contains("duration-trigger")) {
    if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(event.key)) {
      event.preventDefault();
      wrapper.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      const selected = wrapper.querySelector(".duration-option[aria-selected='true']");
      (selected || options[0])?.focus();
    }
    return;
  }

  if (event.key === "Escape") {
    event.preventDefault();
    closeAllDurationMenus(wrapper.ownerDocument);
    trigger?.focus();
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    const next = options[(currentIndex + 1) % options.length];
    next?.focus();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    const prev = options[(currentIndex - 1 + options.length) % options.length];
    prev?.focus();
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    const option = document.activeElement;
    if (option && option.classList.contains("duration-option")) {
      updateDurationSelection(wrapper, option.dataset.value);
      closeAllDurationMenus(wrapper.ownerDocument);
      trigger?.focus();
    }
  }
};

if (toolsGrid) {
  toolsGrid.addEventListener("click", handleGridClick);
  toolsGrid.addEventListener("click", handleDurationClick);
  toolsGrid.addEventListener("keydown", handleDurationKeydown);
}

if (toolsGridModal) {
  toolsGridModal.addEventListener("click", handleGridClick);
  toolsGridModal.addEventListener("click", handleDurationClick);
  toolsGridModal.addEventListener("keydown", handleDurationKeydown);
}

const initializeApp = () => {
  applyRemoteData({});
  applyContent();
  renderReviews();
  renderProofs();
  renderMainTools();
  updateNavHeight();
  scheduleExitPopup();
  subscribeToData();
};

initializeApp();


const updateNavTransparency = () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > SCROLL_THRESHOLD);
};

if (exitPopup) {
  exitPopup.addEventListener("click", (event) => {
    if (event.target === exitPopup) {
      closeExitPopup();
    }
  });
}

if (exitPopupClose) {
  exitPopupClose.addEventListener("click", closeExitPopup);
}

if (exitPopupDecline) {
  exitPopupDecline.addEventListener("click", closeExitPopup);
}

if (exitPopupClaim) {
  exitPopupClaim.addEventListener("click", () => {
    const message =
      content.whatsapp?.popupMessage || fallbackContent.whatsapp.popupMessage;
    window.open(buildPlainContactUrl(message), "_blank", "noopener");
    closeExitPopup();
  });
}

let resizeRaf = null;
window.addEventListener("resize", () => {
  if (resizeRaf) return;
  resizeRaf = window.requestAnimationFrame(() => {
    resizeRaf = null;
    updateNavHeight();
    updateAnnouncementHeight();
    if (expanded) {
      renderModalTools();
    } else {
      renderMainTools();
    }
  });
});

window.addEventListener("scroll", updateNavTransparency, { passive: true });
updateNavTransparency();

if (nav && "ResizeObserver" in window) {
  const navObserver = new ResizeObserver(() => {
    updateNavHeight();
  });
  navObserver.observe(nav);
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (expanded) {
      closeToolsModal();
      return;
    }
    if (exitPopup && exitPopup.classList.contains("show")) {
      closeExitPopup();
    }
  }
});

document.addEventListener("click", (event) => {
  if (event.target.closest(".duration-select")) return;
  closeAllDurationMenus();
});
