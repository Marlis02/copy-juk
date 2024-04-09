import Image from 'next/image'
import styles from './homeNews.module.scss'
import Link from 'next/link'
const HomeNews = () => {
  return (
    <div className={styles.con}>
      <div className={styles.conImg}>
        <div className={styles.left}>
          <Image
            className={styles.leftImg}
            src="/images/img7.png"
            alt="img8"
            width={640}
            height={640}
          />
          <div className={styles.leftText}>
            <p>
              In a laoreet purus. Integer turpis quam, laoreet id orci nec,
              ultrices lacinia nunc.
            </p>
            <Link href="/news">Подробнее...</Link>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.rightCon}>
            <Image
              className={styles.rightImg}
              src="/images/img8.png"
              alt="img8"
              width={640}
              height={325}
            />
            <div className={styles.rightText}>
              <p>
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc.
              </p>
              <Link href="/news">Подробнее...</Link>
            </div>
          </div>
          <div className={styles.rightCon}>
            <Image
              className={styles.rightImg}
              src="/images/img9.png"
              alt="img8"
              width={640}
              height={325}
            />
            <div className={styles.rightText}>
              <p>
                In a laoreet purus. Integer turpis quam, laoreet id orci nec,
                ultrices lacinia nunc.
              </p>
              <Link href="/news">Подробнее...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNews
