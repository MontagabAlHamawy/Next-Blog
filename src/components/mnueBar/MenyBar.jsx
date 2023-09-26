"use client"

import React, { useState } from 'react'
import styles from './menyBar.module.css'
import Menu from '../menu/Menu'
import Link from 'next/link'
import SmalCard from '../smalCard/SmalCard'
import CategoreListt from '../categoreListt/CategoreListt'
function Menubar() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={styles.menuBar} onClick={() => setOpen(!open)}>
                <div className={styles.point}></div>
                <div className={styles.point}></div>
                <div className={styles.point}></div>
            </div>
            {open &&
                <div className={styles.respons}>
                    <div className={styles.container}>
                        <h2 className={styles.short}>{"What's hot"}</h2>
                        <h1 className={styles.title}>Most Popular:</h1>
                        <div className={styles.items}>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={false} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={false} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={false} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={false} />
                            </Link>
                        </div>
                        {/* ........ */}
                        <h2 className={styles.short}>Discover by topic</h2>
                        <h1 className={styles.title}>Categories:</h1>
                        <CategoreListt />
                        <h2 className={styles.short}>Choser by the editor</h2>
                        <h1 className={styles.title}>Editor Pick:</h1>
                        <div className={styles.items}>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={true} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={true} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={true} />
                            </Link>
                            <Link href='/' className={styles.item}>
                                <SmalCard withImg={true} />
                            </Link>
                        </div>
                    </div>

                </div>}
        </>
    )
}

export default Menubar