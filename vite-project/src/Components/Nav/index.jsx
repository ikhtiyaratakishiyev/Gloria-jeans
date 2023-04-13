import React from 'react'
import './style.scss'
import Gloria from  '../../Assets/Images/Gloria.avif'
const Nav = () => {
  return (
    <div>
        <nav>
            <div className="nav-mini">
                <button>LOYALITY PROGRAM</button>

                <button>UNITED STATES</button>
            </div>
            <div className="container">
            <ul>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>Menu</li>
                <li className='nav-link'>Our Story</li>
              
                <button className='nav-link'>Shop</button>
            </ul>
            <img src={Gloria} alt="" />
            <div className="nav-right">
                <button className='nav-link'>Store Location</button>
                <button className='nav-link'>Own a Franchies</button>
                
            <div className="lineV">
                <h1>1</h1>
                <h1>2</h1>
                <h1>3</h1>
            </div>
            </div>
            </div>
            
        </nav>
    </div>
  )
}

export default Nav