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
const searchStatus = document.getElementById("toolsSearchStatus");
const nav = document.querySelector(".nav");
const exitPopup = document.getElementById("exitPopup");
const exitPopupClose = exitPopup ? exitPopup.querySelector(".exit-popup-close") : null;
const exitPopupClaim = exitPopup ? exitPopup.querySelector(".claim-button") : null;
const exitPopupDecline = exitPopup ? exitPopup.querySelector(".decline-button") : null;
const mobileQuery = window.matchMedia("(max-width: 760px)");
const SCROLL_THRESHOLD = 12;

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
  if (value.includes("$")) return "USD";
  if (value.includes("₹")) return "INR";
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

const formatMoney = (value) => `₹${Math.max(0, Math.round(value))}`;

const getPricing = (tool, duration) => {
  if (tool.pricing && tool.pricing[duration]) {
    const override = tool.pricing[duration];
    return {
      our: formatMoney(normalizeToINR(override.our)),
      original: formatMoney(normalizeToINR(override.original)),
    };
  }
  const baseOriginal = normalizeToINR(tool.original);
  const multiplier = duration && DURATION_MULTIPLIERS[duration] ? DURATION_MULTIPLIERS[duration] : 1;
  const rawDiscount =
    typeof tool.discountRate === "number" ? tool.discountRate : DEFAULT_DISCOUNT_RATE;
  const discountRate = Math.min(Math.max(rawDiscount, 0), 0.95);
  const originalValue = baseOriginal * multiplier;
  const ourValue = originalValue * (1 - discountRate);
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
  const safeTool = String(toolName || "tool").trim().slice(0, 80);
  const safeDuration = String(duration || DEFAULT_DURATION).trim().slice(0, 40);
  const message = `I want the ${safeTool} tool for ${safeDuration}`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const buildPlainContactUrl = (message) => {
  const safeMessage = String(message || "").trim().slice(0, 160);
  const encoded = encodeURIComponent(safeMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
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
              ? `<div class="duration-select" data-duration="${initialDuration || ""}">
                  <button
                    class="duration-trigger"
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    aria-controls="${selectId}"
                  >
                    <span class="duration-label">${initialDuration}</span>
                    <span class="duration-chevron" aria-hidden="true">▾</span>
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
  if (!offerTimerEl) return;
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

const NAV_CONTACT_MESSAGE = "I want AI tools";
const POPUP_CONTACT_MESSAGE = "Hey SaaS Buddy, I want an extra 5% discount.";

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

renderMainTools();
updateNavHeight();
scheduleExitPopup();
startOfferTimer();

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = buildPlainContactUrl(NAV_CONTACT_MESSAGE);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
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

let resizeRaf = null;
window.addEventListener("resize", () => {
  if (resizeRaf) return;
  resizeRaf = window.requestAnimationFrame(() => {
    resizeRaf = null;
    updateNavHeight();
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

