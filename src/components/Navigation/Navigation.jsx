import React from 'react'
import './Navigation.css';

const Navigation = () => {
  return (
    <div className='navigation-wrapper'>
        <div className="logo itms">
            <h4>LOLx</h4>
        </div>

        <div className="navigation-search-and-btn itms">
            <input placeholder='Pokušaj: Kuća od 25.000e' />
            <button>PRETRAŽUJ</button>
        </div>

        <div className="navigation-btns itms">
            <button className='navigation-btn-objavi'>OBJAVI OGLAS</button>
            <button className='navigation-btn-prijava'>PRIJAVA</button>
        </div>
    </div>
  )
}

export default Navigation