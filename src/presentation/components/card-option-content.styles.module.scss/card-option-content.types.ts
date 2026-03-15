import type { LucideIcon } from "lucide-react";

export type CardOptionProps = {
  label: string;
  description: string;
  href?: string;
  icon?: LucideIcon;
  disabled?: boolean;
};