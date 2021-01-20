import React from 'react';
import { ChakraProvider, Box, SimpleGrid, theme } from '@chakra-ui/react';
import Header from './components/sections/header';
import Card from './components/ui/card';

function App() {
  // console.log(colorbrewer);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <Box mx={{ md: 20 }}>
          <SimpleGrid
            minH="100vh"
            columns={{ sm: 1, md: 2, lg: 3 }}
            my={14}
            spacing={10}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </SimpleGrid>
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          Footer
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
