import type { ComponentProps } from "react";
import { SkeletonContainer } from "./styles";  // Certifique-se de que o caminho está correto

// Tipagem para o Skeleton
export interface SkeletonProps extends ComponentProps<typeof SkeletonContainer> {
  variant: string,
  size: string
}

export function Skeleton({ ...props }: SkeletonProps) {
  return <SkeletonContainer {...props} />;
}

Skeleton.displayName = "Skeleton";
