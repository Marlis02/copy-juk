'use client'

import { useState } from 'react'
import styles from './banner.module.scss'
import Image from 'next/image'

const Slider = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = [
    <div key={1} className={styles.pages} id={styles.page1}>
      <Image
        className={styles.banner}
        src="/images/banner1.png"
        alt="banner"
        width={1440}
        height={799}
      />
      <div className={styles.text1}>
        <Image
          className={styles.banner__dot}
          src="/images/banner-dot.svg"
          alt="banner"
          width={280}
          height={270}
        />
        <div className={styles.banner__text1}>
          <p>Juk.Kg</p>
          Грузовые Перевозки Juk.kg — это динамичная компания,
          специализирующаяся в области грузоперевозок. .
        </div>
      </div>
    </div>,
    <div key={2} className={styles.pages}>
      <Image
        className={styles.banner}
        src="/images/banner3.webp"
        alt="banner"
        width={1440}
        height={779}
      />
    </div>,
    <div key={3} className={styles.pages}>
      <Image
        className={styles.banner}
        src="/images/banner2.png"
        alt="banner"
        width={1440}
        height={779}
      />
    </div>,
  ]

  return (
    <div className={styles.con}>
      <div className={styles.pages_wrapper}>{pages[currentPage]}</div>
      <div className={styles.pagin_con}>
        {pages.map((page, index) => (
          <div
            key={page.key}
            onClick={() => setCurrentPage(index)}
            className={
              currentPage === index ? styles.activ_pagin : styles.pagin
            }
          />
        ))}
      </div>
      <div className={styles.img__con}>
        <Image
          className={styles.img}
          src="/images/img1.png"
          alt="banner"
          width={200}
          height={200}
        />
        <Image
          className={styles.img}
          src="/images/img2.png"
          alt="banner"
          width={350}
          height={180}
        />
        <Image
          className={styles.img}
          src="/images/img3.png"
          alt="banner"
          width={350}
          height={180}
        />
        <Image
          className={styles.img}
          src="/images/img4.png"
          alt="banner"
          width={200}
          height={200}
        />
      </div>
    </div>
  )
}

export default Slider
