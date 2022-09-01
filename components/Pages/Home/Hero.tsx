import { Button, createStyles, Group, Text } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  heading: {
    fontSize: theme.fontSizes.xl * 2.2,
    fontWeight: "bold",
    color: "white",
  },
  higlighted: {
    background: theme.fn.linearGradient(
      -90,
      theme.colors[theme.primaryColor][5],
      theme.colors[theme.primaryColor][9]
    ),
    backgroundClip: "text",
    color: "transparent",
  },
}));
export default function Hero({}) {
  const { classes } = useStyles();
  return (
    <>
      <Text className={classes.heading}>
        <span className={classes.higlighted}>Create</span>, sell, buy, collect
        magnificent NFTs
      </Text>
      <Group mt={48}>
        <Button size="lg">Explore</Button>
        <Button size="lg" variant="subtle">
          Get started
        </Button>
      </Group>
    </>
  );
}
