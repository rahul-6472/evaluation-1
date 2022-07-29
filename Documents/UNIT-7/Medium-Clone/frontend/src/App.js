import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomepageBS from './Components/HomepageBS/HomepageBS';

function App() {
  return (
    <ChakraProvider>
      <HomepageBS />
    </ChakraProvider>
  );
}
export default App;
