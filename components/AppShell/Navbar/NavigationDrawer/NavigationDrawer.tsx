import { Drawer } from "@mantine/core";
import NavigationDrawerContent from "./NavigationDrawerContent";

type Props = {
  close: () => void;
  opened: boolean;
};

export default function NavigationDrawer({ close, opened }: Props) {
  return (
    <Drawer
      size={"xl"}
      position="right"
      padding={"md"}
      onClose={close}
      opened={opened}
      title={"Navigation menu"}
      styles={{ title: { fontWeight: "bold" } }}
    >
      <NavigationDrawerContent />
    </Drawer>
  );
}
