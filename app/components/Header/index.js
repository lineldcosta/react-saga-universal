import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import css from './styles.css'


const Header = (props) => {

  return (
    <header className={css.mainHeader}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  // propName: PropTypes.string.isRequired,
}

export default Header
