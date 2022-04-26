import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Nav() {
  return (
    <nav>
        <div className="Nav">
            <Link  style={{ textDecoration: 'none', color: 'white' }} to='/' className='navLink'><a>New News</a></Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Programming' className='navLink'><a>Programming</a></Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Covid' className='navLink'><a>Covid</a></Link>
            <Link  style={{ textDecoration: 'none', color: 'white'}} to='/Saved' className='navLink'><a>Saved</a></Link>
        </div>
    </nav>
  )
}

export default Nav