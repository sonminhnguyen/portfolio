interface Children {
  title: string;
  href: string;
  description?: string;
  children?: Children;
}

const components: {
  title: string;
  href: string;
  description: string;
  children?: Array<Children>;
}[] = [
  {
    title: "Portfolio",
    href: "/#portfolio",
    description: "Portfolio Page",
  },
  {
    title: "Services",
    href: "/#services",
    description: "Service Page",
  },
  {
    title: "Projects",
    href: "/#projects",
    description: "Project Page",
    // children: [
    //   { title: "Weather App", href: "/weatherApp", description: "Weather App Page" },
    //   { title: "Stock App", href: "/stockApp", description: "Stock App Page" },
    //   { title: "Diploma App", href: "/diplomaApp", description: "Diploma App Page" },
    //   { title: "Chat App", href: "/chatApp", description: "Weather App Page" },
    //   { title: "Expensify App", href: "/expensifyApp", description: "Expensify App Page" },
    // ],
  },
  {
    title: "Playgrounds",
    href: "/#playgrounds",
    description: "Playground Page",
    // children: [
    //   { title: "Photography", href: "/photographyApp", description: "Photography App Page" },
    //   { title: "Music App", href: "/musicApp", description: "Music App Page" },
    // ],
  },

  {
    title: "Contact",
    href: "/#contacts",
    description: "Contact Page",
  },
];

export default components;
