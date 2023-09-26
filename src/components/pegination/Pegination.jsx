import React from 'react'
import styles from './pegination.module.css'

function Pegination() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pegination