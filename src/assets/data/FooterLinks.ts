import { socialLinks } from "./socialLinks";

export const FooterLinks = [
  ...socialLinks.map(({ name, href }) => ({ name, href })),
  {
    name: "Behance",
    href: "https://www.behance.net/tamunobelemawilliam",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/tamunowilliam",
  },
];
