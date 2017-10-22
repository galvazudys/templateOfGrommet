import React from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';

const MainHero = () => (
  <div>
    <Hero
      background={
        <Video
          autoPlay={true}
          showControls={false}
          loop={true}
          muted={true}
          fit='cover'
        >
          <source src='./img/oldman.mp4' type='video/mp4' />
        </Video>
      }
      backgroundColorIndex='dark'
    >
      <Box direction='row' justify='center' align='center'>
        <Box basis='1/2' align='end' pad='medium' />
        <Box basis='1/2' align='start' pad='medium'>
          <Box colorIndex='grey-2-a'>
            <Card
              heading='Heading'
              description='Hero description text.'
              label='label'
              link={<Anchor href='#' primary={true} label='Link' />}
            />
          </Box>
        </Box>
      </Box>
    </Hero>
  </div>
);

export default MainHero;
