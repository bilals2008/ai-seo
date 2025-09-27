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
        { id: 11, name: "First Page", link: "/" },
        { id: 12, name: "Second Page", link: "/ai-seo-2" },
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
        { id: 31, name: "About Us", link: "/" },
        { id: 32, name: "Team", link: "/ai-seo-2" },
        { id: 33, name: "Careers", link: "/ai-seo-2" },
        { id: 34, name: "Contact", link: "/ai-seo-2" },
      ],
    },
    {
      id: 4,
      name: "Blog",
      hasDropdown: false,
      link: "/ai-seo-2",
    },
    {
      id: 5,
      name: "Changelog",
      hasDropdown: false,
      link: "/ai-seo-2"
    },
  ],
};
