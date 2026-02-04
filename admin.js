const toolsList = document.getElementById("toolsList");
const proofsList = document.getElementById("proofsList");
const reviewsList = document.getElementById("reviewsList");
const jsonOutput = document.getElementById("jsonOutput");
const statusEl = document.getElementById("status");
const loadDataBtn = document.getElementById("loadDataBtn");
const saveDataBtn = document.getElementById("saveDataBtn");
const addToolBtn = document.getElementById("addToolBtn");
const toolsMotionSelect = document.getElementById("toolsMotion");
const addProofBtn = document.getElementById("addProofBtn");
const addReviewBtn = document.getElementById("addReviewBtn");
const refreshPreviewBtn = document.getElementById("refreshPreviewBtn");
const logoutBtn = document.getElementById("logoutBtn");
const proofsDirectionSelect = document.getElementById("proofsDirection");
const autoSaveToggle = document.getElementById("autoSaveToggle");
const confirmOverlay = document.getElementById("confirmOverlay");
const confirmTitle = document.getElementById("confirmTitle");
const confirmMessage = document.getElementById("confirmMessage");
const confirmOk = document.getElementById("confirmOk");
const confirmCancel = document.getElementById("confirmCancel");
const navLogoTextInput = document.getElementById("navLogoText");
const navContactLabelInput = document.getElementById("navContactLabel");
const navLinksList = document.getElementById("navLinksList");
const addNavLinkBtn = document.getElementById("addNavLinkBtn");
const announcementEnabledToggle = document.getElementById("announcementEnabled");
const announcementDirectionSelect = document.getElementById("announcementDirection");
const announcementMotionSelect = document.getElementById("announcementMotion");
const announcementItemsList = document.getElementById("announcementItemsList");
const addAnnouncementItemBtn = document.getElementById("addAnnouncementItemBtn");
const announcementCtaLabelInput = document.getElementById("announcementCtaLabel");
const announcementCtaUrlInput = document.getElementById("announcementCtaUrl");
const heroEyebrowInput = document.getElementById("heroEyebrowInput");
const heroTitleInput = document.getElementById("heroTitleInput");
const heroSubtitleInput = document.getElementById("heroSubtitleInput");
const heroSubheadPrefixInput = document.getElementById("heroSubheadPrefixInput");
const heroHighlightInput = document.getElementById("heroHighlightInput");
const heroSubheadSuffixInput = document.getElementById("heroSubheadSuffixInput");
const heroBrandInlineInput = document.getElementById("heroBrandInlineInput");
const heroPrimaryCtaInput = document.getElementById("heroPrimaryCtaInput");
const heroSecondaryCtaInput = document.getElementById("heroSecondaryCtaInput");
const heroHighlightStyleSelect = document.getElementById("heroHighlightStyle");
const heroHighlightMotionSelect = document.getElementById("heroHighlightMotion");
const themeAccent1Input = document.getElementById("themeAccent1");
const themeAccent2Input = document.getElementById("themeAccent2");
const themeAccent3Input = document.getElementById("themeAccent3");
const themeHighlight1Input = document.getElementById("themeHighlight1");
const themeHighlight2Input = document.getElementById("themeHighlight2");
const themeHighlight3Input = document.getElementById("themeHighlight3");
const themeGlowInput = document.getElementById("themeGlow");
const themeBgRadial1Input = document.getElementById("themeBgRadial1");
const themeBgRadial2Input = document.getElementById("themeBgRadial2");
const themeBgLinear1Input = document.getElementById("themeBgLinear1");
const themeBgLinear2Input = document.getElementById("themeBgLinear2");
const themeBgLinear3Input = document.getElementById("themeBgLinear3");
const themeHistorySelect = document.getElementById("themeHistorySelect");
const applyThemeHistoryBtn = document.getElementById("applyThemeHistoryBtn");
const featuredMotionSelect = document.getElementById("featuredMotion");
const proofsMotionSelect = document.getElementById("proofsMotion");
const reviewsMotionSelect = document.getElementById("reviewsMotion");
const heroCardTitleInput = document.getElementById("heroCardTitleInput");
const metricsList = document.getElementById("metricsList");
const addMetricBtn = document.getElementById("addMetricBtn");
const featuredList = document.getElementById("featuredList");
const addFeaturedBtn = document.getElementById("addFeaturedBtn");
const alertsList = document.getElementById("alertsList");
const addAlertBtn = document.getElementById("addAlertBtn");
const reviewsTitleInput = document.getElementById("reviewsTitleInput");
const toolsLabelInput = document.getElementById("toolsLabelInput");
const toolsTitleInput = document.getElementById("toolsTitleInput");
const viewAllLabelInput = document.getElementById("viewAllLabelInput");
const toolsModalTitleInput = document.getElementById("toolsModalTitleInput");
const toolsSearchPlaceholderInput = document.getElementById("toolsSearchPlaceholderInput");
const proofsLabelInput = document.getElementById("proofsLabelInput");
const proofsTitleInput = document.getElementById("proofsTitleInput");
const faqLabelInput = document.getElementById("faqLabelInput");
const faqTitleInput = document.getElementById("faqTitleInput");
const faqIntroInput = document.getElementById("faqIntroInput");
const faqList = document.getElementById("faqList");
const addFaqBtn = document.getElementById("addFaqBtn");
const contactLabelInput = document.getElementById("contactLabelInput");
const contactTitleInput = document.getElementById("contactTitleInput");
const contactSubheadInput = document.getElementById("contactSubheadInput");
const contactCtaInput = document.getElementById("contactCtaInput");
const contactPointsList = document.getElementById("contactPointsList");
const addContactPointBtn = document.getElementById("addContactPointBtn");
const popupTitleInput = document.getElementById("popupTitleInput");
const popupSubtitlePrefixInput = document.getElementById("popupSubtitlePrefixInput");
const popupSubtitleStrongInput = document.getElementById("popupSubtitleStrongInput");
const popupSubtitleSuffixInput = document.getElementById("popupSubtitleSuffixInput");
const popupBadgeInput = document.getElementById("popupBadgeInput");
const popupDiscountNumberInput = document.getElementById("popupDiscountNumberInput");
const popupDiscountTextInput = document.getElementById("popupDiscountTextInput");
const popupDescriptionInput = document.getElementById("popupDescriptionInput");
const popupCodeLabelInput = document.getElementById("popupCodeLabelInput");
const popupCodeValueInput = document.getElementById("popupCodeValueInput");
const popupClaimLabelInput = document.getElementById("popupClaimLabelInput");
const popupDeclineLabelInput = document.getElementById("popupDeclineLabelInput");
const popupUrgencyInput = document.getElementById("popupUrgencyInput");
const popupBenefitsList = document.getElementById("popupBenefitsList");
const addPopupBenefitBtn = document.getElementById("addPopupBenefitBtn");
const whatsappNavMessageInput = document.getElementById("whatsappNavMessage");
const whatsappPopupMessageInput = document.getElementById("whatsappPopupMessage");
const whatsappToolTemplateInput = document.getElementById("whatsappToolTemplate");
const seoTitleInput = document.getElementById("seoTitleInput");
const seoDescriptionInput = document.getElementById("seoDescriptionInput");
const seoOgTitleInput = document.getElementById("seoOgTitleInput");
const seoOgDescriptionInput = document.getElementById("seoOgDescriptionInput");
const seoTwitterTitleInput = document.getElementById("seoTwitterTitleInput");
const seoTwitterDescriptionInput = document.getElementById("seoTwitterDescriptionInput");

let autoSaveTimer = null;
let dbRef = null;
let isSaving = false;
let autoSaveEnabled = true;
let themeHistory = [];
const USD_TO_INR = 83;
const FAQ_ICON_LABELS = [
  "Refresh",
  "Clock",
  "Lock",
  "Card",
  "Compare",
  "Checklist",
  "Shield",
  "Target",
  "Warning",
];
const defaultContent = {
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
  themeHistory: [],
  animations: {
    featured: "1",
    proofs: "1",
    reviews: "1",
    announcement: "1",
    tools: "1",
  },
};
const defaultData = {
  tools: [
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
  ],
  proofs: [
    { label: "Proof 01", image: "" },
    { label: "Proof 02", image: "" },
    { label: "Proof 03", image: "" },
    { label: "Proof 04", image: "" },
    { label: "Proof 05", image: "" },
    { label: "Proof 06", image: "" },
  ],
  textReviews: [
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
  ],
  proofsDirection: "left",
  content: defaultContent,
};

const mergeArray = (value, fallback) => (Array.isArray(value) ? value : fallback);

const normalizeMotion = (value, allowed, fallback) => {
  const normalized = String(value || "").trim();
  return allowed.includes(normalized) ? normalized : fallback;
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
  const fallback = defaultContent.nav.links;

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

  if (!normalized.length) return defaultContent.featuredTools;

  const fallback = defaultContent.featuredTools;
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

const mergeContent = (content = {}) => ({
  nav: {
    logoText: content.nav?.logoText || defaultContent.nav.logoText,
    contactLabel: content.nav?.contactLabel || defaultContent.nav.contactLabel,
    links: normalizeNavLinks(content.nav?.links),
  },
    announcement: {
      enabled:
        typeof content.announcement?.enabled === "boolean"
          ? content.announcement.enabled
          : defaultContent.announcement.enabled,
      direction:
        content.announcement?.direction === "left" || content.announcement?.direction === "right"
          ? content.announcement.direction
          : defaultContent.announcement.direction,
      ctaLabel: content.announcement?.ctaLabel || defaultContent.announcement.ctaLabel,
      ctaUrl: content.announcement?.ctaUrl || defaultContent.announcement.ctaUrl,
      items: mergeArray(content.announcement?.items, defaultContent.announcement.items),
    },
  hero: {
    eyebrow: content.hero?.eyebrow || defaultContent.hero.eyebrow,
    title: content.hero?.title || defaultContent.hero.title,
    subtitle: content.hero?.subtitle || defaultContent.hero.subtitle,
    subheadPrefix: content.hero?.subheadPrefix || defaultContent.hero.subheadPrefix,
    highlightText: content.hero?.highlightText || defaultContent.hero.highlightText,
    highlightStyle: content.hero?.highlightStyle || defaultContent.hero.highlightStyle,
    highlightMotion: content.hero?.highlightMotion || defaultContent.hero.highlightMotion,
    subheadSuffix: content.hero?.subheadSuffix || defaultContent.hero.subheadSuffix,
    brandInline: content.hero?.brandInline || defaultContent.hero.brandInline,
    primaryCta: content.hero?.primaryCta || defaultContent.hero.primaryCta,
    secondaryCta: content.hero?.secondaryCta || defaultContent.hero.secondaryCta,
  },
  heroCard: {
    title: content.heroCard?.title || defaultContent.heroCard.title,
    metrics: mergeArray(content.heroCard?.metrics, defaultContent.heroCard.metrics),
  },
  featuredTools: normalizeFeaturedTools(content.featuredTools),
  alerts: mergeArray(content.alerts, defaultContent.alerts),
  headings: {
    reviewsTitle: content.headings?.reviewsTitle || defaultContent.headings.reviewsTitle,
    toolsLabel: content.headings?.toolsLabel || defaultContent.headings.toolsLabel,
    toolsTitle: content.headings?.toolsTitle || defaultContent.headings.toolsTitle,
    viewAllLabel: content.headings?.viewAllLabel || defaultContent.headings.viewAllLabel,
    toolsModalTitle: content.headings?.toolsModalTitle || defaultContent.headings.toolsModalTitle,
    toolsSearchPlaceholder:
      content.headings?.toolsSearchPlaceholder || defaultContent.headings.toolsSearchPlaceholder,
    proofsLabel: content.headings?.proofsLabel || defaultContent.headings.proofsLabel,
    proofsTitle: content.headings?.proofsTitle || defaultContent.headings.proofsTitle,
    faqLabel: content.headings?.faqLabel || defaultContent.headings.faqLabel,
    faqTitle: content.headings?.faqTitle || defaultContent.headings.faqTitle,
    faqIntro: content.headings?.faqIntro || defaultContent.headings.faqIntro,
    contactLabel: content.headings?.contactLabel || defaultContent.headings.contactLabel,
    contactTitle: content.headings?.contactTitle || defaultContent.headings.contactTitle,
    contactSubhead: content.headings?.contactSubhead || defaultContent.headings.contactSubhead,
    contactCta: content.headings?.contactCta || defaultContent.headings.contactCta,
  },
  faq: mergeArray(content.faq, defaultContent.faq),
  contactPoints: mergeArray(content.contactPoints, defaultContent.contactPoints),
  popup: {
    title: content.popup?.title || defaultContent.popup.title,
    subtitlePrefix: content.popup?.subtitlePrefix || defaultContent.popup.subtitlePrefix,
    subtitleStrong: content.popup?.subtitleStrong || defaultContent.popup.subtitleStrong,
    subtitleSuffix: content.popup?.subtitleSuffix || defaultContent.popup.subtitleSuffix,
    badge: content.popup?.badge || defaultContent.popup.badge,
    discountNumber: content.popup?.discountNumber || defaultContent.popup.discountNumber,
    discountText: content.popup?.discountText || defaultContent.popup.discountText,
    description: content.popup?.description || defaultContent.popup.description,
    codeLabel: content.popup?.codeLabel || defaultContent.popup.codeLabel,
    codeValue: content.popup?.codeValue || defaultContent.popup.codeValue,
    benefits: mergeArray(content.popup?.benefits, defaultContent.popup.benefits),
    claimLabel: content.popup?.claimLabel || defaultContent.popup.claimLabel,
    declineLabel: content.popup?.declineLabel || defaultContent.popup.declineLabel,
    urgency: content.popup?.urgency || defaultContent.popup.urgency,
  },
  whatsapp: {
    navMessage: content.whatsapp?.navMessage || defaultContent.whatsapp.navMessage,
    popupMessage: content.whatsapp?.popupMessage || defaultContent.whatsapp.popupMessage,
    toolMessageTemplate:
      content.whatsapp?.toolMessageTemplate || defaultContent.whatsapp.toolMessageTemplate,
  },
  seo: {
    title: content.seo?.title || defaultContent.seo.title,
    description: content.seo?.description || defaultContent.seo.description,
    ogTitle: content.seo?.ogTitle || defaultContent.seo.ogTitle,
    ogDescription: content.seo?.ogDescription || defaultContent.seo.ogDescription,
    twitterTitle: content.seo?.twitterTitle || defaultContent.seo.twitterTitle,
    twitterDescription: content.seo?.twitterDescription || defaultContent.seo.twitterDescription,
  },
  theme: {
    accent1: content.theme?.accent1 || defaultContent.theme.accent1,
    accent2: content.theme?.accent2 || defaultContent.theme.accent2,
    accent3: content.theme?.accent3 || defaultContent.theme.accent3,
    highlight1: content.theme?.highlight1 || defaultContent.theme.highlight1,
    highlight2: content.theme?.highlight2 || defaultContent.theme.highlight2,
    highlight3: content.theme?.highlight3 || defaultContent.theme.highlight3,
    glowColor: content.theme?.glowColor || defaultContent.theme.glowColor,
    bgRadial1: content.theme?.bgRadial1 || defaultContent.theme.bgRadial1,
    bgRadial2: content.theme?.bgRadial2 || defaultContent.theme.bgRadial2,
    bgLinear1: content.theme?.bgLinear1 || defaultContent.theme.bgLinear1,
    bgLinear2: content.theme?.bgLinear2 || defaultContent.theme.bgLinear2,
    bgLinear3: content.theme?.bgLinear3 || defaultContent.theme.bgLinear3,
  },
  animations: {
    featured: normalizeMotion(
      content.animations?.featured,
      ["1", "2", "3", "4", "5", "6"],
      defaultContent.animations.featured
    ),
    proofs: normalizeMotion(
      content.animations?.proofs,
      ["1", "2", "3", "4", "5", "6"],
      defaultContent.animations.proofs
    ),
    reviews: normalizeMotion(
      content.animations?.reviews,
      ["1", "2", "3", "4", "5", "6", "7"],
      defaultContent.animations.reviews
    ),
    announcement: normalizeMotion(
      content.animations?.announcement,
      ["1", "2", "3"],
      defaultContent.animations.announcement
    ),
    tools: normalizeMotion(
      content.animations?.tools,
      ["1", "2", "3", "4", "5", "6", "7"],
      defaultContent.animations.tools
    ),
  },
  themeHistory: mergeArray(content.themeHistory, defaultContent.themeHistory),
});

const mergeDefaults = (data = {}) => {
  const hasTools = Array.isArray(data.tools) && data.tools.length > 0;
  const hasProofs = Array.isArray(data.proofs) && data.proofs.length > 0;
  const hasReviews = Array.isArray(data.textReviews) && data.textReviews.length > 0;
  if (!hasTools && !hasProofs && !hasReviews) {
    return { ...defaultData };
  }
  return {
    tools: hasTools ? data.tools : defaultData.tools,
    proofs: hasProofs ? data.proofs : defaultData.proofs,
    textReviews: hasReviews ? data.textReviews : defaultData.textReviews,
    proofsDirection: data.proofsDirection || defaultData.proofsDirection,
    content: mergeContent(data.content || {}),
  };
};

const normalizePriceValue = (value) => {
  if (!value) return value;
  const text = String(value);
  if (!text.includes("$")) return value;
  const amount = parseFloat(text.replace(/[^0-9.]/g, ""));
  if (!Number.isFinite(amount)) return value;
  return `Rs. ${Math.round(amount * USD_TO_INR)}`;
};

const normalizeToolCurrency = (tool = {}) => ({
  ...tool,
  price: normalizePriceValue(tool.price),
  original: normalizePriceValue(tool.original),
});

const THEME_KEYS = [
  "accent1",
  "accent2",
  "accent3",
  "highlight1",
  "highlight2",
  "highlight3",
  "glowColor",
  "bgRadial1",
  "bgRadial2",
  "bgLinear1",
  "bgLinear2",
  "bgLinear3",
];

const getThemeFromInputs = () => ({
  accent1: themeAccent1Input?.value?.trim() || defaultContent.theme.accent1,
  accent2: themeAccent2Input?.value?.trim() || defaultContent.theme.accent2,
  accent3: themeAccent3Input?.value?.trim() || defaultContent.theme.accent3,
  highlight1: themeHighlight1Input?.value?.trim() || defaultContent.theme.highlight1,
  highlight2: themeHighlight2Input?.value?.trim() || defaultContent.theme.highlight2,
  highlight3: themeHighlight3Input?.value?.trim() || defaultContent.theme.highlight3,
  glowColor: themeGlowInput?.value?.trim() || defaultContent.theme.glowColor,
  bgRadial1: themeBgRadial1Input?.value?.trim() || defaultContent.theme.bgRadial1,
  bgRadial2: themeBgRadial2Input?.value?.trim() || defaultContent.theme.bgRadial2,
  bgLinear1: themeBgLinear1Input?.value?.trim() || defaultContent.theme.bgLinear1,
  bgLinear2: themeBgLinear2Input?.value?.trim() || defaultContent.theme.bgLinear2,
  bgLinear3: themeBgLinear3Input?.value?.trim() || defaultContent.theme.bgLinear3,
});

const applyThemeToInputs = (theme = {}) => {
  if (themeAccent1Input) themeAccent1Input.value = theme.accent1 || "";
  if (themeAccent2Input) themeAccent2Input.value = theme.accent2 || "";
  if (themeAccent3Input) themeAccent3Input.value = theme.accent3 || "";
  if (themeHighlight1Input) themeHighlight1Input.value = theme.highlight1 || "";
  if (themeHighlight2Input) themeHighlight2Input.value = theme.highlight2 || "";
  if (themeHighlight3Input) themeHighlight3Input.value = theme.highlight3 || "";
  if (themeGlowInput) themeGlowInput.value = theme.glowColor || "";
  if (themeBgRadial1Input) themeBgRadial1Input.value = theme.bgRadial1 || "";
  if (themeBgRadial2Input) themeBgRadial2Input.value = theme.bgRadial2 || "";
  if (themeBgLinear1Input) themeBgLinear1Input.value = theme.bgLinear1 || "";
  if (themeBgLinear2Input) themeBgLinear2Input.value = theme.bgLinear2 || "";
  if (themeBgLinear3Input) themeBgLinear3Input.value = theme.bgLinear3 || "";
};

const themesEqual = (a = {}, b = {}) =>
  THEME_KEYS.every((key) => String(a[key] || "") === String(b[key] || ""));

const normalizeThemeHistory = (history = []) =>
  (Array.isArray(history) ? history : [])
    .map((entry) => {
      if (!entry) return null;
      if (entry.theme) {
        return {
          id: entry.id || Date.now(),
          label: entry.label || "",
          theme: entry.theme,
        };
      }
      return {
        id: Date.now(),
        label: "",
        theme: entry,
      };
    })
    .filter(Boolean)
    .slice(0, 10);

const renderThemeHistory = () => {
  if (!themeHistorySelect) return;
  themeHistorySelect.innerHTML = '<option value="">Select a previous theme</option>';
  themeHistory.forEach((entry, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = entry.label || `Theme ${index + 1}`;
    themeHistorySelect.appendChild(option);
  });
  if (applyThemeHistoryBtn) {
    applyThemeHistoryBtn.disabled = !themeHistory.length;
  }
};

const setThemeHistory = (history = []) => {
  themeHistory = normalizeThemeHistory(history);
  renderThemeHistory();
};

const recordThemeSnapshot = () => {
  const theme = getThemeFromInputs();
  if (themeHistory.length && themesEqual(themeHistory[0].theme, theme)) {
    return;
  }
  const label = `Saved ${new Date().toLocaleString()}`;
  themeHistory = [{ id: Date.now(), label, theme }, ...themeHistory].slice(0, 10);
  renderThemeHistory();
};

const showStatus = (message, tone = "info") => {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.dataset.tone = tone;
};

const confirmAction = (title, message, actionLabel = "Yes, Continue") =>
  new Promise((resolve) => {
    if (!confirmOverlay) {
      resolve(true);
      return;
    }
    confirmTitle.textContent = title;
    confirmMessage.textContent = message;
    confirmOk.textContent = actionLabel;
    confirmOverlay.classList.add("show");
    confirmOverlay.setAttribute("aria-hidden", "false");

    const handleClose = (result) => {
      confirmOverlay.classList.remove("show");
      confirmOverlay.setAttribute("aria-hidden", "true");
      confirmOk.removeEventListener("click", okHandler);
      confirmCancel.removeEventListener("click", cancelHandler);
      confirmOverlay.removeEventListener("click", backdropHandler);
      document.removeEventListener("keydown", escHandler);
      resolve(result);
    };

    const okHandler = () => handleClose(true);
    const cancelHandler = () => handleClose(false);
    const backdropHandler = (event) => {
      if (event.target === confirmOverlay) {
        handleClose(false);
      }
    };
    const escHandler = (event) => {
      if (event.key === "Escape") {
        handleClose(false);
      }
    };

    confirmOk.addEventListener("click", okHandler);
    confirmCancel.addEventListener("click", cancelHandler);
    confirmOverlay.addEventListener("click", backdropHandler);
    document.addEventListener("keydown", escHandler);
  });

const parseDurations = (value) =>
  String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const scheduleAutoSave = () => {
  if (!autoSaveEnabled) return;
  if (autoSaveTimer) clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    autoSaveTimer = null;
    saveToFirestore();
  }, 600);
};

const saveToFirestore = async () => {
  if (!dbRef || isSaving) return;
  isSaving = true;
  try {
    recordThemeSnapshot();
    await dbRef.set(collectData(), { merge: true });
    showStatus("Auto-saved to Firebase.");
  } catch (error) {
    showStatus("Auto-save failed. Check Firebase rules.", "warn");
  } finally {
    isSaving = false;
  }
};

const attachImageHandlers = (item, inputSelector, buttonSelector, fileSelector, previewSelector) => {
  const input = item.querySelector(inputSelector);
  const button = item.querySelector(buttonSelector);
  const fileInputEl = item.querySelector(fileSelector);
  const preview = item.querySelector(previewSelector);

  const updateImagePreview = () => {
    if (!preview) return;
    const url = input.value.trim();
    preview.innerHTML = "";
    if (!url) return;
    const img = document.createElement("img");
    img.alt = "Preview";
    img.src = url;
    preview.appendChild(img);
  };

  input.addEventListener("input", () => {
    updateImagePreview();
    updatePreview();
  });

  button.addEventListener("click", () => fileInputEl.click());
  fileInputEl.addEventListener("change", () => {
    const file = fileInputEl.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      input.value = reader.result;
      updateImagePreview();
      input.dispatchEvent(new Event("input", { bubbles: true }));
    };
    reader.readAsDataURL(file);
  });

  updateImagePreview();
};

const getInitials = (value = "") =>
  String(value || "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("") || "T";

const renderSummaryLogo = (target, name, logoUrl) => {
  if (!target) return;
  target.innerHTML = "";
  if (logoUrl) {
    const img = document.createElement("img");
    img.alt = name || "Logo";
    img.src = logoUrl;
    target.appendChild(img);
    return;
  }
  target.textContent = getInitials(name);
};

const bindInputUpdates = (elements, eventName = "input") => {
  elements.forEach((el) => {
    if (!el) return;
    el.addEventListener(eventName, updatePreview);
  });
};

const normalizeAnnouncementIconValue = (value) => {
  const text = String(value || "").trim();
  if (!text) return "";
  const map = {
    "\uD83D\uDD25": "bolt",
    "\uD83D\uDCF1": "chat",
    "\u26A1": "bolt",
    "\u2705": "check",
    "\u23F3": "clock",
    "\u23F0": "clock",
  };
  return map[text] || text;
};

const createAnnouncementItem = (item = {}) => {
  const icon = normalizeAnnouncementIconValue(item.icon) || "bolt";
  const title = item.title || "";
  const text = item.text || "";
  const wrapper = document.createElement("div");
  wrapper.className = "simple-item full announcement-item";
  wrapper.innerHTML = `
      <div class="field">
        <label>Icon Name or Logo Link</label>
        <input class="announcement-icon" type="text" placeholder="clock" value="${icon}" />
      </div>
      <div class="field">
        <label>Bold Text</label>
        <input class="announcement-title" type="text" placeholder="Limited slots today" value="${title}" />
      </div>
      <div class="field">
        <label>Line Text</label>
        <input class="announcement-text" type="text" placeholder="Delivery in 1-6 hours" value="${text}" />
      </div>
    <div class="row-actions">
      <button class="danger remove-item" type="button">Remove</button>
    </div>
  `;

  wrapper.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updatePreview);
  });
  wrapper.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Banner Item", "Remove this banner message.", "Yes, Delete");
    if (!ok) return;
    wrapper.remove();
    updatePreview();
  });

  return wrapper;
};

const createNavLinkItem = (link = {}) => {
  const item = document.createElement("div");
  item.className = "simple-item nav-link-item";
  item.innerHTML = `
    <div class="field">
      <label>Label</label>
      <input class="nav-link-label" type="text" placeholder="All Tools" value="${link.label || ""}" />
    </div>
    <div class="field">
      <label>Href</label>
      <input class="nav-link-href" type="text" placeholder="#tools" value="${link.href || ""}" />
    </div>
    <button class="danger remove-item" type="button">Remove</button>
  `;

  item.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updatePreview);
  });
  item.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Link", "Remove this nav link.", "Yes, Delete");
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  return item;
};

const createMetricItem = (metric = {}) => {
  const item = document.createElement("div");
  item.className = "simple-item metric-item";
  item.innerHTML = `
    <div class="field">
      <label>Value</label>
      <input class="metric-value" type="text" placeholder="85%" value="${metric.value || ""}" />
    </div>
    <div class="field">
      <label>Label</label>
      <input class="metric-label" type="text" placeholder="Avg. savings" value="${metric.label || ""}" />
    </div>
    <button class="danger remove-item" type="button">Remove</button>
  `;
  item.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updatePreview);
  });
  item.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Metric", "Remove this metric.", "Yes, Delete");
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  return item;
};

const createSimpleTextItem = (value = "", label = "Text", placeholder = "") => {
  const item = document.createElement("div");
  item.className = "simple-item single";
  item.innerHTML = `
    <div class="field">
      <label>${label}</label>
      <input class="simple-text" type="text" placeholder="${placeholder}" value="${value}" />
    </div>
    <button class="danger remove-item" type="button">Remove</button>
  `;
  item.querySelector("input").addEventListener("input", updatePreview);
  item.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Item", "Remove this item.", "Yes, Delete");
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  return item;
};

const createFeaturedItem = (item = {}) => {
  const name = typeof item === "string" ? item : item?.name || "";
  const logo = typeof item === "string" ? "" : item?.logo || "";
  const wrapper = document.createElement("div");
  wrapper.className = "featured-item";
  wrapper.innerHTML = `
    <div class="field">
      <label>Tool Name</label>
      <input class="featured-name" type="text" placeholder="ChatGPT" value="${name}" />
    </div>
    <div class="field">
      <label>Logo URL</label>
      <div class="field-row">
        <input class="featured-logo" type="text" placeholder="https://..." value="${logo}" />
        <button class="ghost upload-featured" type="button">Upload</button>
        <input class="featured-file" type="file" accept="image/*" hidden />
      </div>
      <div class="image-preview featured-logo-preview"></div>
    </div>
    <div class="featured-actions">
      <div class="featured-preview"></div>
      <button class="danger remove-item" type="button">Remove</button>
    </div>
  `;

  const nameInput = wrapper.querySelector(".featured-name");
  const logoInput = wrapper.querySelector(".featured-logo");
  const preview = wrapper.querySelector(".featured-preview");

  const updatePreviewLogo = () => {
    if (!preview) return;
    preview.innerHTML = "";
    const url = logoInput.value.trim();
    if (url) {
      const img = document.createElement("img");
      img.alt = nameInput.value.trim() || "Logo";
      img.src = url;
      preview.appendChild(img);
      return;
    }
    preview.textContent = getInitials(nameInput.value);
  };

  nameInput.addEventListener("input", () => {
    updatePreviewLogo();
    updatePreview();
  });

  logoInput.addEventListener("input", () => {
    updatePreviewLogo();
    updatePreview();
  });

  attachImageHandlers(
    wrapper,
    ".featured-logo",
    ".upload-featured",
    ".featured-file",
    ".featured-logo-preview"
  );

  wrapper.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Chip", "Remove this featured tool chip.", "Yes, Delete");
    if (!ok) return;
    wrapper.remove();
    updatePreview();
  });

  updatePreviewLogo();
  return wrapper;
};

const createAlertItem = (alert = {}) => {
  const item = document.createElement("div");
  item.className = "simple-item full alert-item";
  const useTimer = Boolean(alert.useTimer);
  item.innerHTML = `
    <div class="two-col">
      <div class="field">
        <label>Title</label>
        <input class="alert-title" type="text" placeholder="Offer ends in" value="${alert.title || ""}" />
      </div>
      <div class="field">
        <label>Value</label>
        <input class="alert-value" type="text" placeholder="Only 4 slots left today" value="${
          alert.value || ""
        }" />
      </div>
    </div>
    <div class="inline-row">
      <label class="toggle">
        <input class="alert-timer" type="checkbox" ${useTimer ? "checked" : ""} />
        Use countdown timer
      </label>
      <button class="danger remove-item" type="button">Remove</button>
    </div>
  `;
  item.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updatePreview);
    input.addEventListener("change", updatePreview);
  });
  item.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete Alert", "Remove this alert.", "Yes, Delete");
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  return item;
};

const createFaqItem = (faq = {}) => {
  const item = document.createElement("div");
  item.className = "simple-item full faq-item";
  const iconIndex = Number.isFinite(faq.icon) ? faq.icon : 0;
  const options = FAQ_ICON_LABELS.map(
    (label, idx) => `<option value="${idx}">${idx + 1}. ${label}</option>`
  ).join("");
  item.innerHTML = `
    <div class="field">
      <label>Question</label>
      <input class="faq-question" type="text" placeholder="FAQ question" value="${faq.question || ""}" />
    </div>
    <div class="field">
      <label>Answer</label>
      <textarea class="faq-answer" rows="3" placeholder="FAQ answer">${
        faq.answer || ""
      }</textarea>
    </div>
    <div class="inline-row">
      <div class="field">
        <label>Icon</label>
        <select class="faq-icon-select">${options}</select>
      </div>
      <button class="danger remove-item" type="button">Remove</button>
    </div>
  `;
  const select = item.querySelector(".faq-icon-select");
  select.value = String(Math.min(Math.max(iconIndex, 0), FAQ_ICON_LABELS.length - 1));
  item.querySelectorAll("input, textarea, select").forEach((input) => {
    input.addEventListener("input", updatePreview);
    input.addEventListener("change", updatePreview);
  });
  item.querySelector(".remove-item").addEventListener("click", async () => {
    const ok = await confirmAction("Delete FAQ", "Remove this FAQ item.", "Yes, Delete");
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  return item;
};

const createToolItem = (tool = {}, isNew = false) => {
  const item = document.createElement("div");
  item.className = `tool-item${isNew ? "" : " is-collapsed"}`;

  const durations = Array.isArray(tool.durations) ? tool.durations : [];
  const durationEnabled = durations.length > 0;

  item.innerHTML = `
    <div class="item-header">
      <div class="item-summary">
        <div class="summary-logo tool-summary-logo"></div>
        <div class="summary-text">
          <span class="summary-title tool-summary-title">${tool.name || "New tool"}</span>
          <span class="summary-sub tool-summary-sub"></span>
        </div>
      </div>
      <div class="item-actions">
        <button class="ghost toggle-item" type="button">Edit</button>
        <button class="danger remove-tool" type="button">Remove</button>
      </div>
    </div>
    <div class="item-body">
      <div class="tool-grid">
        <div class="field">
          <label>Tool Name</label>
          <input class="tool-name" type="text" placeholder="ChatGPT" value="${tool.name || ""}" />
        </div>
        <div class="field">
          <label>Logo URL</label>
          <div class="field-row">
            <input class="tool-logo" type="text" placeholder="https://..." value="${tool.logo || ""}" />
            <button class="ghost upload-logo" type="button">Upload</button>
            <input class="logo-file" type="file" accept="image/*" hidden />
          </div>
          <div class="image-preview tool-logo-preview"></div>
        </div>
        <div class="field">
          <label>Our Price</label>
          <input class="tool-price" type="text" placeholder="Rs. 699" value="${tool.price || ""}" />
        </div>
        <div class="field">
          <label>Original Price</label>
          <input class="tool-original" type="text" placeholder="Rs. 1499" value="${tool.original || ""}" />
        </div>
      </div>
      <div class="inline-row">
        <label class="toggle">
          <input class="tool-duration-toggle" type="checkbox" ${durationEnabled ? "checked" : ""} />
          Enable duration dropdown
        </label>
      </div>
      <div class="field durations-field">
        <label>Durations (comma separated)</label>
        <input
          class="tool-durations"
          type="text"
          placeholder="1 month, 3 months, 6 months"
          value="${durations.join(", ")}"
        />
        <span class="note">Turn off the toggle above to hide the dropdown.</span>
      </div>
      <div class="field single-duration-field">
        <label>Single duration (shown when dropdown off)</label>
        <input
          class="tool-default-duration"
          type="text"
          placeholder="1 month"
          value="${tool.defaultDuration || ""}"
        />
      </div>
    </div>
  `;

  const toggle = item.querySelector(".tool-duration-toggle");
  const durationsField = item.querySelector(".durations-field");
  const singleDurationField = item.querySelector(".single-duration-field");
  const removeBtn = item.querySelector(".remove-tool");
  const toggleBtn = item.querySelector(".toggle-item");
  const summaryTitle = item.querySelector(".tool-summary-title");
  const summarySub = item.querySelector(".tool-summary-sub");
  const summaryLogo = item.querySelector(".tool-summary-logo");
  const nameInput = item.querySelector(".tool-name");
  const logoInput = item.querySelector(".tool-logo");
  const priceInput = item.querySelector(".tool-price");
  const durationInput = item.querySelector(".tool-durations");
  const defaultDurationInput = item.querySelector(".tool-default-duration");
  const summaryBlock = item.querySelector(".item-summary");

  const syncDurationVisibility = () => {
    durationsField.style.display = toggle.checked ? "grid" : "none";
    singleDurationField.style.display = toggle.checked ? "none" : "grid";
  };

  toggle.addEventListener("change", () => {
    syncDurationVisibility();
    updatePreview();
  });

  const updateSummary = () => {
    const name = nameInput.value.trim() || "New tool";
    const logo = logoInput.value.trim();
    summaryTitle.textContent = name;
    summarySub.textContent = "";
    renderSummaryLogo(summaryLogo, name, logo);
  };

  item.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      updatePreview();
      updateSummary();
    });
  });

  attachImageHandlers(item, ".tool-logo", ".upload-logo", ".logo-file", ".tool-logo-preview");

  removeBtn.addEventListener("click", async () => {
    const ok = await confirmAction(
      "Delete Tool",
      "This will remove the tool from the website. Continue?",
      "Yes, Delete"
    );
    if (!ok) return;
    item.remove();
    updatePreview();
  });

  const toggleItem = () => {
    item.classList.toggle("is-collapsed");
    toggleBtn.textContent = item.classList.contains("is-collapsed") ? "Edit" : "Close";
  };

  toggleBtn.addEventListener("click", toggleItem);
  summaryBlock.addEventListener("click", toggleItem);

  syncDurationVisibility();
  updateSummary();
  return item;
};

const createProofItem = (proof = {}, isNew = false) => {
  const item = document.createElement("div");
  item.className = `proof-item${isNew ? "" : " is-collapsed"}`;
  const labelValue = typeof proof === "string" ? proof : proof?.label || "";
  const imageValue = typeof proof === "string" ? "" : proof?.image || "";
  item.innerHTML = `
    <div class="item-header">
      <div class="item-summary">
        <div class="summary-logo proof-summary-logo"></div>
        <div class="summary-text">
          <span class="summary-title proof-summary-title">${labelValue || "New proof"}</span>
          <span class="summary-sub proof-summary-sub"></span>
        </div>
      </div>
      <div class="item-actions">
        <button class="ghost toggle-item" type="button">Edit</button>
        <button class="danger remove-proof" type="button">Remove</button>
      </div>
    </div>
    <div class="item-body">
      <div class="proof-row">
        <div class="field">
          <label>Proof Label</label>
          <input class="proof-label" type="text" placeholder="Proof 01" value="${labelValue}" />
        </div>
        <div class="field">
          <label>Image URL</label>
          <div class="field-row">
            <input class="proof-image" type="text" placeholder="https://..." value="${imageValue}" />
            <button class="ghost upload-proof" type="button">Upload</button>
            <input class="proof-file" type="file" accept="image/*" hidden />
          </div>
          <div class="image-preview proof-image-preview"></div>
        </div>
      </div>
    </div>
  `;

  const toggleBtn = item.querySelector(".toggle-item");
  const summaryTitle = item.querySelector(".proof-summary-title");
  const summarySub = item.querySelector(".proof-summary-sub");
  const summaryLogo = item.querySelector(".proof-summary-logo");
  const labelInput = item.querySelector(".proof-label");
  const imageInput = item.querySelector(".proof-image");
  const summaryBlock = item.querySelector(".item-summary");

  const updateSummary = () => {
    const label = labelInput.value.trim() || "New proof";
    const image = imageInput.value.trim();
    summaryTitle.textContent = label;
    summarySub.textContent = "";
    renderSummaryLogo(summaryLogo, label, image);
  };

  item.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      updatePreview();
      updateSummary();
    });
  });

  attachImageHandlers(item, ".proof-image", ".upload-proof", ".proof-file", ".proof-image-preview");

  item.querySelector(".remove-proof").addEventListener("click", async () => {
    const ok = await confirmAction(
      "Delete Proof",
      "This will remove the proof image from the website. Continue?",
      "Yes, Delete"
    );
    if (!ok) return;
    item.remove();
    updatePreview();
  });

  const toggleItem = () => {
    item.classList.toggle("is-collapsed");
    toggleBtn.textContent = item.classList.contains("is-collapsed") ? "Edit" : "Close";
  };
  toggleBtn.addEventListener("click", toggleItem);
  summaryBlock.addEventListener("click", toggleItem);
  updateSummary();
  return item;
};

const createReviewItem = (review = {}, isNew = false) => {
  const item = document.createElement("div");
  item.className = `review-item${isNew ? "" : " is-collapsed"}`;
  item.innerHTML = `
    <div class="item-header">
      <div class="item-summary">
        <div class="summary-logo review-summary-logo"></div>
        <div class="summary-text">
          <span class="summary-title review-summary-title">${review.name || "New review"}</span>
          <span class="summary-sub review-summary-sub"></span>
        </div>
      </div>
      <div class="item-actions">
        <button class="ghost toggle-item" type="button">Edit</button>
        <button class="danger remove-review" type="button">Remove</button>
      </div>
    </div>
    <div class="item-body">
      <div class="field">
        <label>Review Text</label>
        <textarea class="review-text" placeholder="Write the review...">${review.text || ""}</textarea>
      </div>
      <div class="review-row">
        <div class="field">
          <label>Name</label>
          <input class="review-name" type="text" placeholder="Name" value="${review.name || ""}" />
        </div>
        <div class="field">
          <label>Role</label>
          <input class="review-role" type="text" placeholder="Role or company" value="${
            review.role || ""
          }" />
        </div>
      </div>
    </div>
  `;

  const toggleBtn = item.querySelector(".toggle-item");
  const summaryTitle = item.querySelector(".review-summary-title");
  const summarySub = item.querySelector(".review-summary-sub");
  const summaryLogo = item.querySelector(".review-summary-logo");
  const nameInput = item.querySelector(".review-name");
  const textInput = item.querySelector(".review-text");
  const summaryBlock = item.querySelector(".item-summary");

  const updateSummary = () => {
    const name = nameInput.value.trim() || "New review";
    summaryTitle.textContent = name;
    summarySub.textContent = "";
    renderSummaryLogo(summaryLogo, name, "");
  };

  item.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      updatePreview();
      updateSummary();
    });
  });
  item.querySelector(".remove-review").addEventListener("click", async () => {
    const ok = await confirmAction(
      "Delete Review",
      "This will remove the review from the website. Continue?",
      "Yes, Delete"
    );
    if (!ok) return;
    item.remove();
    updatePreview();
  });
  const toggleItem = () => {
    item.classList.toggle("is-collapsed");
    toggleBtn.textContent = item.classList.contains("is-collapsed") ? "Edit" : "Close";
  };
  toggleBtn.addEventListener("click", toggleItem);
  summaryBlock.addEventListener("click", toggleItem);
  updateSummary();
  return item;
};

const setTools = (tools = []) => {
  toolsList.innerHTML = "";
  tools.forEach((tool) => toolsList.appendChild(createToolItem(normalizeToolCurrency(tool))));
};

const setProofs = (proofs = []) => {
  proofsList.innerHTML = "";
  proofs.forEach((proof) => proofsList.appendChild(createProofItem(proof)));
};

const setReviews = (reviews = []) => {
  reviewsList.innerHTML = "";
  reviews.forEach((review) => reviewsList.appendChild(createReviewItem(review)));
};

const setContent = (content = defaultContent) => {
  if (!content) return;
  if (navLogoTextInput) navLogoTextInput.value = content.nav?.logoText || "";
  if (navContactLabelInput) navContactLabelInput.value = content.nav?.contactLabel || "";
  if (navLinksList) {
    navLinksList.innerHTML = "";
    (content.nav?.links || []).forEach((link) => navLinksList.appendChild(createNavLinkItem(link)));
  }

  if (announcementEnabledToggle)
    announcementEnabledToggle.checked = content.announcement?.enabled !== false;
  if (announcementDirectionSelect)
    announcementDirectionSelect.value =
      content.announcement?.direction || defaultContent.announcement.direction;
  if (announcementCtaLabelInput)
    announcementCtaLabelInput.value = content.announcement?.ctaLabel || "";
  if (announcementCtaUrlInput)
    announcementCtaUrlInput.value = content.announcement?.ctaUrl || "";
  if (announcementItemsList) {
    announcementItemsList.innerHTML = "";
    const announcementItems =
      content.announcement?.items?.length ? content.announcement.items : defaultContent.announcement.items;
    announcementItems.forEach((item) =>
      announcementItemsList.appendChild(createAnnouncementItem(item))
    );
  }

  if (heroEyebrowInput) heroEyebrowInput.value = content.hero?.eyebrow || "";
  if (heroTitleInput) heroTitleInput.value = content.hero?.title || "";
  if (heroSubtitleInput) heroSubtitleInput.value = content.hero?.subtitle || "";
  if (heroSubheadPrefixInput) heroSubheadPrefixInput.value = content.hero?.subheadPrefix || "";
  if (heroHighlightInput) heroHighlightInput.value = content.hero?.highlightText || "";
  if (heroHighlightStyleSelect)
    heroHighlightStyleSelect.value = content.hero?.highlightStyle || defaultContent.hero.highlightStyle;
  if (heroHighlightMotionSelect)
    heroHighlightMotionSelect.value =
      content.hero?.highlightMotion || defaultContent.hero.highlightMotion;
  if (heroSubheadSuffixInput) heroSubheadSuffixInput.value = content.hero?.subheadSuffix || "";
  if (heroBrandInlineInput) heroBrandInlineInput.value = content.hero?.brandInline || "";
  if (heroPrimaryCtaInput) heroPrimaryCtaInput.value = content.hero?.primaryCta || "";
  if (heroSecondaryCtaInput) heroSecondaryCtaInput.value = content.hero?.secondaryCta || "";
  if (heroCardTitleInput) heroCardTitleInput.value = content.heroCard?.title || "";

  if (metricsList) {
    metricsList.innerHTML = "";
    (content.heroCard?.metrics || []).forEach((metric) =>
      metricsList.appendChild(createMetricItem(metric))
    );
  }

  if (featuredList) {
    featuredList.innerHTML = "";
    (content.featuredTools || []).forEach((item) =>
      featuredList.appendChild(createFeaturedItem(item))
    );
  }

  if (alertsList) {
    alertsList.innerHTML = "";
    (content.alerts || []).forEach((alert) => alertsList.appendChild(createAlertItem(alert)));
  }

  if (reviewsTitleInput) reviewsTitleInput.value = content.headings?.reviewsTitle || "";
  if (toolsLabelInput) toolsLabelInput.value = content.headings?.toolsLabel || "";
  if (toolsTitleInput) toolsTitleInput.value = content.headings?.toolsTitle || "";
  if (viewAllLabelInput) viewAllLabelInput.value = content.headings?.viewAllLabel || "";
  if (toolsModalTitleInput) toolsModalTitleInput.value = content.headings?.toolsModalTitle || "";
  if (toolsSearchPlaceholderInput)
    toolsSearchPlaceholderInput.value = content.headings?.toolsSearchPlaceholder || "";
  if (proofsLabelInput) proofsLabelInput.value = content.headings?.proofsLabel || "";
  if (proofsTitleInput) proofsTitleInput.value = content.headings?.proofsTitle || "";
  if (faqLabelInput) faqLabelInput.value = content.headings?.faqLabel || "";
  if (faqTitleInput) faqTitleInput.value = content.headings?.faqTitle || "";
  if (faqIntroInput) faqIntroInput.value = content.headings?.faqIntro || "";

  if (faqList) {
    faqList.innerHTML = "";
    (content.faq || []).forEach((faq) => faqList.appendChild(createFaqItem(faq)));
  }

  if (contactLabelInput) contactLabelInput.value = content.headings?.contactLabel || "";
  if (contactTitleInput) contactTitleInput.value = content.headings?.contactTitle || "";
  if (contactSubheadInput) contactSubheadInput.value = content.headings?.contactSubhead || "";
  if (contactCtaInput) contactCtaInput.value = content.headings?.contactCta || "";

  if (contactPointsList) {
    contactPointsList.innerHTML = "";
    (content.contactPoints || []).forEach((item) =>
      contactPointsList.appendChild(createSimpleTextItem(item, "Point", "Fast replies"))
    );
  }

  if (popupTitleInput) popupTitleInput.value = content.popup?.title || "";
  if (popupSubtitlePrefixInput) popupSubtitlePrefixInput.value = content.popup?.subtitlePrefix || "";
  if (popupSubtitleStrongInput) popupSubtitleStrongInput.value = content.popup?.subtitleStrong || "";
  if (popupSubtitleSuffixInput) popupSubtitleSuffixInput.value = content.popup?.subtitleSuffix || "";
  if (popupBadgeInput) popupBadgeInput.value = content.popup?.badge || "";
  if (popupDiscountNumberInput) popupDiscountNumberInput.value = content.popup?.discountNumber || "";
  if (popupDiscountTextInput) popupDiscountTextInput.value = content.popup?.discountText || "";
  if (popupDescriptionInput) popupDescriptionInput.value = content.popup?.description || "";
  if (popupCodeLabelInput) popupCodeLabelInput.value = content.popup?.codeLabel || "";
  if (popupCodeValueInput) popupCodeValueInput.value = content.popup?.codeValue || "";
  if (popupClaimLabelInput) popupClaimLabelInput.value = content.popup?.claimLabel || "";
  if (popupDeclineLabelInput) popupDeclineLabelInput.value = content.popup?.declineLabel || "";
  if (popupUrgencyInput) popupUrgencyInput.value = content.popup?.urgency || "";

  if (popupBenefitsList) {
    popupBenefitsList.innerHTML = "";
    (content.popup?.benefits || []).forEach((item) =>
      popupBenefitsList.appendChild(createSimpleTextItem(item, "Benefit", "Instant delivery"))
    );
  }

  if (whatsappNavMessageInput)
    whatsappNavMessageInput.value = content.whatsapp?.navMessage || "";
  if (whatsappPopupMessageInput)
    whatsappPopupMessageInput.value = content.whatsapp?.popupMessage || "";
  if (whatsappToolTemplateInput)
    whatsappToolTemplateInput.value = content.whatsapp?.toolMessageTemplate || "";

  if (seoTitleInput) seoTitleInput.value = content.seo?.title || "";
  if (seoDescriptionInput) seoDescriptionInput.value = content.seo?.description || "";
  if (seoOgTitleInput) seoOgTitleInput.value = content.seo?.ogTitle || "";
  if (seoOgDescriptionInput) seoOgDescriptionInput.value = content.seo?.ogDescription || "";
  if (seoTwitterTitleInput) seoTwitterTitleInput.value = content.seo?.twitterTitle || "";
  if (seoTwitterDescriptionInput)
    seoTwitterDescriptionInput.value = content.seo?.twitterDescription || "";

  const theme = content.theme || defaultContent.theme;
  applyThemeToInputs(theme);
  setThemeHistory(content.themeHistory);

  const animations = content.animations || defaultContent.animations;
  if (featuredMotionSelect) featuredMotionSelect.value = animations.featured || "1";
  if (proofsMotionSelect) proofsMotionSelect.value = animations.proofs || "1";
  if (reviewsMotionSelect) reviewsMotionSelect.value = animations.reviews || "1";
  if (announcementMotionSelect)
    announcementMotionSelect.value = animations.announcement || "1";
  if (toolsMotionSelect) toolsMotionSelect.value = animations.tools || "1";
};

const collectContent = () => {
  const links = Array.from(navLinksList?.querySelectorAll(".nav-link-item") || [])
    .map((item) => ({
      label: item.querySelector(".nav-link-label")?.value.trim(),
      href: item.querySelector(".nav-link-href")?.value.trim(),
    }))
    .filter((link) => link.label || link.href);

  const metrics = Array.from(metricsList?.querySelectorAll(".metric-item") || [])
    .map((item) => ({
      value: item.querySelector(".metric-value")?.value.trim(),
      label: item.querySelector(".metric-label")?.value.trim(),
    }))
    .filter((metric) => metric.value || metric.label);

  const featuredTools = Array.from(featuredList?.querySelectorAll(".featured-item") || [])
    .map((item) => ({
      name: item.querySelector(".featured-name")?.value.trim(),
      logo: item.querySelector(".featured-logo")?.value.trim() || "",
    }))
    .filter((entry) => entry.name);

  const announcementItems = Array.from(
    announcementItemsList?.querySelectorAll(".announcement-item") || []
  )
    .map((item) => ({
      icon: normalizeAnnouncementIconValue(
        item.querySelector(".announcement-icon")?.value.trim()
      ),
      title: item.querySelector(".announcement-title")?.value.trim(),
      text: item.querySelector(".announcement-text")?.value.trim(),
    }))
    .filter((entry) => entry.icon || entry.title || entry.text);

  const alerts = Array.from(alertsList?.querySelectorAll(".alert-item") || [])
    .map((item) => ({
      title: item.querySelector(".alert-title")?.value.trim(),
      value: item.querySelector(".alert-value")?.value.trim(),
      useTimer: item.querySelector(".alert-timer")?.checked || false,
    }))
    .filter((alert) => alert.title || alert.value);

  const faq = Array.from(faqList?.querySelectorAll(".faq-item") || [])
    .map((item) => ({
      question: item.querySelector(".faq-question")?.value.trim(),
      answer: item.querySelector(".faq-answer")?.value.trim(),
      icon: Number(item.querySelector(".faq-icon-select")?.value || 0),
    }))
    .filter((entry) => entry.question || entry.answer);

  const contactPoints = Array.from(contactPointsList?.querySelectorAll(".simple-text") || [])
    .map((input) => input.value.trim())
    .filter(Boolean);

  const popupBenefits = Array.from(popupBenefitsList?.querySelectorAll(".simple-text") || [])
    .map((input) => input.value.trim())
    .filter(Boolean);

  return {
    nav: {
      logoText: navLogoTextInput?.value.trim() || "",
      contactLabel: navContactLabelInput?.value.trim() || "",
      links,
    },
    announcement: {
      enabled:
        typeof announcementEnabledToggle?.checked === "boolean"
          ? announcementEnabledToggle.checked
          : defaultContent.announcement.enabled,
      direction:
        announcementDirectionSelect?.value === "left" || announcementDirectionSelect?.value === "right"
          ? announcementDirectionSelect.value
          : defaultContent.announcement.direction,
      ctaLabel: announcementCtaLabelInput?.value.trim() || "",
      ctaUrl: announcementCtaUrlInput?.value.trim() || "",
      items: announcementItems,
    },
    hero: {
      eyebrow: heroEyebrowInput?.value.trim() || "",
      title: heroTitleInput?.value.trim() || "",
      subtitle: heroSubtitleInput?.value.trim() || "",
      subheadPrefix: heroSubheadPrefixInput?.value.trim() || "",
      highlightText: heroHighlightInput?.value.trim() || "",
      highlightStyle:
        heroHighlightStyleSelect?.value || defaultContent.hero.highlightStyle,
      highlightMotion:
        heroHighlightMotionSelect?.value || defaultContent.hero.highlightMotion,
      subheadSuffix: heroSubheadSuffixInput?.value.trim() || "",
      brandInline: heroBrandInlineInput?.value.trim() || "",
      primaryCta: heroPrimaryCtaInput?.value.trim() || "",
      secondaryCta: heroSecondaryCtaInput?.value.trim() || "",
    },
    heroCard: {
      title: heroCardTitleInput?.value.trim() || "",
      metrics,
    },
    featuredTools,
    alerts,
    headings: {
      reviewsTitle: reviewsTitleInput?.value.trim() || "",
      toolsLabel: toolsLabelInput?.value.trim() || "",
      toolsTitle: toolsTitleInput?.value.trim() || "",
      viewAllLabel: viewAllLabelInput?.value.trim() || "",
      toolsModalTitle: toolsModalTitleInput?.value.trim() || "",
      toolsSearchPlaceholder: toolsSearchPlaceholderInput?.value.trim() || "",
      proofsLabel: proofsLabelInput?.value.trim() || "",
      proofsTitle: proofsTitleInput?.value.trim() || "",
      faqLabel: faqLabelInput?.value.trim() || "",
      faqTitle: faqTitleInput?.value.trim() || "",
      faqIntro: faqIntroInput?.value.trim() || "",
      contactLabel: contactLabelInput?.value.trim() || "",
      contactTitle: contactTitleInput?.value.trim() || "",
      contactSubhead: contactSubheadInput?.value.trim() || "",
      contactCta: contactCtaInput?.value.trim() || "",
    },
    faq,
    contactPoints,
    popup: {
      title: popupTitleInput?.value.trim() || "",
      subtitlePrefix: popupSubtitlePrefixInput?.value.trim() || "",
      subtitleStrong: popupSubtitleStrongInput?.value.trim() || "",
      subtitleSuffix: popupSubtitleSuffixInput?.value.trim() || "",
      badge: popupBadgeInput?.value.trim() || "",
      discountNumber: popupDiscountNumberInput?.value.trim() || "",
      discountText: popupDiscountTextInput?.value.trim() || "",
      description: popupDescriptionInput?.value.trim() || "",
      codeLabel: popupCodeLabelInput?.value.trim() || "",
      codeValue: popupCodeValueInput?.value.trim() || "",
      benefits: popupBenefits,
      claimLabel: popupClaimLabelInput?.value.trim() || "",
      declineLabel: popupDeclineLabelInput?.value.trim() || "",
      urgency: popupUrgencyInput?.value.trim() || "",
    },
    whatsapp: {
      navMessage: whatsappNavMessageInput?.value.trim() || "",
      popupMessage: whatsappPopupMessageInput?.value.trim() || "",
      toolMessageTemplate: whatsappToolTemplateInput?.value.trim() || "",
    },
    seo: {
      title: seoTitleInput?.value.trim() || "",
      description: seoDescriptionInput?.value.trim() || "",
      ogTitle: seoOgTitleInput?.value.trim() || "",
      ogDescription: seoOgDescriptionInput?.value.trim() || "",
      twitterTitle: seoTwitterTitleInput?.value.trim() || "",
      twitterDescription: seoTwitterDescriptionInput?.value.trim() || "",
    },
    theme: {
      accent1: themeAccent1Input?.value?.trim() || defaultContent.theme.accent1,
      accent2: themeAccent2Input?.value?.trim() || defaultContent.theme.accent2,
      accent3: themeAccent3Input?.value?.trim() || defaultContent.theme.accent3,
      highlight1: themeHighlight1Input?.value?.trim() || defaultContent.theme.highlight1,
      highlight2: themeHighlight2Input?.value?.trim() || defaultContent.theme.highlight2,
      highlight3: themeHighlight3Input?.value?.trim() || defaultContent.theme.highlight3,
      glowColor: themeGlowInput?.value?.trim() || defaultContent.theme.glowColor,
      bgRadial1: themeBgRadial1Input?.value?.trim() || defaultContent.theme.bgRadial1,
      bgRadial2: themeBgRadial2Input?.value?.trim() || defaultContent.theme.bgRadial2,
      bgLinear1: themeBgLinear1Input?.value?.trim() || defaultContent.theme.bgLinear1,
      bgLinear2: themeBgLinear2Input?.value?.trim() || defaultContent.theme.bgLinear2,
      bgLinear3: themeBgLinear3Input?.value?.trim() || defaultContent.theme.bgLinear3,
    },
    animations: {
      featured: featuredMotionSelect?.value || defaultContent.animations.featured,
      proofs: proofsMotionSelect?.value || defaultContent.animations.proofs,
      reviews: reviewsMotionSelect?.value || defaultContent.animations.reviews,
      announcement:
        announcementMotionSelect?.value || defaultContent.animations.announcement,
      tools: toolsMotionSelect?.value || defaultContent.animations.tools,
    },
    themeHistory,
  };
};

const collectData = () => {
  const toolItems = Array.from(toolsList.querySelectorAll(".tool-item"));
  const tools = toolItems
    .map((item) => {
      const name = item.querySelector(".tool-name").value.trim();
      if (!name) return null;
      const logo = item.querySelector(".tool-logo").value.trim();
      const price = item.querySelector(".tool-price").value.trim();
      const original = item.querySelector(".tool-original").value.trim();
      const durationToggle = item.querySelector(".tool-duration-toggle").checked;
      const durationsValue = item.querySelector(".tool-durations").value;
      const defaultDurationValue = item.querySelector(".tool-default-duration").value.trim();
      const durations = durationToggle ? parseDurations(durationsValue) : [];
      const tool = { name };
      if (logo) tool.logo = logo;
      if (price) tool.price = price;
      if (original) tool.original = original;
      if (durations.length > 0) tool.durations = durations;
      if (!durationToggle && defaultDurationValue) {
        tool.defaultDuration = defaultDurationValue;
      }
      return tool;
    })
    .filter(Boolean);

  const proofItems = Array.from(proofsList.querySelectorAll(".proof-item"));
  const proofs = proofItems
    .map((item) => {
      const label = item.querySelector(".proof-label").value.trim();
      const image = item.querySelector(".proof-image").value.trim();
      if (!label && !image) return null;
      return {
        label: label || "Proof",
        image,
      };
    })
    .filter(Boolean);

  const reviewItems = Array.from(reviewsList.querySelectorAll(".review-item"));
  const textReviews = reviewItems
    .map((item) => {
      const text = item.querySelector(".review-text").value.trim();
      const name = item.querySelector(".review-name").value.trim();
      const role = item.querySelector(".review-role").value.trim();
      if (!text || !name) return null;
      return { text, name, role };
    })
    .filter(Boolean);

  return {
    tools,
    proofs,
    textReviews,
    proofsDirection: proofsDirectionSelect?.value || "left",
    content: collectContent(),
  };
};

const updatePreview = () => {
  if (jsonOutput) {
    jsonOutput.value = JSON.stringify(collectData(), null, 2);
  }
  scheduleAutoSave();
};

const loadFromFirestore = async () => {
  try {
    if (!dbRef) throw new Error("Firestore not ready");
    const snapshot = await dbRef.get();
    const data = mergeDefaults(snapshot.exists ? snapshot.data() : {});
    setTools(Array.isArray(data.tools) ? data.tools : []);
    setProofs(Array.isArray(data.proofs) ? data.proofs : []);
    setReviews(Array.isArray(data.textReviews) ? data.textReviews : []);
    setContent(data.content || defaultContent);
    if (proofsDirectionSelect) {
      proofsDirectionSelect.value = data.proofsDirection || "left";
    }
    updatePreview();
    showStatus("Loaded data from Firebase.");
    if (!snapshot.exists) {
      await dbRef.set(data, { merge: true });
    }
  } catch (error) {
    showStatus("Could not load Firebase data.", "warn");
  }
};

const saveWithFilePicker = async () => {
  await saveToFirestore();
};

const handleSave = async () => {
  const ok = await confirmAction(
    "Save Changes",
    "Save all changes to the website in real time.",
    "Yes, Save"
  );
  if (!ok) return;
  saveWithFilePicker();
};

loadDataBtn?.addEventListener("click", loadFromFirestore);
saveDataBtn?.addEventListener("click", handleSave);
logoutBtn?.addEventListener("click", () => {
  clearAuth();
  window.location.href = new URL("login/", window.location.href).toString();
});
addToolBtn?.addEventListener("click", () => {
  toolsList.appendChild(createToolItem({}, true));
  updatePreview();
});
addProofBtn?.addEventListener("click", () => {
  proofsList.appendChild(createProofItem({}, true));
  updatePreview();
});
addReviewBtn?.addEventListener("click", () => {
  reviewsList.appendChild(createReviewItem({}, true));
  updatePreview();
});
refreshPreviewBtn?.addEventListener("click", updatePreview);
proofsDirectionSelect?.addEventListener("change", updatePreview);
addAnnouncementItemBtn?.addEventListener("click", () => {
  announcementItemsList?.appendChild(createAnnouncementItem({}));
  updatePreview();
});
announcementEnabledToggle?.addEventListener("change", updatePreview);
addNavLinkBtn?.addEventListener("click", () => {
  navLinksList?.appendChild(createNavLinkItem({}));
  updatePreview();
});
addMetricBtn?.addEventListener("click", () => {
  metricsList?.appendChild(createMetricItem({}));
  updatePreview();
});
addFeaturedBtn?.addEventListener("click", () => {
  featuredList?.appendChild(createFeaturedItem({}));
  updatePreview();
});
addAlertBtn?.addEventListener("click", () => {
  alertsList?.appendChild(createAlertItem({}));
  updatePreview();
});
addFaqBtn?.addEventListener("click", () => {
  faqList?.appendChild(createFaqItem({}));
  updatePreview();
});
addContactPointBtn?.addEventListener("click", () => {
  contactPointsList?.appendChild(createSimpleTextItem("", "Point", "Fast replies"));
  updatePreview();
});
addPopupBenefitBtn?.addEventListener("click", () => {
  popupBenefitsList?.appendChild(createSimpleTextItem("", "Benefit", "Instant delivery"));
  updatePreview();
});
applyThemeHistoryBtn?.addEventListener("click", () => {
  if (!themeHistorySelect || themeHistorySelect.value === "") return;
  const index = Number(themeHistorySelect.value);
  const entry = themeHistory[index];
  if (!entry?.theme) return;
  applyThemeToInputs(entry.theme);
  updatePreview();
});
autoSaveToggle?.addEventListener("change", (event) => {
  autoSaveEnabled = event.target.checked;
  if (autoSaveEnabled) {
    showStatus("Auto-save enabled.");
    scheduleAutoSave();
  } else {
    showStatus("Auto-save paused. Use Save to Firebase.");
  }
});

const setupPanelToggles = () => {
  const panels = Array.from(document.querySelectorAll(".panel[data-collapsible='true']"));
  const setState = (panel, collapsed) => {
    const toggle = panel.querySelector(".panel-toggle");
    if (!toggle) return;
    panel.classList.toggle("is-collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.textContent = collapsed ? "Expand" : "Collapse";
  };

  panels.forEach((panel) => {
    const toggle = panel.querySelector(".panel-toggle");
    const body = panel.querySelector(".panel-body");
    if (!toggle || !body) return;

    setState(panel, panel.classList.contains("is-collapsed"));
    toggle.addEventListener("click", () => {
      const shouldExpand = panel.classList.contains("is-collapsed");
      if (shouldExpand) {
        panels.forEach((other) => {
          if (other !== panel) setState(other, true);
        });
      }
      setState(panel, !shouldExpand);
    });
  });
};

setupPanelToggles();

bindInputUpdates(
  [
    navLogoTextInput,
    navContactLabelInput,
    announcementCtaLabelInput,
    announcementCtaUrlInput,
    heroEyebrowInput,
    heroTitleInput,
    heroSubtitleInput,
    heroSubheadPrefixInput,
    heroHighlightInput,
    heroSubheadSuffixInput,
    heroBrandInlineInput,
    heroPrimaryCtaInput,
    heroSecondaryCtaInput,
    heroCardTitleInput,
    reviewsTitleInput,
    toolsLabelInput,
    toolsTitleInput,
    viewAllLabelInput,
    toolsModalTitleInput,
    toolsSearchPlaceholderInput,
    proofsLabelInput,
    proofsTitleInput,
    faqLabelInput,
    faqTitleInput,
    faqIntroInput,
    contactLabelInput,
    contactTitleInput,
    contactSubheadInput,
    contactCtaInput,
    popupTitleInput,
    popupSubtitlePrefixInput,
    popupSubtitleStrongInput,
    popupSubtitleSuffixInput,
    popupBadgeInput,
    popupDiscountNumberInput,
    popupDiscountTextInput,
    popupDescriptionInput,
    popupCodeLabelInput,
    popupCodeValueInput,
    popupClaimLabelInput,
    popupDeclineLabelInput,
    popupUrgencyInput,
    whatsappNavMessageInput,
    whatsappPopupMessageInput,
    whatsappToolTemplateInput,
    seoTitleInput,
    seoDescriptionInput,
    seoOgTitleInput,
    seoOgDescriptionInput,
    seoTwitterTitleInput,
    seoTwitterDescriptionInput,
    themeAccent1Input,
    themeAccent2Input,
    themeAccent3Input,
    themeHighlight1Input,
    themeHighlight2Input,
    themeHighlight3Input,
    themeGlowInput,
    themeBgRadial1Input,
    themeBgRadial2Input,
    themeBgLinear1Input,
    themeBgLinear2Input,
    themeBgLinear3Input,
  ],
  "input"
);

bindInputUpdates(
  [
    heroHighlightStyleSelect,
    heroHighlightMotionSelect,
    announcementDirectionSelect,
    announcementMotionSelect,
    featuredMotionSelect,
    proofsMotionSelect,
    reviewsMotionSelect,
    toolsMotionSelect,
  ],
  "change"
);

if (window.firebaseAuth && window.firebaseDb) {
  window.firebaseAuth.onAuthStateChanged((user) => {
    if (!user) return;
    dbRef = window.firebaseDb.collection("siteData").doc("current");
    loadFromFirestore();
  });
} else {
  showStatus("Firebase not ready. Refresh the page.", "warn");
}
