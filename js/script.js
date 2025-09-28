/**
 * Modern Terminal Matrix Effect - ES2024 Edition
 * Optimized for mobile devices and modern browsers
 */

class TerminalMatrix {
  static #MATRIX_CHARS = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  static #KONAMI_SEQUENCE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
  static #ANIMATION_CONFIG = {
    dropInterval: 150,
    charLifetime: 4000,
    initialDropCount: 80,
    dropDelay: 60,
    konamiDuration: 15000
  };

  #elements = new Map();
  #state = {
    active: false,
    konamiIndex: 0,
    commandSequence: "",
    notificationCount: 0,
    doomLoaded: false
  };
  #animationFrame = null;
  #dropInterval = null;
  #intersectionObserver = null;
  #resizeObserver = null;

  constructor() {
    this.#initializeElements();
    this.#setupEventListeners();
    this.#initializeObservers();
    this.#preloadResources();
  }

  #initializeElements() {
    // Cache DOM elements with better error handling
    const elementIds = ["matrix", "doomContainer", "doomIframe"];
    for (const id of elementIds) {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Element with id "${id}" not found`);
        continue;
      }
      this.#elements.set(id, element);
    }
  }

  #setupEventListeners() {
    const options = { passive: false, capture: true };

    // Keyboard events with modern event delegation
    document.addEventListener("keydown", this.#handleKeydown.bind(this), options);

    // Touch events for mobile devices
    if ("ontouchstart" in window) {
      this.#setupTouchEvents();
    }

    // Modern visibility API for performance
    document.addEventListener("visibilitychange", this.#handleVisibilityChange.bind(this));

    // Window focus/blur for better resource management
    window.addEventListener("focus", () => this.#resumeAnimations());
    window.addEventListener("blur", () => this.#pauseAnimations());
  }

  #setupTouchEvents() {
    const touchOptions = { passive: false };
    let touchStartTime = 0;
    let touchCount = 0;

    // Multi-touch gesture detection
    document.addEventListener("touchstart", (e) => {
      touchStartTime = Date.now();
      touchCount = e.touches.length;

      // Triple tap for matrix activation on mobile
      if (touchCount === 3) {
        e.preventDefault();
        this.#activateMatrix();
      }
    }, touchOptions);

    // Long press for doom activation
    document.addEventListener("touchend", (e) => {
      const touchDuration = Date.now() - touchStartTime;
      if (touchDuration > 1000 && touchCount === 1) {
        this.#loadDoom();
      }
    }, touchOptions);

    // Swipe gestures
    this.#setupSwipeDetection();
  }

  #setupSwipeDetection() {
    let startX = 0, startY = 0, endX = 0, endY = 0;

    document.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
      const touch = e.changedTouches[0];
      endX = touch.clientX;
      endY = touch.clientY;
      this.#handleSwipe(startX, startY, endX, endY);
    }, { passive: true });
  }

  #handleSwipe(startX, startY, endX, endY) {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        // Swipe right - activate matrix
        this.#startMatrix();
      } else {
        // Swipe left - stop matrix
        this.#stopMatrix();
      }
    }
  }

  #initializeObservers() {
    // Performance optimization with Intersection Observer
    this.#intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.classList.contains("matrix-char")) {
            if (!entry.isIntersecting) {
              entry.target.remove();
            }
          }
        });
      },
      { rootMargin: "50px" }
    );

    // Responsive design with Resize Observer
    if ("ResizeObserver" in window) {
      this.#resizeObserver = new ResizeObserver(this.#handleResize.bind(this));
      this.#resizeObserver.observe(document.body);
    }
  }

  #handleResize() {
    // Adaptive performance based on screen size
    const isMobile = window.innerWidth < 768;
    TerminalMatrix.#ANIMATION_CONFIG.initialDropCount = isMobile ? 40 : 80;
    TerminalMatrix.#ANIMATION_CONFIG.dropInterval = isMobile ? 200 : 150;
  }

  async #preloadResources() {
    // Preload critical resources
    const doomUrl = "https://archive.org/embed/doom-play";

    try {
      // Modern fetch with better error handling
      const response = await fetch(doomUrl, { method: "HEAD" });
      if (response.ok) {
        console.log("🎮 DOOM resources preloaded");
      }
    } catch (error) {
      console.warn("Failed to preload DOOM resources:", error.message);
    }
  }

  #handleKeydown(e) {
    this.#processKonamiCode(e);
    this.#processTextCommands(e);
    this.#handleSpecialKeys(e);
  }

  #processKonamiCode(e) {
    const expected = TerminalMatrix.#KONAMI_SEQUENCE[this.#state.konamiIndex];

    if (e.code === expected) {
      this.#state.konamiIndex++;

      if (this.#state.konamiIndex === TerminalMatrix.#KONAMI_SEQUENCE.length) {
        this.#activateSpectrum();
        this.#state.konamiIndex = 0;
      }
    } else {
      this.#state.konamiIndex = 0;
    }
  }

  #processTextCommands(e) {
    if (!/^[a-z]$/i.test(e.key)) return;

    this.#state.commandSequence = (this.#state.commandSequence + e.key.toLowerCase()).slice(-10);

    // Command processing with modern Map
    const commands = new Map([
      ["doom", () => this.#loadDoom()],
      ["matrix", () => this.#startMatrix()],
      ["stop", () => this.#stopMatrix()],
      ["clear", () => this.#clearAll()]
    ]);

    for (const [command, action] of commands) {
      if (this.#state.commandSequence.includes(command)) {
        action();
        this.#state.commandSequence = "";
        break;
      }
    }
  }

  #handleSpecialKeys(e) {
    const matrixElement = this.#elements.get("matrix");
    const doomContainer = this.#elements.get("doomContainer");

    switch (e.key) {
      case "Escape":
        if (doomContainer?.style.display === "block") {
          e.preventDefault();
          this.#closeDoom();
        } else if (this.#state.active) {
          this.#stopMatrix();
        }
        break;
      case " ":
        if (e.ctrlKey) {
          e.preventDefault();
          this.#state.active ? this.#stopMatrix() : this.#startMatrix();
        }
        break;
    }
  }

  #handleVisibilityChange() {
    if (document.hidden) {
      this.#pauseAnimations();
    } else {
      this.#resumeAnimations();
    }
  }

  #pauseAnimations() {
    if (this.#dropInterval) {
      clearInterval(this.#dropInterval);
    }
    if (this.#animationFrame) {
      cancelAnimationFrame(this.#animationFrame);
    }
  }

  #resumeAnimations() {
    if (this.#state.active) {
      this.#startDropInterval();
    }
  }

  #activateMatrix() {
    this.#startMatrix();
    this.#notify("📱 Triple-tap detected - Matrix activated!", "success");
  }

  #activateSpectrum() {
    this.#startMatrix();
    const matrixElement = this.#elements.get("matrix");
    matrixElement?.classList.add("konami");

    this.#notify("🌈 SPECTRUM MODE UNLOCKED!", "rainbow");

    setTimeout(() => {
      matrixElement?.classList.remove("konami");
      this.#stopMatrix();
      this.#notify("🛑 Matrix stopped", "info");
    }, TerminalMatrix.#ANIMATION_CONFIG.konamiDuration);
  }

  #createMatrixChar() {
    const matrixElement = this.#elements.get("matrix");
    if (!matrixElement || !this.#state.active) return;

    // Use document fragment for better performance
    const char = document.createElement("div");
    char.className = "matrix-char";
    char.textContent = TerminalMatrix.#MATRIX_CHARS[
      Math.floor(Math.random() * TerminalMatrix.#MATRIX_CHARS.length)
    ];

    // Modern CSS custom properties for dynamic values
    char.style.setProperty("--left", Math.random() * 100 + "%");
    char.style.setProperty("--duration", (1.5 + Math.random() * 2) + "s");
    char.style.left = "var(--left)";
    char.style.animationDuration = "var(--duration)";

    matrixElement.appendChild(char);

    // Observe for cleanup
    this.#intersectionObserver?.observe(char);

    // Fallback cleanup
    setTimeout(() => char.remove?.(), TerminalMatrix.#ANIMATION_CONFIG.charLifetime);
  }

  #startMatrix() {
    if (this.#state.active) return;

    this.#state.active = true;
    const matrixElement = this.#elements.get("matrix");
    matrixElement?.classList.add("active");

    // Initial burst of characters
    for (let i = 0; i < TerminalMatrix.#ANIMATION_CONFIG.initialDropCount; i++) {
      setTimeout(() => this.#createMatrixChar(), i * TerminalMatrix.#ANIMATION_CONFIG.dropDelay);
    }

    this.#startDropInterval();
    this.#notify("🔋 Matrix activated", "success");
  }

  #startDropInterval() {
    this.#dropInterval = setInterval(
      () => this.#createMatrixChar(),
      TerminalMatrix.#ANIMATION_CONFIG.dropInterval
    );
  }

  #stopMatrix() {
    this.#state.active = false;
    const matrixElement = this.#elements.get("matrix");
    matrixElement?.classList.remove("active", "konami");

    this.#pauseAnimations();

    // Smooth cleanup
    setTimeout(() => {
      matrixElement && (matrixElement.innerHTML = "");
    }, 400);

    this.#notify("⏹️ Matrix deactivated", "info");
  }

  #clearAll() {
    this.#stopMatrix();
    this.#closeDoom();
    this.#notify("🧹 All cleared", "info");
  }

  async #loadDoom() {
    const doomContainer = this.#elements.get("doomContainer");
    const doomIframe = this.#elements.get("doomIframe");

    if (!doomContainer || !doomIframe) {
      this.#notify("❌ DOOM not available", "error");
      return;
    }

    if (this.#state.doomLoaded) {
      doomContainer.style.display = "block";
      this.#notify("🔫 DOOM ready", "success");
      return;
    }

    try {
      this.#notify("🔄 Loading DOOM...", "info");
      doomContainer.style.display = "block";

      // Modern promise-based loading
      await this.#loadIframe(doomIframe, "https://archive.org/embed/doom-play");

      this.#state.doomLoaded = true;
      this.#notify("🔫 RIP AND TEAR!", "success");

    } catch (error) {
      this.#notify("❌ Failed to load DOOM", "error");
      console.error("DOOM loading error:", error);
    }
  }

  #loadIframe(iframe, src) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject(new Error("Load timeout")), 10000);

      iframe.onload = () => {
        clearTimeout(timeout);
        resolve();
      };

      iframe.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Load failed"));
      };

      iframe.src = src;
    });
  }

  #closeDoom() {
    const doomContainer = this.#elements.get("doomContainer");
    if (doomContainer) {
      doomContainer.style.display = "none";
      this.#notify("🛑 DOOM minimized", "info");
    }
  }

  #notify(message, type = "info") {
    // Modern notification system with better performance
    const notification = document.createElement("div");
    notification.className = `notification notification--${type}`;
    notification.textContent = message;

    // Use CSS custom properties for dynamic positioning
    notification.style.setProperty("--top", (15 + this.#state.notificationCount * 50) + "px");
    notification.style.top = "var(--top)";

    document.body.appendChild(notification);
    this.#state.notificationCount++;

    // Use modern timing for cleanup
    const cleanup = () => {
      notification.remove();
      this.#state.notificationCount = Math.max(0, this.#state.notificationCount - 1);
    };

    // Animation with proper cleanup
    requestAnimationFrame(() => {
      notification.classList.add("notification--show");
      setTimeout(cleanup, 2500);
    });
  }

  // Public API methods
  start() {
    this.#startMatrix();
  }

  stop() {
    this.#stopMatrix();
  }

  destroy() {
    this.#pauseAnimations();
    this.#intersectionObserver?.disconnect();
    this.#resizeObserver?.disconnect();
    this.#elements.clear();
  }
}

// Enhanced mobile detection and initialization
class DeviceDetector {
  static get isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
           window.innerWidth < 768;
  }

  static get isTouch() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }

  static get supportsModernFeatures() {
    return "IntersectionObserver" in window && 
           "ResizeObserver" in window &&
           "requestAnimationFrame" in window;
  }
}

// Performance monitor for development
class PerformanceMonitor {
  static #metrics = new Map();

  static start(label) {
    this.#metrics.set(label, performance.now());
  }

  static end(label) {
    const start = this.#metrics.get(label);
    if (start) {
      const duration = performance.now() - start;
      console.log(`⚡ ${label}: ${duration.toFixed(2)}ms`);
      this.#metrics.delete(label);
      return duration;
    }
  }
}

// Modern initialization with error boundaries
async function initializeTerminal() {
  try {
    PerformanceMonitor.start("Terminal Initialization");

    // Check browser support
    if (!DeviceDetector.supportsModernFeatures) {
      console.warn("Some features may not work on this browser");
    }

    // Initialize terminal with device-specific optimizations
    const terminal = new TerminalMatrix();

    // Global access for debugging
    if (typeof window !== "undefined") {
      window.terminal = terminal;
      window.device = DeviceDetector;
    }

    // Enhanced console styling
    const styles = [
      "color: #00ff00",
      "font-size: 16px",
      "font-weight: bold",
      "text-shadow: 0 0 8px #00ff00"
    ].join("; ");

    console.log(`%c🎮 EVGENIY GLEBA - GAME DEVELOPER`, styles);
    console.log(
      `%c🔧 Modern Terminal v2.0 - ${DeviceDetector.isMobile ? "Mobile" : "Desktop"} Mode`,
      "color: #00aa00; font-size: 12px;"
    );
    console.log(
      `%c${DeviceDetector.isTouch ? "👆 Touch" : "⌨️  Keyboard"} controls active`,
      "color: #00aa00; font-size: 10px;"
    );

    PerformanceMonitor.end("Terminal Initialization");

    // Welcome notification
    setTimeout(() => {
      terminal._notify?.("🚀 Modern Terminal Ready", "success") ||
      console.log("🚀 Modern Terminal Ready");
    }, 1000);

    return terminal;

  } catch (error) {
    console.error("Failed to initialize terminal:", error);
    // Fallback notification
    document.body.insertAdjacentHTML("beforeend", `
      <div class="error-fallback">
        ❌ Terminal initialization failed. Please refresh the page.
      </div>
    `);
  }
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTerminal);
} else {
  initializeTerminal();
}

// Export for module systems
if (typeof module !== "undefined" && module.exports) {
  module.exports = { TerminalMatrix, DeviceDetector, PerformanceMonitor };
}
