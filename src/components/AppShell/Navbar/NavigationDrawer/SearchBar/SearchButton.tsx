import { ActionIcon } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

export default function SearchButton() {
  return (
    <ActionIcon variant="transparent" size={"lg"}>
      <IoSearch size={24} />
    </ActionIcon>
  );
}
