import React, {useEffect, useState} from 'react'
import './Navigation.css';
import {useNavigate, Link} from 'react-router-dom';

const Navigation = (data) => {
  const navigate = useNavigate();

  const [activeSearch, setActiveSearch] = useState(false)
  const [input, setInput] = useState('');
  
  const handelAsk = () => {
    navigate('/trazi');
    setActiveSearch(true);
  }


  return (
    <div className='navigation-wrapper'>
        <div className="logo itms">
            <Link to="/" onClick={() => setActiveSearch(false)} className="link"><h4>VR Pijaca</h4></Link>
        </div>

        <div className={`navigation-search-and-btn ${activeSearch && 'active-search'}`}>
            <input 
                className='search-and-btn-item1' 
                placeholder='Pokušaj: Kuća od 25.000e'
                onFocus={() => handelAsk()}
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button className='search-and-btn-item2'>PRETRAŽUJ</button>
        </div>

        <div className="navigation-btns itms">
            <Link to="/objavi" className='navigation-btn-objavi'>OBJAVI OGLAS</Link>
            <Link to="/prijava" className='navigation-btn-prijava'>PRIJAVA</Link>
        </div>

    </div>
  )
}

export default Navigation