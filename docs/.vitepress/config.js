import { defineConfig } from 'vite';

export default defineConfig({
  title: "Mega Blaag",
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
    siteTitle: "Mega Blaag",
    nav: [
      { text: "Getting Started", link: "/theInternet" },
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

        items: [
          { text: "State/Proposal/Expectaions", link: "/about" },
          { text: "The Internet is Hard", link: "/theInternet" },
          { text: "The Offering", link: "/offering" },
          { text: "the work vs The Work", link: "/ptar" },
        ],
      },
      {
        text: "Marketing Guide",
        collapsible: true,
        items: [
          { text: "Approach", link: "/marketing/frameworks-start" },
          { text: "Techniques", link: "/marketing/aphorisms" },
          { text: "Strategies", link: "/marketing/frameworks-start" },
          { text: "MomentMomentum Framework" , link: "/marketing/momentMomentum" },
          { text: "StoryBrand Framework", link: "/marketing/storybrand" },
          { text: "Growth Hacking", link: "/marketing/growth-hacking" },

          { text: "Content Pyramid", link: "/marketing/content-pyramid" },
          { text: "PSA" , link: "/marketing/psa" },

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
