import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  primaryColor: "blue",
  colorScheme: "dark",
  primaryShade: 5,
  fontFamily: "Public Sans, Segoe UI, Sans Serif",
  headings: {
    fontFamily: "Public Sans, Segoe UI, Sans Serif",
  },
  components: {
    Button: { defaultProps: { radius: "md" } },
  },
};

export default theme;
