import React from 'react'
import './MakeProfileStepTwo.css';

const MakeProfileStepTwo = ({setStepTwo}) => {
  return (
    <div className="makeprofilesteptwo-wrapper2">
            <h1>Unesite osnove podatke</h1>
            <div className="steps2">
                <div className="vrsta-profila2"
                  onClick={() => setStepTwo(false)}
                >
                    <h1>1</h1>
                    <p>Vrsta Profila</p>
                </div>
                <div className='linija2'></div>
                <div className="osnovni-podaci2">
                    <h1>2</h1>
                    <p>Osnovni podaci</p>
                </div>
           </div>
    </div>
  )
}

export default MakeProfileStepTwo