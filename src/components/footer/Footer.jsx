import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.cont}>
        <div className={styles.footerInfo}>
          <div className={styles.footerLogo}>
            <Image src='/public/klinder.png' alt='' width={120} height={50} className={styles.footerimg} />
          </div>
          <p className={styles.footerDes}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore nesciunt numquam ex hic quia quod doloribus id soluta amet alias quo, qui a suscipit sed officiis veritatis.
            Odit, unde ipsum.
          </p>
          <div className={styles.social}>
            <Image src='/facebook.png' alt='facebook' width={20} height={20} />
            <Image src='/instagram.png' alt='instagram' width={20} height={20} />
            <Image src='/tiktok.png' alt='tiktok' width={20} height={20} />
            <Image src='/youtube.png' alt='youtube' width={20} height={20} />
          </div>
        </div>
        <div className={styles.menu}>
          <h1 className={styles.menuName}>Links</h1>
          <Link className={styles.footerLink} href='/'>Home</Link>
          <Link className={styles.footerLink} href='/'>Blog</Link>
          <Link className={styles.footerLink} href='/'>About</Link>
          <Link className={styles.footerLink} href='/'>Contact</Link>
        </div>
        <div className={styles.menu}>
          <h1 className={styles.menuName}>Tags</h1>
          <Link className={styles.footerLink} href='/'>Style</Link>
          <Link className={styles.footerLink} href='/'>Fashion</Link>
          <Link className={styles.footerLink} href='/'>Food</Link>
          <Link className={styles.footerLink} href='/'>Travel</Link>
        </div>
        <div className={styles.menu}>
          <h1 className={styles.menuName}>Social</h1>
          <Link className={styles.footerLink} href='/'>Facebook</Link>
          <Link className={styles.footerLink} href='/'>Instagram</Link>
          <Link className={styles.footerLink} href='/'>Tiktok</Link>
          <Link className={styles.footerLink} href='/'>Youtube</Link>
        </div>
      </div>
      <div className={styles.colfooter}>
        <p className={styles.develop}>Developed py MONTAGAB</p>
      </div>
    </div>
  )
}

export default Footer
