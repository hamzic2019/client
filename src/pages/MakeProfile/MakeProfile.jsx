import React, {useState} from 'react'
import './MakeProfile.css';

// BsFillPersonFill
import { useEffect } from 'react';
import MakeProfileStepOne from '../../components/MakeProfileStepOne/MakeProfileStepOne';
import MakeProfileStepTwo from '../../components/MakeProfileStepTwo/MakeProfileStepTwo';

const MakeProfile = () => {
  const [choice, setChoice] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);

  useEffect(() => {
    if(choice){
      setDisabled(true);
    }

  },[choice, disabled])

  

  return (
    <div className='makeprofile-wrapper'>
        <div className="makeprofile-passive-side">

        </div>
        <div className="makeprofile-active-side">
              {!stepTwo ?
                  <MakeProfileStepOne setStepTwo={setStepTwo} disabled={disabled} setDisabled={setDisabled} choice={choice} setChoice={setChoice} />
                  :
                  <MakeProfileStepTwo setStepTwo={setStepTwo} />
              }
        </div> {/** ACTIVE SIDE */}
    </div>
  )
}

export default MakeProfile

// <MakeProfileStepTwo />
// <MakeProfileStepOne choice={choice} setChoice={setChoice} />