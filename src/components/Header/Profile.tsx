import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="3" textAlign="center">
          <Text>Vinícius Führ de Borba</Text>
          <Text color="gray.300" fontSize="small">
            vinicius@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Vinícius Führ de Borba" />
    </Flex>
  );
}
