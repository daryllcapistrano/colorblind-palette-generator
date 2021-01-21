import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../../utils/ColorModeSwitcher';

function Header() {
  return (
    <Box
      d="inline-flex"
      justifyContent="space-between"
      bg="transparent"
      w="100%"
      mt={2}
      px={4}
    >
      <Heading fontSize="3xl" fontWeight="bold">
        Colorblind Palette Picker
      </Heading>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;
