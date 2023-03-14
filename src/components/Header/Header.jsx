import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={logo} alt="Factory Logo" />
        </div>

        <button>
          <FiMenu
            size={28}
            className={styles.mebuButton}
          />
        </button>
      </div>
    </header>
  )
}
