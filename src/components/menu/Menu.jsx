import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import SmalCard from '../smalCard/SmalCard'
import Image from 'next/image'
import CategoreList from '../categoreList/CategoreList'
import CategoreListt from '../categoreListt/CategoreListt'


function Menu() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.short}>{"What's hot"}</h2>
        <h1 className={styles.title}>Most Popular:</h1>
        <div className={styles.items}>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={false} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={false} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={false} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={false} />
          </Link>
        </div>
        {/* ........ */}
        <h2 className={styles.short}>Discover by topic</h2>
        <h1 className={styles.title}>Categories:</h1>
        <CategoreListt />
        <h2 className={styles.short}>Choser by the editor</h2>
        <h1 className={styles.title}>Editor Pick:</h1>
        <div className={styles.items}>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={true} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={true} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={true} />
          </Link>
          <Link href='/' className={styles.item}>
            <SmalCard withImg={true} />
          </Link>
        </div>
      </div>

    </>
  )
}

export default Menu