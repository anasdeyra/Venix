import { MantineThemeOverride } from "@mantine/core";
import { Tuple, DefaultMantineColor } from "@mantine/core";

type ExtendedCustomColors = "brand" | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

const theme: MantineThemeOverride = {
  primaryColor: "brand",
  primaryShade: 7,
  colorScheme: "dark",
  fontFamily: "Public Sans, Segoe UI, Sans Serif",
  headings: {
    fontFamily: "Public Sans, Segoe UI, Sans Serif",
  },
  components: {
    Button: { defaultProps: { radius: "md" } },
  },
  colors: {
    brand: [
      "#FFE8F7",
      "#D0EBFF",
      "#FFA6E0",
      "#FC74CD",
      "#F74DBC",
      "#F032AD",
      "#E622A1",
      "#D61C95",
      "#C21987",
      "#AB1877",
    ],
  },
};

export default theme;
