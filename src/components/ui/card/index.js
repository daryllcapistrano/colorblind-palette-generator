import React from 'react';
import { Box, Text, VStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

// import { sequential } from '../../../utils/extractColorblindSchemes';

function Card(props) {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const color = useColorModeValue('gray.700', 'gray.50');

  return (
    <Box
      bg={props.color.color1}
      h="300px"
      w="300px"
      justifySelf="center"
      // boxShadow="inner"
      rounded="md"
    >
      <Text
        borderBottom="4px"
        borderColor={props.color.color2}
        size="lg"
        fontSize="50px"
        fontWeight="bold"
        textAlign="start"
        casing="uppercase"
        borderTopRadius="md"
        pl={4}
        color={props.color.color3}
        letterSpacing={4}
      >
        heading
      </Text>
      <Text
        color={props.color.color3}
        fontSize="medium"
        px={4}
        py={2}
        align="justify"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci odit
        vitae alias placeat consectetur totam illo fugiat tempore qui labore?
      </Text>
      <VStack
        bg="white"
        py={1}
        pl={3}
        mx={4}
        spacing={0}
        alignItems="flex-start"
        backgroundColor={bg}
        color={color}
        rounded="md"
        // boxShadow="inner"
      >
        <Text fontSize="small">background color: {props.color.color1}</Text>
        <Text fontSize="small">text color: {props.color.color3}</Text>
        <Text fontSize="small">border color: {props.color.color2}</Text>
      </VStack>
    </Box>
  );
}

export default Card;
