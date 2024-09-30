import { ReactNode } from "react";

export interface StyledWeatherBlockProps {
  children: ReactNode;
  width: number;
  height: number;
  radius: number
  className?: string;
  isSwitchers?: boolean;
}