import React from "react";
import { cn } from "../../lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H3Subtitle: React.FC<TypographyProps> = ({ children, className }) => (
  <h3 className={cn(
    "font-h3-text-subtitle font-[number:var(--h3-text-subtitle-font-weight)] text-web-primary-100-default text-[length:var(--h3-text-subtitle-font-size)] tracking-[var(--h3-text-subtitle-letter-spacing)] leading-[var(--h3-text-subtitle-line-height)] [font-style:var(--h3-text-subtitle-font-style)]",
    className
  )}>
    {children}
  </h3>
);

export const H4Title: React.FC<TypographyProps> = ({ children, className }) => (
  <h4 className={cn(
    "font-h4-text-title font-[number:var(--h4-text-title-font-weight)] text-web-neutral-400 text-[length:var(--h4-text-title-font-size)] tracking-[var(--h4-text-title-letter-spacing)] leading-[var(--h4-text-title-line-height)] [font-style:var(--h4-text-title-font-style)]",
    className
  )}>
    {children}
  </h4>
);

export const BodyText: React.FC<TypographyProps> = ({ children, className }) => (
  <p className={cn(
    "font-p-text font-[number:var(--p-text-font-weight)] text-web-neutral-400 text-[length:var(--p-text-font-size)] tracking-[var(--p-text-letter-spacing)] leading-[var(--p-text-line-height)] [font-style:var(--p-text-font-style)]",
    className
  )}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className }) => (
  <span className={cn(
    "font-h6-text text-web-neutral-400 text-[length:var(--h6-text-font-size)] tracking-[var(--h6-text-letter-spacing)] leading-[var(--h6-text-line-height)]",
    className
  )}>
    {children}
  </span>
);