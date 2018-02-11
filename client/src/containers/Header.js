import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from 'Actions'
import styles from './Header.scss'
import { getIsLoggedIn } from 'Selectors'

const Header = ({ isLoggedIn, logout }) => (
  <header className={styles.header}>
    <Link to='/articles' className={styles['nav-link']}>Articles</Link>
    {
      isLoggedIn ? (
        <div className={styles.auth}>
          <a href='#' className={styles['nav-link']} onClick={logout}>Logout</a>
        </div>
      ) : (
        <div className={styles.auth}>
          <Link to='/login' className={styles['auth-link']}>Signin</Link>
          <Link to='/signup' className={styles['auth-link']}>Signup</Link>
        </div>
      )
    }
  </header>
)

export default connect(
  state => ({ isLoggedIn: getIsLoggedIn(state) }),
  { logout }
)(Header)
