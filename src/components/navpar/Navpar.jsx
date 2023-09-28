import React from 'react'
import styles from './navpar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

function Navpar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/facebook.png' alt='facebook' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube' width={24} height={24} />
      </div>
      <div className={styles.logo}>
        <Image  src='/klinder.png' alt='klinder' width={120} height={50}/>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/blog'>Blog</Link>
        <Link className={styles.link} href='/contact'>Contact</Link>
        <Link className={styles.link} href='/about'>About</Link>
        <AuthLinks />
        <ThemeToggle />
      </div>

    </div>
  )
}

export default Navpar