import React from 'react'
import styles from './cardList.module.css'
import Pegination from '../pegination/Pegination'
import Image from 'next/image'
import Card from '../card/Card'


function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>my post:</h1>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Pegination />
    </div>
  )
}

export default CardList