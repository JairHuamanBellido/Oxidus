import Color from "color";

export const errorColor = "transparent";

export const getColorsList = (
  colorsAmount: number,
  colorsShiftAmount: number,
  mixColor: string,
  hueAngle: number,
  saturation: number,
  mainColor: string,
) => {
  const colorsList = [];
  const givenColor = mainColor;

  let step;
  for (step = 0; step < colorsAmount; step++) {
    colorsList.push(
      Color(givenColor)
        .rotate(((step + 1) / colorsAmount) * -hueAngle)
        .saturate(((step + 1) / colorsAmount) * (saturation / 100))
        .mix(
          Color(mixColor),
          ((colorsShiftAmount / 100) * (step + 1)) / colorsAmount,
        )
        .string(),
    );
  }

  return colorsList;
};
