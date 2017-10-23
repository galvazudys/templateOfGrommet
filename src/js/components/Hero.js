import React from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import TextInput from 'grommet/components/TextInput';

const MainHero = () => (
  <div>
    <Hero
      background={
        <Video
          autoPlay={true}
          showControls={false}
          loop={true}
          muted={true}
          fit="cover"
          style={{
            opacity: '0.3',
            backgroundColor: 'rgba(47, 161, 179,0.9)'
          }}
        >
          <source src="./img/oldman.mp4" type="video/mp4" />
        </Video>
      }
      backgroundColorIndex="dark"
    >
      <Box direction="row" justify="center" align="center">
        <Box basis="1/2" align="end" pad="medium" />
        <Box basis="1/2" align="start" pad="medium">
          <Box colorIndex="light">
            <Form compact={false} pad='medium'>
              <Header>
                <Heading strong={true} uppercase={false} tag="h3">
                  Don't wait Tommorrow
                </Heading>
              </Header>
              <FormFields>
                <TextInput />
              </FormFields>
              <FormFields>
                <TextInput />
              </FormFields>
            </Form>
          </Box>
        </Box>
      </Box>
    </Hero>
  </div>
);

export default MainHero;
