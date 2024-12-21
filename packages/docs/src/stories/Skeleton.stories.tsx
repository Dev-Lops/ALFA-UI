import { Skeleton } from "@alfa-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Data display/Skeleton",
  component: Skeleton, // Agora o SkeletonContainer é o componente que representa o skeleton da imagem
  args: {},
  argTypes: {},
} as Meta;

export const Primary: StoryObj = {};

export const WithFallback: StoryObj = {
  args: {
    variant: "circle", // Indica que queremos o skeleton no formato circular
    size: "lg", // Usando o tamanho grande para corresponder ao Avatar
  },
};
