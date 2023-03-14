import React from 'react'
import { Header } from "./components/Header/Header"
import { Home } from "./components/Home/Home"
import styles from './app.module.css'
import { DisruptSection } from './components/DisruptSection/DisruptSection'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Home />
        <DisruptSection />
      </main>

    </div>
  )
}

export default App
