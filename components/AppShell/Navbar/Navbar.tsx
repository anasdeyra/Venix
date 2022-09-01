import { Button, Group, createStyles } from "@mantine/core";
import Image from "next/image";
import logo from "../../../public/favicon.svg";
import NavigationMenuButton from "./NavigationDrawer/NavigationDrawerButton";
import SearchButton from "./NavigationDrawer/SearchBar/SearchButton";

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: `1px solid ${theme.colors.gray[7]}`,
  },
}));

export default function Navbar() {
  const { classes } = useStyles();

  return (
    <Group className={classes.header} position="apart" spacing={"md"} p={"md"}>
      <Image height={36} width={36} src={logo} />

      <Group spacing={"xs"}>
        <SearchButton />
        <Button size="sm">Connect</Button>
        <NavigationMenuButton />
      </Group>
    </Group>
  );
}
