"use strict";

// Initialize theme on page load (before DOM is ready to prevent flash)
(() => {
  const stored = localStorage.getItem("theme");
  const theme =
    stored === "light" || stored === "dark"
      ? stored
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  document.documentElement.dataset.theme = theme;
  document.body.style.backgroundColor = theme === "dark" ? "#0a0514" : "#f5f5f7";
  document
    .getElementById("theme_color")
    ?.setAttribute("content", theme === "dark" ? "#0a0514" : "#f5f5f7");
})();

class GitHubDataFetcher {
  constructor(username) {
    this.username = username;
    this.cache = null;
  }

  async fetch_repos() {
    if (this.cache) return this.cache;

    try {
      const res = await fetch(
        `https://api.github.com/users/${this.username}/repos?sort=updated&per_page=100`,
      );
      if (!res.ok) throw new Error("failed to fetch repos");

      const repos = await res.json();
      this.cache = repos
        .filter((r) => !r.archived && !r.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 8);

      return this.cache;
    } catch (err) {
      console.error("=> github fetch error:", err);
      return [];
    }
  }
}

class ProjectCardRenderer {
  constructor(container) {
    this.container = container;
  }

  render(repos) {
    if (!repos?.length) {
      this.container.innerHTML = `<p style="color: var(--muted); text-align: center;">no active projects found</p>`;
      return;
    }

    this.container.innerHTML = repos
      .map(
        (repo) => `
      <article class="card">
        <div class="project_title">${repo.name}</div>
        <p class="project_desc">${repo.description || "no description available"}</p>
        <div class="project_tech">
          ${repo.language ? `<span>${repo.language}</span>` : ""}
          ${
            repo.topics
              ?.slice(0, 4)
              .map((t) => `<span>${t}</span>`)
              .join("") || ""
          }
        </div>
        <div class="project_stats">
          <span class="stat_item">${repo.stargazers_count}</span>
          <span class="stat_item stat_fork" style="opacity: 0.7;">forks: ${repo.forks_count}</span>
        </div>
        <a class="project_link" href="${repo.html_url}">view project</a>
      </article>
    `,
      )
      .join("");
  }

  render_loading() {
    this.container.innerHTML = Array(6)
      .fill(0)
      .map(
        () => `
      <article class="card loading_skeleton" style="min-height: 270px;"></article>
    `,
      )
      .join("");
  }
}

class ThemeManager {
  constructor() {
    this.root = document.documentElement;
    this.btn = document.getElementById("theme_toggle");
    this.meta = document.getElementById("theme_color");

    this.btn?.addEventListener("click", () => this.toggle());
    this.init();
  }

  get_system_theme() {
    return matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  get_current_theme() {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark"
      ? stored
      : this.get_system_theme();
  }

  apply(theme, persist = true) {
    // Prevent flashbang by setting theme immediately
    const targetBg = theme === "dark" ? "#0a0514" : "#f5f5f7";
    
    // Set background immediately to prevent flash
    document.body.style.backgroundColor = targetBg;
    this.meta?.setAttribute(
      "content",
      theme === "dark" ? "#0a0514" : "#f5f5f7",
    );
    
    // Add transition class for smooth theme change
    this.root.classList.add("theme-transitioning");
    
    // Apply theme change
    requestAnimationFrame(() => {
      this.root.dataset.theme = theme;
      if (persist) localStorage.setItem("theme", theme);

      this.btn.textContent = theme === "dark" ? "☀" : "☾";
      this.btn.setAttribute(
        "aria-label",
        `switch to ${theme === "dark" ? "light" : "dark"} theme`,
      );

      // Remove transition class after animation completes
      setTimeout(() => {
        this.root.classList.remove("theme-transitioning");
        document.body.style.backgroundColor = "";
      }, 600);
    });
  }

  toggle() {
    this.apply(this.get_current_theme() === "dark" ? "light" : "dark");
  }

  init() {
    this.apply(this.get_current_theme(), false);
  }
}

class App {
  async init() {
    new ThemeManager();
    document
      .getElementById("export_pdf")
      ?.addEventListener("click", () => window.print());

    const projects_grid = document.getElementById("projects_grid");
    if (projects_grid) {
      const renderer = new ProjectCardRenderer(projects_grid);
      renderer.render_loading();

      const fetcher = new GitHubDataFetcher("e-gleba");
      const repos = await fetcher.fetch_repos();
      renderer.render(repos);
    }
  }
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", () => new App().init())
  : new App().init();

