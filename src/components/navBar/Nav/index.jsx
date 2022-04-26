import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Nav() {
  return (
    <nav>
        <div className="Nav">
            <Link  style={{ textDecoration: 'none', color: 'white' }} to='/' className='navLink'>New News</Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Programming' className='navLink'>Programming</Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Covid' className='navLink'>Covid</Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Saved' className='navLink'>Saved</Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Search' className='navLink'></Link>
        </div>
    </nav>
  )
}

export default Nav