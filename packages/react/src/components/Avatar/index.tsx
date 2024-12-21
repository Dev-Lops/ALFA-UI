import type { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

// Adicionando a propriedade 'src' explicitamente à interface AvatarProps
export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  src?: string;
  alt: string;
}

export function Avatar({ alt, src, ...props }: AvatarProps) {
  return (
    <AvatarContainer>
      {/* Passando a propriedade src para AvatarImage */}
      <AvatarImage src={src} alt={alt} {...props} />
      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

Avatar.displayName = "Avatar";
