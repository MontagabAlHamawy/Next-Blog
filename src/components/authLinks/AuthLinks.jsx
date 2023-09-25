"use client"

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
function AuthLinks() {

  const [open, setOpen] = useState(false)
  const status = 'notauthenticated'
  const statusAdmin = 'admin'

  let login = (<></>)
  let admin = (<></>)

  //admin new post
  if (statusAdmin === 'admin') {
    admin = (<Link href='/add-post' className={styles.buttom}>AddPost</Link>)
  }

  // user status
  if (status === 'notauthenticated') {
    login = (<Link href='/login' className={styles.buttom}>Login</Link>)
  } else {
    login = (<div className={styles.Links}>
      <span className={styles.buttom}>Logout</span>
      {admin}
    </div>)
  }



  return (
    <>
      <div className={styles.hed}>
        {login}
      </div>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open &&
        <div className={styles.respons}>
          <Link className={styles.link} href='/'>Home</Link>
          <Link className={styles.link} href='/contact'>Contact</Link>
          <Link className={styles.link} href='/about'>About</Link>
          {login}
        </div>}
    </>
  )
}

export default AuthLinks