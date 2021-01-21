import { extendTheme } from '@chakra-ui/react';
// 1. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
// 2. extend the theme
const theme = extendTheme({ config });
export default theme;
