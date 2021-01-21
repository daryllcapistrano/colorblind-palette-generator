import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../../utils/ColorModeSwitcher';

function Header() {
  const color = useColorModeValue('gray.800', 'white');
  return (
    <Box
      d={{ base: 'flex', md: 'inline-flex' }}
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent="space-between"
      bg="transparent"
      w="100%"
      mt={6}
      px={{ base: null, md: 24, lg: 32 }}
    >
      <Heading fontSize="3xl" fontWeight="bold" color={color}>
        Colorblind Palette Picker
      </Heading>
      <ColorModeSwitcher />
    </Box>
  );
}

export default Header;
