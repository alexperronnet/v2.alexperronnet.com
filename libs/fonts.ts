import { Geist_Mono as FontMono, Geist as FontSans } from "next/font/google";
import { cn } from "@/libs/class-names";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontVariables = cn(fontSans.variable, fontMono.variable);
