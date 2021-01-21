import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import Header from './components/sections/header';
import Footer from './components/sections/footer';

import CardGrid from './components/layouts/grid';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Header />
        <CardGrid />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
