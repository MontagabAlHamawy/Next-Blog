import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Card() {
    return (
        <div className={styles.container}>
            <Link href='/'>
                <div className={styles.post}>
                    <div className={styles.imgContainer}>
                        <Image src='/travel.png' alt='p1' fill className={styles.image} />
                    </div>
                    <div className={styles.textContainer}>
                        <div className={styles.day}>
                        <span className={styles.date}>11.02.2023</span>
                        <span className={styles.category}><Link href='/culture'>CULTURE</Link></span>
                        </div>
                        <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Corporis laboriosam hic animi illo nesciunt possimus suscipit ad harum molestias maxime cum ipsam a aliquid,
                            itaque laborum quam illum voluptatibus assumenda?</p>
                        <Link className={styles.link} href='/'>Read More</Link>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Card