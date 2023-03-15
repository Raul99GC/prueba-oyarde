import React from 'react'
import styles from './styles/menuDesk.module.css'

export const MenuDesk = () => {
  return (
    <nav className={styles.navMenu }>
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
