import type { LucideIcon } from "lucide-react";
export type Subject =
  | "gramatica"
  | "literatura"
  | "redacao"
  | "matematica"
  | "biologia"
  | "historia"
  | "geografia"
  | "fisica"
  | "quimica"
  | "ingles"
  | "espanhol";

export type CardMatters = {
  icon?: LucideIcon;
  title: string;
  to?: string;
  bgColor?: Subject;
}