import React from 'react'
import styles from './styles/menuMobile.module.css'

export const MenuMobile = ({ buttonStatus }) => {
  return (
    <nav className={`${styles.navMenu} ${buttonStatus && styles.active}`}>
      <ul className={styles.navContainer}>
        <li className={styles.navItem}>ABOUT</li>
        <li className={styles.navItem}>WORK</li>
        <li className={styles.navItem}>CLIENTS</li>
        <li className={styles.navItem}>BLOG</li>
        <li className={styles.navItem}>CONTACT</li>
      </ul>
    </nav>
  )
}
