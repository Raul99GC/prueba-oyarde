import React from 'react'
import styles from './home.module.css'
import video from './assets/heroe.mp4'

export const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.infContainer}>
        <h1 className={styles.title}>Manufacturing digital solutions.</h1>
        <p className={styles.infParagraph}>Custom digital products that will forever change the way you do business.</p>
      </div>
      <div className={styles.videoCont}>
        <video autoPlay loop muted src={video} className={styles.video}></video>
      </div>
    </section>
  )
}
