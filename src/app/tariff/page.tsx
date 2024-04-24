import { tariffItems } from "@/data/tariffComponent.data"
import styles from "../../app/tariff/tariff.module.scss"
import { IoMdCheckmark } from "react-icons/io"

const TariffPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.general_block}>
      {tariffItems.map((element, index) => (
        <div key={index} className={index % 2 === 0 ? styles.block : styles.block_two}>
          <div className={index % 2 === 0 ? styles.box : styles.box_two}>
            <div className={styles.title}>
              <h4>{element.title}</h4>
            </div>
            <div className={styles.finance}>
              <div className={styles.financeDiv}>
                <h5>{element.label}</h5>
                <h1>{element.number}</h1>
              </div>
              <div className={styles.user}>
                <p>{element.text1}</p>
                <p>{element.text2}</p>
              </div>
            </div>
            <div className={styles.pText}>
              <p>{element.text3}</p>
            </div>
            <div className={index % 2 === 0 ? styles.arrows : styles.arrows_two}>
              <p><IoMdCheckmark className={index % 2 === 0 ? styles.icon : styles.icon2} /><p>{element.descriptions.arrow1}</p></p>
              <p><IoMdCheckmark className={index % 2 === 0 ? styles.icon : styles.icon2} /><p>{element.descriptions.arrow2}</p></p>
              <p><IoMdCheckmark className={index % 2 === 0 ? styles.icon : styles.icon2} /><p>{element.descriptions.arrow3}</p></p>
            </div>
            <p>{element.inscription}</p>
            <button className={index % 2 === 0 ? styles.blueButton : styles.whiteButton}>Купить</button>
          </div>
        </div>
      ))}
    </div>
    
  </div>
  )
}

export default TariffPage
