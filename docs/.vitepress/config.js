export default {
  title: "Docs HQ",
  description: "Explore documentation, style guide, and design patterns.",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }],
    ['script', { src: '/script.js' }],
  ],
  themeConfig: {
    logo: "/star1.svg",
    siteTitle: "Docs HQ",
    nav: [
      { text: "Getting Started", link: "/about" },
      { text: "Contact", link: "/contact" },
      { 
        text: "Changelog",
        items: [
          { text: "v1.0.0", link: "/index" },
        ]
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
          { text: "Introduction", link: "/about" },
        ],
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
        collapsible: false,
        items: [
          { text: "Style Start", link: "/style-guide/start-here" },
          
          { text: "Color Palette", link: "/style-guide/color" },
          { text: "Typography", link: "/style-guide/typography" },

          { text: "Usage", link: "/style-guide/usage" },

        ],
      },
      {
        text: "Posting Checklist",
        collapsible: true,
        items: [
          
          { text: "Instagram", link: "/posting/instagram-checklist" },
        ],
      },
      
      {
        text: "Ministries",
        collapsible: true,
        items: [
          { text: "NextGen", link: "/ministries/nextgen" },
          
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
