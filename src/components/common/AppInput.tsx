import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

type AppInputProps = React.ComponentProps<typeof Input> & {
  label?: string;
  description?: string;
  error?: string | boolean;
  containerClassName?: string;
};

const AppInput = React.forwardRef<HTMLInputElement, AppInputProps>(
  ({ label, description, error, className, containerClassName, id, ...props }, ref) => {
    const inputId = id || (label ? label.replace(/\s+/g, "_").toLowerCase() : undefined);

    return (
      <div className={cn("flex flex-col gap-1", containerClassName)}>
        {label ? (
          <Label htmlFor={inputId} className="text-sm">
            {label}
          </Label>
        ) : null}

        <Input id={inputId} ref={ref} className={className} {...props} />

        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}

        {error ? (
          <p className="text-xs text-destructive">{typeof error === "string" ? error : "This field has an error"}</p>
        ) : null}
      </div>
    );
  }
);

AppInput.displayName = "AppInput";

export default AppInput;
