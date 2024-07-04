import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} width="400px" height="370px" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
