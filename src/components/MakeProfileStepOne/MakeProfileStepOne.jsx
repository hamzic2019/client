import React from 'react'
import './MakeProfileStepOne.css';
import { SiGooglemybusiness } from "react-icons/si";
import { BsFillPersonFill } from "react-icons/bs";

const MakeProfileStepOne = ({choice, setChoice, disabled, setStepTwo}) => {
  return (
    <>
    <h1 className='makeprofile-heading'>Kako planirate koristiti e-Pijacu?</h1>
          <h4 className='makeporifle-subheading'>Izaberite paket koji odgovara vašim potrebama</h4>

          <div className="paketi">
            <div className={[choice === 'business' ? 'biznis-paket aktivni-paket' : 'biznis-paket']}
              onClick={() => setChoice('business')}

            >
                <SiGooglemybusiness
                    className={choice === 'business' ? 'makeprofileicons1 aktivna-ikona': 'makeprofileicons1'}
                />
                <h6 style={{fontSize: 17}}>Pravno Lice</h6>
            </div>
            <div
              className={[choice === 'personal' ? 'biznis-paket aktivni-paket' : 'privatni-paket']}
              onClick={() => setChoice('personal')}
            >
                <BsFillPersonFill className={choice === 'personal' ? 'makeprofileicons1 aktivna-ikona': 'makeprofileicons2'} />
                <h6 style={{fontSize: 17}}>Privatna Osoba</h6>
            </div>
          </div> {/** PAKETI */}

          <button className={!disabled ? 'makeprofile-next disabled': 'makeprofile-next'}
              onClick={() => {
                if(disabled){
                  setStepTwo(true)
                }
              }}
          >SLJEDEĆI KORAK</button>
           
           <div className="steps">
              <div className="vrsta-profila">
                  <h1>1</h1>
                  <p>Vrsta Profila</p>
              </div>
              <div className='linija'></div>
              <div className="osnovni-podaci">
                  <h1>2</h1>
                  <p>Osnovni podaci</p>
              </div>
           </div>
           
    </>
  )
}

export default MakeProfileStepOne