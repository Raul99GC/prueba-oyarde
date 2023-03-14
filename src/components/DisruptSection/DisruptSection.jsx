import React from 'react'
import styles from './DisruptSection.module.css'

export const DisruptSection = () => {
  return (
    <section className={styles.DisruptSection}>
      <div className={styles.container}>

        <div className={styles.contSubtitle}>
          <h2 className={styles.subtitle}>Disrupt or be disrupted.</h2>
        </div>
        <p className={styles.paragraph}>
          Change is the only constant.
          <br />
          If you want to keep up with ever-evolving technology, you have to disrupt the status quo. Work smarter, not harder. Let technology be your ally.

        </p>
      </div>
    </section>
  )
}
