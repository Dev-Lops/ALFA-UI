import { colors } from "@alfa-ui/tokens"
import { getContrast } from "polished"

export function ColorsGrid() {
  return (
    <div>
      {Object.entries(colors).map(([key, color]) => {
        // Valide se o valor da cor é uma string válida
        if (typeof color !== "string" || !/^#|rgb|hsl/.test(color)) {
          console.warn(`Cor inválida detectada para '${key}':`, color)
          return null // Ignore valores inválidos
        }

        return (
          <div key={key} style={{ backgroundColor: color, padding: "2rem" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "monospace",
                color: getContrast(color, "#fff") < 3.5 ? "#000" : "#fff",
              }}
            >
              <strong>${key}</strong>
              <span>{color}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
