import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import StepWrapper from '../../components/StepWrapper';
import { Grid, TextField } from '@mui/material';
import { FileUpload } from '@mui/icons-material';
import Button from '@mui/material/Button';

const Create = () => {
const [activeStep, setActiveStep] = useState(0);
const [picture, setPicture] = useState(null)
const [audio, setAudio] = useState(null)



   const next = () => {
      if(activeStep !== 2) {
         setActiveStep(prev => prev + 1)
      }
   }

   const back = () => {
      setActiveStep(prev => prev - 1)
   }

  return (
    <MainLayout>
         <StepWrapper activeStep={activeStep}>
            {activeStep === 0 &&
               <Grid container direction={'column'} style={{padding: 20}} >
                  <TextField 
                    style={{marginTop: 10}}
                    label={"Название трека"}
                  />
                  <TextField 
                    style={{marginTop: 10}}
                    label={"Имя испольнителя"}
                  />
                  <TextField 
                    style={{marginTop: 10}}
                    label={"Слова к треку"}
                    multiline 
                    rows={3}
                  />
               </Grid>
            }
            {activeStep === 1 &&
                <FileUpload setFile={setPicture} accept="image/*">
                   <Button>Загрузить обложку</Button>
                </FileUpload>
            }
            {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept="audio/*">
                      <Button variant="outlined" component="label">Загрузить аудио</Button>
                </FileUpload>
            }
         </StepWrapper>
         <Grid container justifyContent="space-between">
            <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
            <Button onClick={next}>Далее</Button>
         </Grid>
    </MainLayout>
  )
}

export default Create;