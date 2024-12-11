import { ComponentProps, forwardRef, ElementRef } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"

// Extende diretamente de ComponentProps<typeof Input> para pegar todas as propriedades de <input>
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string // Possibilidade de prefixo
  size?: "sm" | "md"; // Definindo tamanhos possíveis
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, size = "md", ...props }: TextInputProps, ref) => {  // Definindo o valor padrão "md" para size
    return (
      <TextInputContainer size={size}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    );
  }
);

TextInput.displayName = "TextInput"
