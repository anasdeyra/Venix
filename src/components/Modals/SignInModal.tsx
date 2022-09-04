import { Box, Button, Group, Text } from "@mantine/core";
import { ContextModalProps } from "@mantine/modals/";

export default function SignInModal({
  context,
  id,
  innerProps,
}: ContextModalProps) {
  return (
    <Box>
      <Text size={"md"}>
        In order to use our server please sign in with your wallet.
      </Text>
      <Group mt={48}>
        <Button size="md">Sign in</Button>{" "}
        <Button
          size="md"
          variant="subtle"
          onClick={() => {
            context.closeModal(id);
          }}
        >
          Decline
        </Button>
      </Group>
    </Box>
  );
}
