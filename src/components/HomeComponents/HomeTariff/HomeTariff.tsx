import Link from 'next/link'
import styles from './homeTariff.module.scss'
import { HomeTariffEnterprise } from '@/data/tariff.data'

const HomeTariff = () => {
  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        {HomeTariffEnterprise.map(
          (
            {
              id,
              title,
              price,
              currency,
              perUser,
              perMonth,
              text,
              features,
              billing,
            },
            index,
          ) => (
            <div className={styles.item} key={id}>
              <div className={index === 1 ? styles.itemText2 : styles.itemText}>
                <p className={styles.title}>{title}</p>
                <p className={styles.price}>
                  <span className={styles.priceItem1}>
                    <sup>{currency}</sup>{' '}
                    <span className={styles.price0}>{price}</span>
                  </span>
                  <span className={styles.priceItem2}>
                    <span>{perUser}</span>
                    <span>{perMonth}</span>
                  </span>
                </p>
                <p className={styles.offer}>{text}</p>
                <ul>
                  {features.map(({ item, id }) => (
                    <li key={id}>
                      <span className={styles.checkmark}>✔</span>
                      {item}
                    </li>
                  ))}
                  <li className={styles.lastLi}>{billing}</li>
                </ul>

                <Link href="/tariff">
                  <button type="button" className={styles.btn}>
                    Купить
                  </button>
                </Link>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  )
}

export default HomeTariff
