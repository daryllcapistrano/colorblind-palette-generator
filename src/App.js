import React from 'react';
import { ChakraProvider, Box, SimpleGrid, theme } from '@chakra-ui/react';
import Header from './components/sections/header';
import Footer from './components/sections/footer';
import Card from './components/ui/card';

function App() {
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
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
