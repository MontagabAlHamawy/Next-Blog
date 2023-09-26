import React from 'react'
import styles from './smalCard.module.css'
import Image from 'next/image'

function SmalCard({withImg}) {

    return (
        <div className={styles.container}>
            {withImg && (
            <div className={styles.scardimg}>
                <Image src='/style.png' alt='' width={60} height={60} className={styles.scarImg} />
            </div>
            )}
            <div className={styles.scarDet}>
                <p className={styles.scardCategory}>Travel</p>
                <p className={styles.scardDes}>Lorem ipsum dolor sit amet consectetur</p>
                <div className={styles.scardmeta}>
                    <span className={styles.scardname}>Montagab</span>
                    <span className={styles.scardDate}>11.02.2023</span>
                </div>
            </div>
        </div>
    )
}
export default SmalCard