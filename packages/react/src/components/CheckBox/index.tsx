import { Check } from "phosphor-react";
import { CheckBoxContainer, CheckBoxIndicator } from "./styles";
import type { ComponentProps } from "react";

export interface CheckBoxProps
  extends ComponentProps<typeof CheckBoxContainer> {
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean; // Adicionando a propriedade 'checked'
}

export function CheckBox({ onCheckedChange, checked, ...props }: CheckBoxProps) {
  return (
    <CheckBoxContainer
      {...props}
      checked={checked} // Passando o 'checked' para o Container
      onCheckedChange={(checkedValue) => {
        if (onCheckedChange) onCheckedChange(!!checkedValue); // Garantir que o valor seja booleano
      }}
    >
      <CheckBoxIndicator asChild>
        <Check weight="bold" />
      </CheckBoxIndicator>
    </CheckBoxContainer>
  );
}

CheckBox.displayName = "CheckBox";
