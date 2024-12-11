import { InputHTMLAttributes, forwardRef, ElementRef } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"

// Extende diretamente de InputHTMLAttributes para pegar todas as propriedades do <input>
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string // Possibilidade de prefixo
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />{" "}
        {/* Propaga todas as props, incluindo placeholder */}
      </TextInputContainer>
    )
  }
)

TextInput.displayName = "TextInput"
