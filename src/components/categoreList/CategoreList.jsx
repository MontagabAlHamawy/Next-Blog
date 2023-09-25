import React from 'react'
import styles from './categoreList.module.css'
import Link from 'next/link'
import Image from 'next/image'


function CategoreList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> popular Categories:</h1>
      <div className={styles.categories}>
        <Link href='/blog?cat=style' className={`${styles.category} ${styles.style}`}>
          <Image src='/style.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Style</p>
        </Link>
        <Link href='/blog?cat=fashion' className={`${styles.category} ${styles.fashion}`}>
          <Image src='/fashion.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Fashion</p>
        </Link>
        <Link href='/blog?cat=food' className={`${styles.category} ${styles.food}`}>
          <Image src='/food.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Food</p>
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.category} ${styles.travel}`}>
          <Image src='/travel.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Travel</p>
        </Link>
        <Link href='/blog?cat=travel' className={`${styles.category} ${styles.calture}`}>
          <Image src='/culture.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Calture</p>
        </Link>
        <Link href='/blog?cat=coding' className={`${styles.category} ${styles.coding}`}>
          <Image src='/coding.png' alt='' width={32} height={32} className={styles.catImg} />
          <p className={styles.catName}>Coding</p>
        </Link>
      </div>
    </div>
  )
}

export default CategoreList