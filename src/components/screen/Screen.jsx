import React from 'react'
import styles from './screen.module.css'

function Screen() {
    return (
        <div className={styles.continer} id='loade'>
            <div className={styles.linesBox}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
        </div>
    )
}
export default Screen

