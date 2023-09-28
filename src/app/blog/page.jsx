import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import Menubar from '@/components/mnueBar/MenyBar'
import React from 'react'
import styles from './blog.module.css'

function BlogPage() {
  return (
    <div className={styles.continer}>
    <div className={styles.titlePage}>
      <h1 className={styles.pageTitle}>Blog</h1>
    </div>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
      <Menubar />
    </div>
  )
}

export default BlogPage