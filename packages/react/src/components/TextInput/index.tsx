import { InputHTMLAttributes, forwardRef, ElementRef } from "react"
import { Input, Prefix, TextInputContainer } from "./styles"


export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string 
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
