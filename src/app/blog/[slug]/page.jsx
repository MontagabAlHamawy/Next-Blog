import React from 'react'
import styles from './slagPage.module.css'
import Comments from '@/components/comments/Comments'

function page() {
    return (
        <div className={styles.container}>
            <div className={styles.imagePosts}>
                <img src='/p1.jpeg' className={styles.imgPost}></img>
            </div>
            <div className={styles.postMate}>
                <span className={styles.scardname}>Montagab</span>
                <span className={styles.scardCate}>Travel</span>
                <span className={styles.scardDate}>11.02.2023</span>
            </div>
            <div className={styles.decPost}>
                <h1 className={styles.postTilte}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h1>
                <div className={styles.postDec}>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia. </p>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                    <div className={styles.imgcont}>
                        <img src='/food.png' className={styles.imgposts} />
                    </div>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                    <p className={styles.postDecs}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Aperiam voluptatum pariatur,
                        dolorum reiciendis repudiandae iusto quae corrupti nihil nulla illum?
                        Officia quisquam, iste sint ut aut deleniti! Alias,
                        adipisci officia.</p>
                </div>
            </div>
            <div className={styles.coments}>
                <input type='text' placeholder='Write Your Comment' className={styles.inputc} />
                <button className={styles.button}>Comment</button>
            </div>
            <div className={styles.comments}>
                <Comments withImg={true} />
                <Comments withImg={true} />
                <Comments withImg={true} />
            </div>
        </div>
    )
}

export default page