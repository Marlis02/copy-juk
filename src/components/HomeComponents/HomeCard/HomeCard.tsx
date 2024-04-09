import Image from 'next/image'
import styles from './homeCard.module.scss'
import Link from 'next/link'

const HomeCard = () => {
  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        <div className={styles.left}>
          <Image src="/images/img5.png" alt="img5" width={300} height={300} />
          <div className={styles.text}>
            <h4>BANG & OLUFSEN</h4>
            <h3>Beoplay H9i</h3>
            <p>
              Adjust the volume, change tracks and take calls with on-device
              touch controls.
            </p>
            <Link href="/cars">
              <button type="button" className={styles.left_btn}>
                Найти Транспорт
              </button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.text}>
            <h4>BANG & OLUFSEN</h4>
            <h3>Beoplay H9i</h3>
            <p>
              Adjust the volume, change tracks and take calls with on-device
              touch controls.
            </p>
            <Link href="/cargo">
              <button type="button" className={styles.right_btn}>
                Найти Грузы
              </button>
            </Link>
          </div>
          <Image src="/images/img6.png" alt="img5" width={300} height={300} />
        </div>
      </div>
      <div className={styles.con2}>
        <h3>Преимущество</h3>
        <div className={styles.pros}>
          <div className={styles.pros_item}>
            <p>Быстрый поиск</p>
            <p>Множество данных про грузы и транспорт </p>
          </div>
          <div className={styles.pros_item}>
            <p>Удобные цены</p>
            <p>Наши цены подойдут для каждого пользователя</p>
          </div>
          <div className={styles.pros_item}>
            <p>Актуальные</p>
            <p>Наша нашем сайте публикуются самые самые свежие новости</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCard
