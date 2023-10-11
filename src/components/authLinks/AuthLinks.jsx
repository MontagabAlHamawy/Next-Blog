"use client"

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
function AuthLinks() {

  const [open, setOpen] = useState(false)
  const status = 'notauthenticate'
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
      {/* <span className={styles.buttom}>Logout</span> */}
      {admin}
      <Link href='/login' className={styles.buttom}>Login</Link>
    </div>)
  }

  //dfghjkl;
  let loginn = (<></>)
  let adminn = (<></>)

  //admin new post
  if (statusAdmin === 'admin') {
    adminn = (<Link href='/add-post' className={styles.buttom} onClick={() => setOpen(!open)}>AddPost</Link>)
  }

  // user status
  if (status === 'notauthenticated') {
    loginn = (<Link href='/login' className={styles.buttom} onClick={() => setOpen(!open)}>Login</Link>)
  } else {
    loginn = (<div className={styles.Links}>
      {/* <span className={styles.buttom} onClick={() => setOpen(!open)}>Logout</span> */}
      {adminn}
      <Link href='/login' className={styles.buttom} onClick={() => setOpen(!open)}>Login</Link>
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
          <Link className={styles.link} onClick={() => setOpen(!open)} href='/'>Home</Link>
          <Link className={styles.link} onClick={() => setOpen(!open)} href='/blog'>Blog</Link>
          <Link className={styles.link} onClick={() => setOpen(!open)} href='/contact'>Contact</Link>
          <Link className={styles.link} onClick={() => setOpen(!open)} href='/about'>About</Link>
          {loginn}
        </div>}
    </>
  )
}

export default AuthLinks