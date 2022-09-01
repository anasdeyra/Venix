import { createStyles, Drawer } from "@mantine/core";
import NavigationDrawerContent from "./NavigationDrawerContent";

type Props = {
  close: () => void;
  opened: boolean;
};

const useStyles = createStyles((theme) => ({
  drawer: {
    background: "none",
    backdropFilter: "blur(5px)",
  },
}));

export default function NavigationDrawer({ close, opened }: Props) {
  return (
    <Drawer
      size={"full"}
      position="right"
      padding={"md"}
      onClose={close}
      opened={opened}
      title={"Navigation menu"}
      styles={{
        title: { fontWeight: "bold", fontSize: "20px" },
        drawer: {
          background: "none",
          backdropFilter: "blur(20px)",
        },
      }}
    >
      <NavigationDrawerContent />
    </Drawer>
  );
}
