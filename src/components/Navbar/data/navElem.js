// File: src/components/Navbar/data/navElem.js

// Navigation menu data
export const navElem = {
  menuItems: [
    {
      id: 1,
      name: "Features",
      hasDropdown: true,
      link: "",
      subItems: [
        { id: 11, name: "Ai Seo 1", link: "/" },
        { id: 12, name: "Ai Seo 2", link: "/ai-seo-2" },
      ],
    },
    {
      id: 2,
      name: "Developers",
      hasDropdown: false,
      link: "/developers",
    },
    {
      id: 3,
      name: "Company",
      hasDropdown: true,
      link: "#",
      subItems: [
        { id: 31, name: "About Us", link: "/about" },
        { id: 32, name: "Team", link: "/team" },
        { id: 33, name: "Careers", link: "/careers" },
        { id: 34, name: "Contact", link: "/contact" },
      ],
    },
    {
      id: 4,
      name: "Blog",
      hasDropdown: false,
      link: "/blog",
    },
    {
      id: 5,
      name: "Changelog",
      hasDropdown: false,
      link: "/changelog",
    },
  ],
};
