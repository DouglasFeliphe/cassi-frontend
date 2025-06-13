import React from "react";
import { H4Title, BodyText } from "./typography";

interface DataFieldProps {
  label: string;
  value: string;
  className?: string;
}

export const DataField: React.FC<DataFieldProps> = ({
  label,
  value,
  className,
}) => (
  <div className={`flex flex-col items-start flex-1 ${className || ""}`}>
    <div className="inline-flex items-start gap-1 pb-1">
      <H4Title className="w-fit mt-[-1.00px] whitespace-nowrap">
        {label}
      </H4Title>
    </div>
    <div className="flex items-center gap-2 w-full">
      <BodyText className="w-fit mt-[-1.00px] whitespace-nowrap">
        {value}
      </BodyText>
    </div>
  </div>
);