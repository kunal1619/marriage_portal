import React from 'react'
import Name from './Name'
import Contact from './Email_mob'
import Religion from './Religion'
import Data from './Data'
import Carrer from './Carr_job'
import Doccument from './Doccuments'
import Uploaded from './Upload_page'
import { Stepper, StepLabel, Step } from '@mui/material';
import { UserAuth } from '../../context/AuthContext';


const PagesRoot = () => {
    const {currentStep} = UserAuth();

    function showStep(step){
        switch(step){
            case 1:
                return <Name/>
            case 2:
                return <Contact/>
            case 3:
                return <Religion/>
            case 4:
                return <Carrer/>
            case 5:
                return <Data/>
            case 6:
                return <Doccument/>
            case 7:
                return <Uploaded/>
            
        }
    }
  return (
    <div>
    <div className='flex justify-center'>
    <Stepper style={{width : '75%'}} activeStep = {currentStep-1} orientation='horizontal'>
      <Step>
        <StepLabel></StepLabel>
    </Step>
      <Step>
        <StepLabel></StepLabel>
    </Step>
      <Step>
        <StepLabel></StepLabel>
    </Step>
      <Step>
        <StepLabel></StepLabel>
    </Step>
      <Step>
        <StepLabel></StepLabel>
    </Step>
      <Step>
        <StepLabel></StepLabel>
    </Step>
    </Stepper>
    </div>
    
    <div>
        {showStep(currentStep)}
    </div>
          
    </div>
  )
}

export default PagesRoot
