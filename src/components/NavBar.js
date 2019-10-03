import React from 'react'
import {Link} from 'react-router-dom';
const NavBar = () => {
   
    return (
        <div>
            <nav className='navbar-fixed transparent' style={{height:'8vh',overflow:'hidden'}} >
                <div className='nav-wrapper nav_bar' >
                    <ul>
                        <li><Link to='/' className='black-text flow-text'>Son Kullanılanlar</Link></li>
                        <li><Link to='/' className='black-text flow-text'>Kişiler</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
