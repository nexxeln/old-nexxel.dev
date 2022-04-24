import { Action } from "kbar";

const actions: Action[] = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "index main",
    perform: () => {
      open("/", "_self");
    },
    section: "Navigation"
  },
  {
    id: "about",
    name: "About",
    shortcut: ["a"],
    keywords: "bio abt",
    perform: () => {
      open("/about", "_self");
    },
    section: "Navigation"
  },
  {
    id: "stats",
    name: "Stats",
    shortcut: ["s"],
    keywords: "statistics spotify",
    perform: () => {
      open("/stats", "_self");
    },
    section: "Navigation"
  },
  {
    id: "guestbook",
    name: "Guestbook",
    shortcut: ["g"],
    keywords: "sign",
    perform: () => {
      open("/guestbook", "_self");
    },
    section: "Navigation"
  },
  {
    id: "blog",
    name: "Blog",
    keywords: "articles",
    perform: () => {
      open("https://blog.nexxel.dev", "_blank");
    },
    section: "External Links",
    subtitle: "Read my blog posts"
  },
  {
    id: "github",
    name: "GitHub",
    keywords: "gh code",
    perform: () => {
      open("https://github.com/nexxeln", "_blank");
    },
    section: "External Links",
    subtitle: "View my open-source projects"
  },
  {
    id: "discord",
    name: "Discord",
    keywords: "dc message dm",
    perform: () => {
      open("https://discord.com/users/758578599715405824", "_blank");
    },
    section: "External Links",
    subtitle: "Chat with me on Discord"
  }
];

export default actions;
