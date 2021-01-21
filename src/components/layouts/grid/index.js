import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import Card from '../../ui/card/';
import { sequential } from '../../../utils/extractColorblindSchemes';

function CardGrid() {
  // * Single Hues 3 data classes
  //
  const Blue = sequential.singleHue.Blues;
  const Green = sequential.singleHue.Greens;
  const Grey = sequential.singleHue.Greys;
  const Orange = sequential.singleHue.Oranges;
  const Purple = sequential.singleHue.Purples;
  const Red = sequential.singleHue.Reds;
  // * Multi Hues 3 data classes
  //
  const BlueGreen = sequential.multiHue.BuGn;
  const BluePurple = sequential.multiHue.BuPu;
  const GreenBlue = sequential.multiHue.GnBu;
  const OrangeRed = sequential.multiHue.OrRd;
  const PurpleBlue = sequential.multiHue.PuBu;
  const PurpleBlueGreen = sequential.multiHue.PuBuGn;
  const PurpleRed = sequential.multiHue.PuRd;
  const RedPurple = sequential.multiHue.RdPu;
  const YellowGreen = sequential.multiHue.YlGn;
  const YellowGreenBlue = sequential.multiHue.YlGnBu;
  const YellowOrangeBrown = sequential.multiHue.YlOrBr;
  const YellowOrangeRed = sequential.multiHue.YlOrRd;

  return (
    <Box mx={{ md: 20 }}>
      <SimpleGrid
        minH="100vh"
        columns={{ sm: 1, md: 2, lg: 3 }}
        my={14}
        spacing={10}
      >
        <Card color={Blue} />
        <Card color={Green} />
        <Card color={Grey} />
        <Card color={Orange} />
        <Card color={Purple} />
        <Card color={Red} />
      </SimpleGrid>
      <SimpleGrid
        minH="100vh"
        columns={{ sm: 1, md: 2, lg: 3 }}
        my={14}
        spacing={10}
      >
        <Card color={BlueGreen} />
        <Card color={BluePurple} />
        <Card color={GreenBlue} />
        <Card color={OrangeRed} />
        <Card color={PurpleBlue} />
        <Card color={PurpleBlueGreen} />
        <Card color={PurpleRed} />
        <Card color={RedPurple} />
        <Card color={YellowGreen} />
        <Card color={YellowGreenBlue} />
        <Card color={YellowOrangeBrown} />
        <Card color={YellowOrangeRed} />
      </SimpleGrid>
    </Box>
  );
}

export default CardGrid;
