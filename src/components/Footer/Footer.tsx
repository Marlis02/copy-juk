import Image from 'next/image'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.con}>
        <p className={styles.phone}>
          <Image src="/icons/phone.svg" alt="loc" width={20} height={20} />
          +996 675 566 567
        </p>
        <div className={styles.loc}>
          <Image
            src="/dark-icons/dark-loc.svg"
            alt="location"
            width={11}
            height={16}
          />
          <div className={styles.loc_text}>
            <p>г. Бишкек</p>
            <p>Ул. Истанова</p>
          </div>
        </div>
        <div className={styles.footer_logo}>
          <Image
            className={styles.logo1}
            src="/main-logo1.png"
            alt="logo"
            width={109}
            height={65}
          />
          <Image
            className={styles.logo2}
            width={109}
            height={65}
            alt="logo2"
            src="/main-logo2.svg"
          />
        </div>
        <div className={styles.sos}>
          <div className={styles.email}>
            <Image
              src="/dark-icons/mail.svg"
              alt="vector"
              width={20}
              height={20}
            />
            <p>Juk@gmail.com</p>
          </div>

          <div className={styles.sos_icons}>
            <a href="#">
              <Image
                src="/dark-icons/whatsapp.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/telegram.svg"
                alt="vector"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/instagram.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/facebook.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.privacy}>
        <p>Политика конфиденциальность</p>
        <p>Условия использования</p>
      </div>
      <p className={styles.copyright}>2024© Все права защищены </p>
    </footer>
  )
}

export default Footer
