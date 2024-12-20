import { Check } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import type { ComponentProps } from "react";

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {
  onCheckedChange?: (checked: boolean) => void;
}

export function CheckBox({ onCheckedChange, ...props }: CheckBoxProps) {
  return (
    <CheckBoxContainer
      {...props}
      onChange={(event) => {
        const checked = (event.target as HTMLInputElement).checked; // Cast para garantir que é um HTMLInputElement
        if (onCheckedChange) onCheckedChange(checked);
      }}
    >
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  );
}

CheckBox.displayName = "CheckBox";
