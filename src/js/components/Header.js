import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';

const TopHeader = () => (
  <div>
    <Header
      style={{
        backgroundColor: '#2fa1b3',
        marginTop: '30px'
      }}
      float={false}
      size='medium'
      splash={false}
      fixed={true}
    >
      <Title
        style={{ fontFamily: 'Cinzel', color: '#fff', paddingLeft: '20px' }}
      >
        WhentWort Andrews
      </Title>
      <Box flex={true} justify='end' direction='row' responsive={true}>
        <Menu
          responsive={true}
          inline={true}
          primary={false}
          direction='row'
          closeOnClick={false}
          style={{ fontFamily: 'Cormorant SC', paddingRight: '20px' }}
        >
          <Anchor style={{ color: '#333' }} href='#'>
            Home
          </Anchor>
          <Anchor style={{ color: '#333' }} href='#'>
            About
          </Anchor>
          <Anchor style={{ color: '#333' }} href='#'>
            Your Rights
          </Anchor>
          <Anchor style={{ color: '#333' }} href='#'>
            Contacts
          </Anchor>
        </Menu>
      </Box>
    </Header>
  </div>
);

export default TopHeader;
