'use client'
import Image from 'next/image'
import styles from '../news/news.module.scss'
import { newsItems } from '@/data/news.data'

const News = () => {
  return (
    <div>
      {newsItems.map((items) => {
        return (
          <>
            <div className={styles.globalContainer}>
              <Image
                className={styles.image}
                width={625}
                height={375}
                src={items.image}
                alt="img"
              />
              <div className={styles.containerNews}>
                <h3 className={styles.title}>{items.title}</h3>
                <p className={styles.description}>{items.description}</p>
                <p className={styles.description2}>{items.description}</p>
                <p className={styles.description2}>{items.description}</p>
                <p className={styles.description3}>{items.description}</p>
                <span className={styles.btnSeeMore} onClick={() => {}}>
                  Подробнее...
                </span>
              </div>
            </div>
          </>
        )
      })}
      <div className={styles.buttonVector}>
        <div className={styles.buttonVectorDiv}>
          <button type="button">
            <Image
              className={styles.images}
              width={25}
              height={15}
              alt="logo"
              src="/icons/iconLeft.svg"
            />
          </button>
          <h5>1</h5>
          <h5>2</h5>
          <h5>3</h5>
          <h5>4</h5>
          <h5>5</h5>
          <button type="button">
            <Image
              className={styles.images}
              width={25}
              height={15}
              alt="logo"
              src="/icons/iconRight.svg"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
export default News
