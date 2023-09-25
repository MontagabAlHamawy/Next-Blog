import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'


function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b className={styles.bold}>
          Lorem ipsum dolor, 
        </b>
          sit amet consectetur, adipisicing elit.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='p1' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Corporis laboriosam hic animi illo nesciunt possimus suscipit ad harum molestias maxime cum ipsam a aliquid,
             itaque laborum quam illum voluptatibus assumenda?</p>
             <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured