import Banner from '@/components/HomeComponents/Banner/Banner'
import styles from './page.module.scss'

import CargoList from '@/components/CargoList/CargoList'
import HomeNews from '@/components/HomeComponents/HomeNews/HomeNews'
import HomeCard from '@/components/HomeComponents/HomeCard/HomeCard'
import HomeTariff from '@/components/HomeComponents/HomeTariff/HomeTariff'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <h3 className={styles.title}>
        Актуальные предложения по грузам для перевозки
      </h3>
      <div className={styles.list_btns}>
        <button type="button">Грузы</button>
        <button type="button">Транспорт</button>
      </div>
      <CargoList isCar={false} isCargo={false} />
      <HomeCard />
      <h3 className={styles.title}>Новости</h3>
      <HomeNews />
      <h3 className={styles.title}>Тариф</h3>
      <HomeTariff />
    </main>
  )
}
