import React, {useEffect, useState} from 'react'
import './Navigation.css';
import {useNavigate, Link} from 'react-router-dom';

const Navigation = (data) => {
  const navigate = useNavigate();
  
  const datas = [
    {
        title: 'Haris je kupio'
    },{
        title: 'amina nije jela'
    },{
        title: 'trebaju se palacinci napraviti'
    },
  ]

  const [activeSearch, setActiveSearch] = useState(false)
  const [input, setInput] = useState('');
  
  const handelAsk = () => {
    navigate('/search');
    setActiveSearch(true);
  }

  useEffect(() => {
    /*const result = datas.filter(item => {
        return item.title.toLowerCase().includes(input.toLocaleLowerCase());
    })
    console.log(result); REAL TIME DATA SEARCH*/


  }, [input])

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
            <button className='navigation-btn-objavi'>OBJAVI OGLAS</button>
            <button className='navigation-btn-prijava'>PRIJAVA</button>
        </div>

    </div>
  )
}

export default Navigation