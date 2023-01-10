import React, {useState} from 'react'
import './ResetPassword.css';
import {Link} from 'react-router-dom';

import { BsKey } from "react-icons/bs";
import { HiArrowSmLeft } from "react-icons/hi";

//HiArrowSmLeft

const ResetPassword = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  return (
    <div className='resetpassword-wrapper'>
      <div className='wrapper-inside-resetpassword'>
          <BsKey className='resetpassword-logo' />
          {successMessage &&
            <div className='resetpassword-success-message-wrapper'>
                <p className='kurac'>Instructions are sent to your email address: example@example.com</p>
            </div>
          }
          <h3>Restartujte Lozinku?</h3>
          <p>Bez brige, poslat ćemo Vama instrukcije.</p>
          <div className='resetpasswordemailwrapper'>
            <label htmlFor="email">
              Email
                <input 
                  type="email" 
                  className='resetpasswordemail' 
                  placeholder='Unesite vašu e-mail Adresu'  
                />
            </label>
          </div>
          <button>Postavi novu lozinku</button>
          <Link to="/prijava" className='resetpasswordback'>
              <HiArrowSmLeft 
                style={{
                  position:'absolute',
                  left: '-22px'
                }}
              /> 
            
            Povrat za prijavu</Link>
      </div>
    </div>
  )
}

export default ResetPassword