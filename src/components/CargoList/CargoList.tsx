'use client'

import { useState } from 'react'
import styles from './cargoList.module.scss'
import { CargoProps } from '@/types/cargo.types'
import { cargoData } from '@/data/cargo.data'

const CargoList = ({
  isCargo,
  isCar,
  orderHistory,
  home,
  paymentHistory,
}: CargoProps) => {
  const [filterList, setFilterList] = useState<string>('')

  return (
    <div className={styles.con}>
      {isCargo || isCar ? (
        <div className={styles.listInfo}>
          {isCargo && <h3>Найдено {cargoData.length} грузов</h3>}
          {isCar && <h3>Найдено {cargoData.length} машин</h3>}
          {isCar || isCargo ? (
            <div className={styles.filterList}>
              <span>УПОРЯДОЧИТЬ</span>
              <select
                value={filterList}
                onChange={(e) => setFilterList(e.target.value)}
              >
                <option value=""> ПО ОБНОВЛЕНИЮ</option>
                <option value="upload_date">ДАТЕ ЗАГРУЗКИ</option>
                <option value="cargo_type">ТИПУ ГРУЗА</option>
                <option value="addition_time">ВРЕМЕНИ</option>
              </select>
            </div>
          ) : null}
        </div>
      ) : null}

      {home && (
        <div className={styles.listConScroll}>
          <div className={styles.listCon}>
            <div className={styles.listTitle}>
              <p className={styles.listTitleItem}>Направление</p>
              <p className={styles.listTitleItem}>Маршрут</p>
              <p className={styles.listTitleItem}>Дата</p>
              <p className={styles.listTitleItem}>Груз</p>
              <p className={styles.listTitleItem}>Стоимость</p>
            </div>
            {cargoData.map((cargo) => (
              <div className={styles.listValue} key={cargo.id}>
                <p className={styles.item}>{cargo.direction}</p>
                <p className={styles.item}>{cargo.route}</p>
                <p className={styles.item}>{cargo.date}</p>
                <p className={styles.item}>{cargo.cargo}</p>
                <p className={styles.item}>{cargo.cost}</p>
                <div className={styles.item2__con}>
                  <p className={styles.item2}>{cargo.route}</p>
                  <p className={styles.item2}>{cargo.direction}</p>
                  <p className={styles.item2}>{cargo.cargo}</p>
                </div>
                <div className={styles.item3__con}>
                  <p className={styles.item2}>{cargo.date}</p>
                  <p className={styles.item2}>{cargo.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {orderHistory && (
        <div className={styles.listConScroll}>
          <div className={styles.listCon}>
            <div className={`${styles.listTitle} ${styles.listTitle2}`}>
              <p className={styles.listTitleItem}>Маршрут</p>
              <p className={styles.listTitleItem}>Дата</p>
              <p className={styles.listTitleItem}>Груз</p>
              <p className={styles.listTitleItem}>Стоимость</p>
            </div>
            {cargoData.map((cargo) => (
              <div className={styles.listValue2} key={cargo.id}>
                <div className={styles.web}>
                  <p className={styles.elem}>{cargo.route}</p>
                  <p className={styles.elem}>{cargo.date}</p>
                  <p className={styles.elem}>{cargo.cargo}</p>
                  <p className={styles.elem}>{cargo.cost}</p>
                </div>
                <div className={styles.tablet}>
                  <div className={styles.tablet__item}>
                    <p className={styles.elem}>{cargo.date}</p>
                    <p
                      className={
                        cargo.status === 'Выполнен'
                          ? styles.activeElem
                          : styles.elem
                      }
                    >
                      {cargo.status}
                    </p>
                  </div>
                  <div className={styles.tablet__item}>
                    <p className={styles.elem}>{cargo.route}</p>
                    <p className={styles.elem}>{cargo.cargo}</p>
                  </div>
                  <p className={styles.elem}>{cargo.cost}</p>
                </div>
                <div className={styles.mobile}>
                  <div className={styles.mobile__item}>
                    <p className={styles.elem}>{cargo.route}</p>
                    <p
                      className={
                        cargo.status === 'Выполнен'
                          ? styles.activeElem
                          : styles.elem
                      }
                    >
                      {cargo.status}
                    </p>
                    <p className={styles.elem}>{cargo.cargo}</p>
                  </div>
                  <div className={styles.mobile__item}>
                    <p className={styles.elem}>{cargo.date}</p>
                    <p className={styles.elem}>{cargo.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {paymentHistory && (
        <div className={styles.listConScroll}>
          <div className={styles.listCon}>
            <div className={`${styles.listTitle} ${styles.listTitle2}`}>
              <p className={styles.listTitleItem}>Дата</p>
              <p className={styles.listTitleItem}>Стоимость</p>
              <p className={styles.listTitleItem}>Тип</p>
              <p className={styles.listTitleItem}>Активно</p>
            </div>
            {cargoData.map((cargo) => (
              <div className={styles.listValue2} key={cargo.id}>
                <div className={styles.web}>
                  <p className={styles.elem}>{cargo.date}</p>
                  <p className={styles.elem}>{cargo.cost}</p>
                  <p className={styles.elem}>{cargo.route}</p>
                  <p className={styles.elem}>{cargo.active}</p>
                </div>
                <div className={styles.tablet}>
                  <div className={styles.tablet__item}>
                    <p className={styles.elem}>{cargo.date}</p>
                    <p
                      className={
                        cargo.active === 'Активно'
                          ? styles.activeElem
                          : styles.elem
                      }
                    >
                      {cargo.active}
                    </p>
                  </div>
                  <div className={styles.tablet__item}>
                    <p className={styles.elem}>{cargo.route}</p>
                    <p className={styles.elem}>{cargo.cargo}</p>
                  </div>
                  <p className={styles.elem}>{cargo.cost}</p>
                </div>
                <div className={styles.mobile}>
                  <div className={styles.mobile__item}>
                    <p
                      className={
                        cargo.active === 'Активно'
                          ? styles.activeElem
                          : styles.elem
                      }
                    >
                      {cargo.active}
                    </p>
                    <p className={styles.elem}>{cargo.cargo}</p>
                  </div>
                  <div className={styles.mobile__item}>
                    <p className={styles.elem}>{cargo.date}</p>
                    <p className={styles.elem}>{cargo.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CargoList
