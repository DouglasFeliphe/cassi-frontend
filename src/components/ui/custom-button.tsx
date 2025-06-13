import React from "react";
import { Button, ButtonProps } from "./button";
import { cn } from "../../lib/utils";

interface CustomButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const PrimaryButton: React.FC<CustomButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => (
  <Button
    className={cn(
      "bg-web-primary-100-default text-web-neutral-0 rounded-[3.28px] px-[13.11px] py-[8.19px] h-auto hover:bg-[#003a61]",
      className
    )}
    {...props}
  >
    <span className="[font-family:'Roboto',Helvetica] font-normal text-[13.1px] tracking-[0] leading-[19.7px]">
      {children}
    </span>
  </Button>
);

export const SecondaryButton: React.FC<CustomButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => (
  <Button
    variant="outline"
    className={cn(
      "text-web-primary-100-default border-web-primary-100-default rounded-[3.28px] px-[13.11px] py-[8.19px] h-auto",
      className
    )}
    {...props}
  >
    <span className="[font-family:'Roboto',Helvetica] font-normal text-[13.1px] tracking-[0] leading-[19.7px]">
      {children}
    </span>
  </Button>
);

export const HeaderButton: React.FC<CustomButtonProps> = ({ 
  children, 
  className, 
  ...props 
}) => (
  <Button
    className={cn(
      "bg-[#002d4b] text-web-neutral-0 font-a-text-button text-[length:var(--a-text-button-font-size)] tracking-[var(--a-text-button-letter-spacing)] leading-[var(--a-text-button-line-height)] hover:bg-[#003a61]",
      className
    )}
    {...props}
  >
    {children}
  </Button>
);

export const ModalButton: React.FC<CustomButtonProps> = ({ 
  children, 
  className, 
  variant = "default",
  ...props 
}) => (
  <Button
    variant={variant}
    className={cn(
      "px-8 py-3",
      variant === "outline" 
        ? "text-web-neutral-400 border-web-neutral-300 hover:bg-web-neutral-100"
        : "bg-web-primary-100-default text-white hover:bg-[#003a61]",
      className
    )}
    {...props}
  >
    {children}
  </Button>
);