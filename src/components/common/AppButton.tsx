import React from "react";
import { Button, buttonVariants } from "../ui/button";
import type { VariantProps } from "class-variance-authority";

type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    label?: string;
    icon?: React.ReactNode;
    positionIconRight?: boolean;
    loading?: boolean;
    disable?: boolean;
  };

function AppButton({
  label,
  children,
  icon,
  positionIconRight,
  className,
  variant,
  size,
  loading,
  disable,
  ...rest
}: AppButtonProps) {
  return (
    <Button
      className={className}
      variant={variant}
      size={size}
      disabled={disable || loading}
      {...rest}
    >
      {!positionIconRight && icon}
      {children ?? label}
      {positionIconRight && icon}
    </Button>
  );
}

export default AppButton;
