export default {
  title: "Documentation Hub",
  description: "Explore our documentation, style guide, and design patterns.",
  themeConfig: {
    logo: "/star1.svg",
    siteTitle: "Docs HQ",
    nav: [
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Guide", link: "/guide/index" },
      // { text: "Design Patterns", link: "/design-patterns/introduction" },
      { 
        text: "Changelog",
        items: [
          { text: "v0.0.1", link: "/item-1" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" },
        ]
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/chaselikethebank" },
      { icon: "twitter", link: "https://twitter.com/veryjazzed" },
      { icon: "discord", link: "", target: "_blank" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Step-2", link: "/step-2" },
        ],
      },
      {
        text: "Style Guide",
        collapsible: false,
        items: [
          { text: "Typography", link: "/style-guide/typography" },
          { text: "Color Palette", link: "/style-guide/color" },
        ],
      },
      {
        text: "Design Patterns",
        collapsible: true,
        items: [
          { text: "First thing about Design", link: "/design-patterns/introduction" },
          { text: "Recognizing Patterns", link: "/design-patterns/agency" },
        ],
      },
    ],
    footer: {
      message: "Explore and learn. Released under the MIT License.",
      copyright: "Copyright © 2024-present cd.t",
    },
  },
};
