import React from 'react'
import { Link } from 'react-router-dom'

import '../Navbar/Navbar.css'


const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/receitas/home">
          <h1>Recipes.com</h1>
        </Link>
        <ul className='orange'>
          <Link to="/receitas/home" className='orange'>Home</Link>
          <Link to="/receitas/search" className='orange'>Recipes</Link>
        </ul>
    </nav>
  )
}

export default Navbar
