import Link from 'next/link'
import styles from './homeTariff.module.scss'
import { ITariffEnterprise } from './ITariff'

const TariffEnterprise: ITariffEnterprise[] = [
  {
    title: 'ENTERPRISE',
    price: 49,
    currency: '$',
    perUser: 'per user',
    perMonth: 'per month',
    text: 'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { item: '2 GB of hosting space' },
      { item: '14 days of free backups' },
      { item: 'Social integrations' },
    ],
    billing: 'Advanced client billing',
    link: '/tariff',
  },
  {
    title: 'ENTERPRISE',
    price: 49,
    currency: '$',
    perUser: 'per user',
    perMonth: 'per month',
    text: 'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { item: '2 GB of hosting space' },
      { item: '14 days of free backups' },
      { item: 'Social integrations' },
    ],
    billing: 'Advanced client billing',
    link: '/tariff',
  },
  {
    title: 'ENTERPRISE',
    price: 49,
    currency: '$',
    perUser: 'per user',
    perMonth: 'per month',
    text: 'All the features you need to keep your personal files safe, accessible, and easy to share.',
    features: [
      { item: '2 GB of hosting space' },
      { item: '14 days of free backups' },
      { item: 'Social integrations' },
    ],
    billing: 'Advanced client billing',
    link: '/tariff',
  },
]

const HomeTariff = () => {
  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        {TariffEnterprise.map(
          (
            {
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
            <div className={styles.item} key={index}>
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
                  {features.map(({ item }, index) => (
                    <li key={index}>
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
