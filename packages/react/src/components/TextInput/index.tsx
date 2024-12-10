import { InputHTMLAttributes } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"

// Extende diretamente de InputHTMLAttributes para pegar todas as propriedades do <input>
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string // Possibilidade de prefixo
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} /> {/* Propaga todas as props, incluindo placeholder */}
    </TextInputContainer>
  )
}
