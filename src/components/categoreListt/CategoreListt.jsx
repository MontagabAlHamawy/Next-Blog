import React from 'react'
import styles from './categoreListt.module.css'
import Link from 'next/link'

function CategoreListt() {
    return (
        <div className={styles.container}>
            <div className={styles.categories}>
                <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
                    <p className={styles.catName}>Style</p>
                </Link>
                <Link href='/blog?cat=fashion' className={`${styles.category} ${styles.fashion}`}>
                    <p className={styles.catName}>Fashion</p>
                </Link>
                <Link href='/blog?cat=food' className={`${styles.category} ${styles.food}`}>
                    <p className={styles.catName}>Food</p>
                </Link>
                <Link href='/blog?cat=travel' className={`${styles.category} ${styles.travel}`}>
                    <p className={styles.catName}>Travel</p>
                </Link>
                <Link href='/blog?cat=travel' className={`${styles.category} ${styles.calture}`}>
                    <p className={styles.catName}>Calture</p>
                </Link>
                <Link href='/blog?cat=coding' className={`${styles.category} ${styles.coding}`}>
                    <p className={styles.catName}>Coding</p>
                </Link>
            </div>
        </div>
    )
}

export default CategoreListt