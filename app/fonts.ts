import { VT323 } from "next/font/google";
import Segoe_UI from "next/font/local";

export const fontVT = VT323({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-VT323",
});
export const fontSegoe_UI = Segoe_UI({
  src: [{ path: "../public/fonts/Segoe_UI.ttf", weight: "400" }],
  variable: "--font-Segoe_UI",
});
