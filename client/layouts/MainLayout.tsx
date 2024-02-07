import React from 'react';
import Navbar from '../components/Navbar';
import { ScriptProps } from 'next/script';
import { Container } from '@mui/material';
import Player from '../components/Player';

const MainLayout: React.FC<ScriptProps> = ({children}) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '120px 150px'}}>
          {children}
      </Container>
      <Player/>
    </>
  )
}

export default MainLayout;