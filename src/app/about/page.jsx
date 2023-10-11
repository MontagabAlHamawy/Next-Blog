import React from 'react'
import styles from './aboutPage.module.css'

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src='/about.png' className={styles.headImg} />
        <h1 className={styles.title}> About Us</h1>
      </div>
      <div className={styles.content}>
        <p className={styles.maindes}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quo earum quas tenetur deleniti,
          sed cupiditate repudiandae molestias porro adipisci voluptate praesentium.
          Cumque sint ad,
          minus quaerat eaque exercitationem magni dicta.</p>
        <div className={styles.descre}>
          <p className={styles.desp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quo earum quas tenetur deleniti,
            sed cupiditate repudiandae molestias porro adipisci voluptate praesentium.</p>
          <img src='/img1.jpeg' className={styles.desImg} />
        </div>
        <div className={styles.descre}>
          <img src='/img2.jpeg' className={styles.desImg} />
          <p className={styles.desp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quo earum quas tenetur deleniti,
            sed cupiditate repudiandae molestias porro adipisci voluptate praesentium.</p>
        </div>
        <div className={styles.descre}>
          <p className={styles.desp}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quo earum quas tenetur deleniti,
            sed cupiditate repudiandae molestias porro adipisci voluptate praesentium.</p>
          <img src='/img3.jpg' className={styles.desImg} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage