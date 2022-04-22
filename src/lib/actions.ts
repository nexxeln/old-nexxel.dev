import { Action, useRegisterActions } from "kbar";

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
    id: "blog",
    name: "Blog",
    shortcut: ["b"],
    keywords: "articles",
    perform: () => {
      open("https://blog.nexxel.dev", "_self");
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
    id: "github",
    name: "GitHub",
    shortcut: ["g", "h"],
    keywords: "gh code",
    perform: () => {
      open("https://github.com/nexxeln", "_blank");
    },
    section: "External Links",
    subtitle: "View my open-source projects"
  }
];

export default actions;
