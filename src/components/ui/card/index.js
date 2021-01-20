import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import colorbrewer from '../../../utils/ColorSchemes';

function Card() {
  const colorProps = {
    color1: colorbrewer.Set2[3][0],
    color2: colorbrewer.Set2[3][1],
    color3: colorbrewer.Set2[3][2],
  };

  return (
    <Box
      bg={colorProps.color1}
      h="300px"
      w="300px"
      justifySelf="center"
      // borderRadius="full"
    >
      {/* <Logo h="20vmin" pointerEvents="none" /> */}
      <Text
        size="lg"
        fontSize="50px"
        textAlign="start"
        casing="uppercase"
        m={3}
        pl={4}
        // borderRadius="md"
        bg={colorProps.color2}
      >
        heading
      </Text>
      <Text color={colorProps.color3} fontSize="medium" p={4} align="justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci odit
        vitae alias placeat consectetur totam illo fugiat tempore qui labore?
      </Text>
      <Box>Action Go Here</Box>
    </Box>
  );
}

export default Card;
