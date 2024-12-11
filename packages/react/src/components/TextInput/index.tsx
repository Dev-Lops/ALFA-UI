import { InputHTMLAttributes, forwardRef, ElementRef } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"

// Extende diretamente de InputHTMLAttributes para pegar todas as propriedades do <input>
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string // Possibilidade de prefixo
  size?: "sm" | "md";
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size = "md", ...props }: TextInputProps, ref) => {  // Definindo um valor padrão "md"
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput"
