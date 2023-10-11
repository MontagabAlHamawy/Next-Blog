import React from 'react'
import styles from './contactPage.module.css'

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src='/map2.jpg' className={styles.headImg} />
        <h1 className={styles.title}> Contact Us</h1>
      </div>
      <div className={styles.conten}>
        <div className={styles.wrapper}>
          <h1 className={styles.cominttitle}>Name</h1>
          <input type='text' placeholder='Write Your Name' className={styles.inputc} />
          <h1 className={styles.cominttitle}>Email</h1>
          <input type='email' placeholder='Write Your Email' className={styles.inputc} />
          <h1 className={styles.cominttitle}>Nots</h1>
          <input type='text' placeholder='Write Your Nots' className={styles.inputcc} />
          <button className={styles.button}>Comment</button>
        </div>
        <div className={styles.wrapperr}>
          <p className={styles.condes}>+963 312 664 578</p>
          <p className={styles.condes}>+963 996 853 342</p>
          <p className={styles.condes}>info@next-blog.com</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage