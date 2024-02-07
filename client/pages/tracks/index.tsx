import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { Box, Button, Card, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';
import { useActions } from '../../hooks/useAction';

const Index = () => {
  const router = useRouter();

  const tracks: ITrack[] = [
   {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/3495.mp3', picture: 'http://localhost:5000/image/avat.jpeg', comments: []},
   {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/94150.mp3', picture: 'http://localhost:5000/image/unnamed.jpeg', comments: []},
   {_id: '1', name: 'Track 1', artist: 'Исполнитель 1', text: 'Какой-то текст', listens: 5, audio: 'http://localhost:5000/audio/94150.mp3', picture: 'http://localhost:5000/image/unnamed.jpeg', comments: []},
  ]

  return (
   <MainLayout>
         <Grid container justifyContent='center'>
            <Card style={{width: 900}}>
               <Box p={3}>
                  <Grid container justifyContent='space-between'>
                     <h1>Список треков</h1>
                     <Button onClick={() => router.push('/tracks/create')}>Загрузить</Button>
                  </Grid>
               </Box>
               <TrackList tracks={tracks}/>
            </Card>
         </Grid>
    </MainLayout>

  )
}

export default Index;

// function useActions() {
//    throw new Error('Function not implemented.');
// }
