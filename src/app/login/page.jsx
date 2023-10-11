import React from 'react'
import styles from './loginPage.module.css'

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.titlePage}>
        <h1 className={styles.title}>Login</h1>
      </div>
      <div className={styles.conten}>
        <div className={styles.wrapper}>
          <h1 className={styles.cominttitle}>Email</h1>
          <input type='email' placeholder='Write Your Email' className={styles.inputc} />
          <h1 className={styles.cominttitle}>Password</h1>
          <input type='text' placeholder='Write Your Password' className={styles.inputc} />
          <button className={styles.button}>Comment</button>
        </div>
        <div className={styles.wrapper}>
          <div className={`${styles.socialButton} ${styles.but1}`}>Sing in With Google</div>
          <div className={`${styles.socialButton} ${styles.but2}`}>Sing in With GitHub</div>
          <div className={`${styles.socialButton} ${styles.but3}`}>Sing in With FaceBook</div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage