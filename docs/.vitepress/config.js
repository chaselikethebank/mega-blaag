import { defineConfig } from 'vite';

export default defineConfig({
  title: "Docs HQ",
  description: "Explore documentation, style guide, and design patterns.",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
      },
    ],
    ["script", { src: "/script.js" }],
  ],
  themeConfig: {
    logo: "/star1.svg",
    siteTitle: "Docs HQ",
    nav: [
      { text: "Getting Started", link: "/about" },
      { text: "Contact", link: "/contact" },
      {
        text: "Changelog",
        items: [{ text: "v1.0.0", link: "/index" }],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/chaselikethebank/sm-guide" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [{ text: "Introduction", link: "/about" }],
      },
      {
        text: "Marketing Frameworks",
        collapsible: true,
        items: [
          { text: "What is a marketing Framework?", link: "/marketing/start" },
          { text: "StoryBrand", link: "/marketing/storybrand" },
        ],
      },
      {
        text: "Style Guide",
        collapsible: true,
        items: [
          { text: "Style Start", link: "/style-guide/style-start" },
          { text: "Gotchas", link: "/style-guide/gotchas" },
          { text: "Palette", link: "/style-guide/color" },
          { text: "Typography", link: "/style-guide/typography" },
          { text: "Icons", link: "/style-guide/icons" },
        ],
      },
      {
        text: "Posting Checklist",
        collapsible: true,
        items: [{ text: "Instagram", link: "/posting/instagram-checklist" }],
      },
      {
        text: "Ministries",
        collapsible: true,
        items: [{ text: "NextGen", link: "/ministries/nextgen" }],
      },
      {
        text: "Design Patterns",
        collapsible: true,
        items: [
          {
            text: "First thing about Design",
            link: "/design-patterns/introduction",
          },
          { text: "Recognizing Patterns", link: "/design-patterns/agency" },
        ],
      },
    ],
    footer: {
      message: "Explore and learn. Released under the MIT License.",
      copyright: "Copyright © 2024-present cd.t",
    },
  },
});
