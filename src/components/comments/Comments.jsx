import React from 'react'
import styles from './comments.module.css'
import Image from 'next/image'

function Comments({withImg}) {

    return (
        <div className={styles.container}>
            {withImg && (
            <div className={styles.scardimg}>
                <Image src='/fashion.png' alt='' width={60} height={60} className={styles.scarImg} />
            </div>
            )}
            <div className={styles.scarDet}>
                <p className={styles.scardCategory}>Ahmad Ali</p>
                <p className={styles.scardDes}>Lorem ipsum dolor sit amet consectetur</p>
                <div className={styles.scardmeta}>
                    <span className={styles.scardDate}>05.09.2023</span>
                </div>
            </div>
        </div>
    )
}
export default Comments