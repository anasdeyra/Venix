import { useMantineTheme, Group, createStyles, Header } from "@mantine/core";
import ConnectButton from "../../ConnectButton/ConnectButton";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../../../public/favicon.svg";
import NavigationMenuButton from "./NavigationDrawer/NavigationDrawerButton";
import SearchButton from "./NavigationDrawer/SearchBar/SearchButton";

const useStyles = createStyles((theme) => ({
  header: {
    background: "transparent",
    backdropFilter: "blur(50px)",
  },
  pointer: {
    cursor: "pointer",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();
  const { push } = useRouter();
  const theme = useMantineTheme();

  return (
    <Header className={classes.header} height={84}>
      <Group align={"center"} position="apart" spacing={"md"} p={"md"}>
        <Image
          onClick={() => {
            push("/");
          }}
          className={classes.pointer}
          height={36}
          width={36}
          src={logo}
        />

        <Group spacing={"xs"}>
          <SearchButton />
          <ConnectButton />
          <NavigationMenuButton />
        </Group>
      </Group>
    </Header>
  );
}
