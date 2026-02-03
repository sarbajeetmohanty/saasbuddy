const CONTACT_NUMBER = "917325917706"; // WhatsApp number without +
const DEFAULT_DURATION = "1 month";
const DEFAULT_DISCOUNT_RATE = 0.15;
const DURATION_MULTIPLIERS = {
  "1 month": 1,
  "3 months": 2.7,
  "6 months": 5.1,
  "1 year": 9.5,
  "lifetime access": 15,
};

const tools = [
  {
    name: "ChatGPT",
    logo: "",
    price: "$9",
    original: "$20",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Claude",
    logo: "",
    price: "$11",
    original: "$24",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Higg Field",
    logo: "",
    price: "$12",
    original: "$29",
    durations: ["1 month", "6 months", "1 year"],
  },
  {
    name: "Midjourney",
    logo: "",
    price: "$16",
    original: "$30",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Perplexity",
    logo: "",
    price: "$8",
    original: "$20",
    durations: ["1 month", "3 months", "1 year"],
  },
  {
    name: "Notion AI",
    logo: "",
    price: "$6",
    original: "$12",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Runway",
    logo: "",
    price: "$14",
    original: "$28",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Synthesia",
    logo: "",
    price: "$18",
    original: "$40",
    durations: ["1 month", "3 months", "1 year"],
  },
  {
    name: "Gamma",
    logo: "",
    price: "$7",
    original: "$15",
    durations: ["1 month", "6 months", "1 year"],
  },
  {
    name: "Figma AI",
    logo: "",
    price: "$10",
    original: "$20",
  },
  {
    name: "Jasper",
    logo: "",
    price: "$13",
    original: "$39",
    durations: ["1 month", "3 months", "6 months", "1 year"],
  },
  {
    name: "Copy AI",
    logo: "",
    price: "$6",
    original: "$24",
  },
  {
    name: "Descript",
    logo: "",
    price: "$9",
    original: "$24",
    durations: ["1 month", "3 months", "6 months"],
  },
  {
    name: "Canva Pro",
    logo: "",
    price: "$6",
    original: "$13",
    durations: ["1 month", "6 months", "1 year", "lifetime access"],
  },
  {
    name: "Luma AI",
    logo: "",
    price: "$9",
    original: "$19",
  },
];

const toolsGrid = document.getElementById("toolsGrid");
const toolsGridModal = document.getElementById("toolsGridModal");
const viewAllBtn = document.getElementById("viewAllBtn");
const toolsModal = document.getElementById("toolsModal");
const toolsModalClose = document.getElementById("toolsModalClose");
const toolsModalBody = document.getElementById("toolsModalBody");
const searchWrap = document.getElementById("toolsSearch");
const searchInput = document.getElementById("toolsSearchInput");
const nav = document.querySelector(".nav");
const navContact = document.querySelector(".nav-contact");
const exitPopup = document.getElementById("exitPopup");
const exitPopupClose = exitPopup ? exitPopup.querySelector(".exit-popup-close") : null;
const exitPopupClaim = exitPopup ? exitPopup.querySelector(".claim-button") : null;
const exitPopupDecline = exitPopup ? exitPopup.querySelector(".decline-button") : null;
const mobileQuery = window.matchMedia("(max-width: 760px)");
const SCROLL_THRESHOLD = 12;

let expanded = false;
let query = "";

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

const parseMoney = (value) => {
  if (typeof value === "number") return value;
  const parsed = parseFloat(String(value).replace(/[^0-9.]/g, ""));
  return Number.isFinite(parsed) ? parsed : 0;
};

const formatMoney = (value) => `₹${Math.round(value)}`;

const getPricing = (tool, duration) => {
  if (tool.pricing && tool.pricing[duration]) {
    const override = tool.pricing[duration];
    return {
      our: formatMoney(parseMoney(override.our)),
      original: formatMoney(parseMoney(override.original)),
    };
  }
  const baseOriginal = parseMoney(tool.original);
  const multiplier = duration && DURATION_MULTIPLIERS[duration] ? DURATION_MULTIPLIERS[duration] : 1;
  const discountRate =
    typeof tool.discountRate === "number" ? tool.discountRate : DEFAULT_DISCOUNT_RATE;
  const originalValue = baseOriginal * multiplier;
  const ourValue = originalValue * discountRate;
  return {
    our: formatMoney(ourValue),
    original: formatMoney(originalValue),
  };
};

const updateCardPrice = (card, tool, duration) => {
  const priceEl = card.querySelector(".our-price");
  const originalEl = card.querySelector(".original-price");
  const pricing = getPricing(tool, duration);
  if (priceEl) priceEl.textContent = pricing.our;
  if (originalEl) originalEl.textContent = pricing.original;
};

const buildContactUrl = (toolName, duration) => {
  const message = `I want the ${toolName} tool for ${duration}`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_NUMBER}?text=${encoded}`;
};

const buildPlainContactUrl = (message) => {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_NUMBER}?text=${encoded}`;
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
    const initialDuration = hasDurations ? tool.durations[0] : null;
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
              ? `<select id="${selectId}" aria-label="Select duration for ${tool.name}">
                  ${tool.durations
                    .map((duration) => `<option value="${duration}">${duration}</option>`)
                    .join("")}
                </select>`
              : ""
          }
        </div>
      </div>
      <div class="tool-price">
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
      const select = card.querySelector("select");
      if (select) {
        select.value = initialDuration;
      }
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
  renderToolCards(toolsGridModal, filtered);
};

const openToolsModal = () => {
  if (!toolsModal) return;
  expanded = true;
  toolsModal.classList.add("show");
  document.body.classList.add("modal-open");
  renderModalTools();
  if (searchInput) {
    searchInput.focus();
  }
};

const closeToolsModal = () => {
  if (!toolsModal) return;
  expanded = false;
  toolsModal.classList.remove("show");
  document.body.classList.remove("modal-open");
  query = "";
  if (searchInput) {
    searchInput.value = "";
  }
  renderMainTools();
};

const updateNavHeight = () => {
  if (!nav) return;
  const height = nav.offsetHeight;
  document.documentElement.style.setProperty("--nav-height", `${height}px`);
};

const offerTimerEl = document.getElementById("offerTimer");
const startOfferTimer = () => {
  if (!offerTimerEl) return;
  const STORAGE_KEY = "saasBuddyOfferEnd";
  const now = Date.now();
  let endTime = Number(localStorage.getItem(STORAGE_KEY));
  if (!endTime || Number.isNaN(endTime)) {
    endTime = now + 45 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, String(endTime));
  }
  const formatTime = (time) => {
    const hrs = String(Math.floor(time / 3600)).padStart(2, "0");
    const mins = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
    const secs = String(time % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };
  const interval = setInterval(() => {
    const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
    offerTimerEl.textContent = formatTime(secondsLeft);
    if (secondsLeft <= 0) {
      offerTimerEl.textContent = "00:00:00";
      clearInterval(interval);
      return;
    }
  }, 1000);
  const secondsLeft = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
  offerTimerEl.textContent = formatTime(secondsLeft);
};

const NAV_CONTACT_MESSAGE = "i want at ai tools";
const POPUP_CONTACT_MESSAGE = "hey, saas buddy i want the tool at 5% more extra discount";

const openExitPopup = () => {
  if (!exitPopup) return;
  exitPopup.classList.add("show");
};

const closeExitPopup = () => {
  if (!exitPopup) return;
  exitPopup.classList.remove("show");
};

const scheduleExitPopup = () => {
  if (!exitPopup) return;
  setTimeout(() => {
    openExitPopup();
  }, 15000);
};

viewAllBtn.addEventListener("click", openToolsModal);

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

mobileQuery.addEventListener("change", () => {
  if (!expanded) {
    renderMainTools();
  } else {
    renderModalTools();
  }
});

const handleGridClick = (event) => {
  const button = event.target.closest("button[data-action='contact']");
  if (!button) return;
  const card = button.closest(".tool-card");
  if (!card) return;

  const toolName = card.dataset.tool || "this";
  const select = card.querySelector("select");
  const duration = select ? select.value : card.dataset.defaultDuration || DEFAULT_DURATION;
  const url = buildContactUrl(toolName, duration);

  window.open(url, "_blank", "noopener");
};

const handleGridChange = (event) => {
  const select = event.target.closest("select");
  if (!select) return;
  const card = select.closest(".tool-card");
  if (!card) return;
  const toolName = card.dataset.tool;
  const tool = tools.find((item) => item.name === toolName);
  if (!tool) return;
  updateCardPrice(card, tool, select.value);
};

if (toolsGrid) {
  toolsGrid.addEventListener("click", handleGridClick);
  toolsGrid.addEventListener("change", handleGridChange);
}

if (toolsGridModal) {
  toolsGridModal.addEventListener("click", handleGridClick);
  toolsGridModal.addEventListener("change", handleGridChange);
}

renderMainTools();
updateNavHeight();
scheduleExitPopup();
startOfferTimer();

document.querySelectorAll(".nav-contact").forEach((link) => {
  link.href = buildPlainContactUrl(NAV_CONTACT_MESSAGE);
});

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
    window.open(buildPlainContactUrl(POPUP_CONTACT_MESSAGE), "_blank", "noopener");
    closeExitPopup();
  });
}

window.addEventListener("resize", () => {
  updateNavHeight();
  if (expanded) {
    renderModalTools();
  } else {
    renderMainTools();
  }
});

window.addEventListener("scroll", updateNavTransparency, { passive: true });
updateNavTransparency();

if (nav && "ResizeObserver" in window) {
  const navObserver = new ResizeObserver(() => {
    updateNavHeight();
    updateSearchSpacer();
  });
  navObserver.observe(nav);
}
