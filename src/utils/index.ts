import { NavbarItem } from "./interfaces";

export const navbar: NavbarItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "about" },
  { title: "Experience", path: "experience" },
  { title: "Contact", path: "contact" },
];

export function hexToRgb(hex: string) {
  const bigint = parseInt(hex.replace("#", ""), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
}
