import React, { useState } from 'react'
import styles from './header.module.css'
import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'


export const Header = () => {

  const [buttonStatus, setButtonStatus] = useState(false)

  const handleClick = () => {
    setButtonStatus(!buttonStatus)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={logo} alt="Factory Logo" />
        </div>

        <nav className={`${styles.navMenu} ${buttonStatus&& styles.active}`}>
          <ul className={styles.navContainer}>
            <li className={styles.navItem}>ABOUT</li>
            <li className={styles.navItem}>WORK</li>
            <li className={styles.navItem}>CLIENTS</li>
            <li className={styles.navItem}>BLOG</li>
            <li className={styles.navItem}>CONTACT</li>
          </ul>
        </nav>

        <button onClick={handleClick}>
          <FiMenu
            size={28}
            className={styles.mebuButton}
          />
        </button>
      </div>
    </header>
  )
}
