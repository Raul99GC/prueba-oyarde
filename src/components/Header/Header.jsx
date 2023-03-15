import React, { useState } from 'react'
import styles from './styles/header.module.css'
import logo from '../../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { MenuMobile } from './MenuMobile'


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

        <MenuMobile buttonStatus={buttonStatus} />

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
