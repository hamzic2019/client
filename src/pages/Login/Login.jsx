import React, {useState} from 'react'
import ReactLoading from 'react-loading';
import {Link} from 'react-router-dom';
import './Login.css'

const Login = () => {
  const [error, setError] = useState(false);
  const [loading,setLoading] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handelLogin = (e) => {
    e.preventDefault();

    console.log(emailInput);
    console.log(passwordInput);
    console.log(rememberMe);
  }

  return (
    <div className='login-wrapper'>
        <div className="login-left">

            {
              loading ? 
              
              <ReactLoading type={'spinningBubbles'} color={'lightgray'} height={250} width={250} />
              :

              <form onSubmit={(e) => handelLogin(e)} className='login-forma'>

              <h2>Dobrodošli nazad!</h2>
              <h4>Dobrodošli nazad! Unesite vaše detalje.</h4>

              {error &&
                <div className="login-error">
                  <p>Vaša lozinka je pogrešna</p>
              </div>
              } {/** ERROR */}

              <label 
                  className='login-email-label' 
                  style={{width: '100%'}}
                  htmlFor="email"
              >
                Email
                <input 
                    className='login-email' 
                    type="email" 
                    placeholder='Enter your email' 
                    onChange={(e) => setEmailInput(e.target.value)}
                    value={emailInput}
                    required={true}
                />
              </label>

              <label htmlFor='password' className='login-password-label' style={{width: '100%'}}>
                Password
                <input 
                    className='login-password' 
                    type="password" 
                    placeholder='* * * * * * * *' 
                    onChange={(e) => setPasswordInput(e.target.value)}
                    value={passwordInput}
                    required={true}
                />
              </label>


              <div className='login-boxes'>
                <label htmlFor="checkboxic">
                  <input 
                      type="checkbox" 
                      id='checkboxic' 
                      style={{marginRight: '5px'}}
                      onChange={(e) => setRememberMe(prev => !prev)}
                      value={rememberMe}
                      checked={rememberMe}
                  />
                  Zapamti moju lozinku
                </label>

                <Link to="/reset-password">Restartuj lozinku</Link>
              </div>

              <button 
                  type="submit"
                  className='login-login-btn'
              >
                Prijavi se
              </button>

              <p className='login-create-profile'>Nemate Profil? <Link to="/novi-profil">Kreirajte profil odmah!</Link> </p>  
              
            </form> 
            
            } {/** LOADING END */}

            

        </div> {/** login-left */}
        <div className="login-right">

        </div>

    </div>
  )
}

export default Login