import { styled } from "../../styles";

// Refatorando o SkeletonContainer para imitar o tamanho e estilo do Avatar
export const SkeletonContainer = styled("div", {
  borderRadius: "$full", // Igual ao Avatar (borda arredondada)
  backgroundColor: "$gray200",
  animation: "pulse 1.5s infinite ease-in-out",

  // Ajuste para o skeleton de imagem circular, com mesmo tamanho do Avatar
  width: "$16",  // Tamanho do Avatar
  height: "$16", // Tamanho do Avatar
  overflow: "hidden", // Garante que o conteúdo não ultrapasse os limites

  "@keyframes pulse": {
    "0%": { backgroundColor: "$gray200" },
    "50%": { backgroundColor: "$gray300" },
    "100%": { backgroundColor: "$gray200" },
  },
});
