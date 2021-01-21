import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import { sequential } from '../../../utils/extractColorblindSchemes';

function Card() {
  return (
    <Box
      bg={sequential.multiHue.BuGn.color1}
      h="300px"
      w="300px"
      justifySelf="center"
      boxShadow="base"
      rounded="md"
    >
      {/* <Logo h="20vmin" pointerEvents="none" /> */}
      <Text
        size="lg"
        fontSize="50px"
        fontWeight="bold"
        textAlign="start"
        casing="uppercase"
        borderTopRadius="md"
        pl={4}
        color={sequential.multiHue.BuGn.color3}
        letterSpacing={4}
      >
        heading
      </Text>
      <Text
        color={sequential.multiHue.BuGn.color3}
        fontSize="medium"
        p={4}
        align="justify"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci odit
        vitae alias placeat consectetur totam illo fugiat tempore qui labore?
      </Text>
      {/* <Box>Action Go Here</Box> */}
    </Box>
  );
}

export default Card;
