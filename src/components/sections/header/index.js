import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../utils/ColorModeSwitcher';

function Header() {
  return (
    <Box
      d="inline-flex"
      justifyContent="space-between"
      bg="tomato"
      w="100%"
      p={4}
      color="white"
    >
      <Heading>Colorblind Palette Picker</Heading>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;
