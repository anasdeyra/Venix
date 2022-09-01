import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NavigationDrawer from "./NavigationDrawer";

export default function NavigationMenuButton() {
  const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <>
      <Burger size={"md"} onClick={toggle} opened={opened} />
      <NavigationDrawer close={close} opened={opened} />
    </>
  );
}
