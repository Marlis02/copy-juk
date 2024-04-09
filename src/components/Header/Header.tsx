import Image from 'next/image'
import styles from './header.module.scss'
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.con}>
        <div className={styles.loc}>
          <Image src="/icons/loc.svg" alt="loc" width={11} height={16} />
          <div className={styles.loc_text}>
            <p>г. Бишкек</p>
            <p>Ул. Истанова</p>
          </div>
        </div>
        <div className={styles.sos}>
          <div className={styles.email}>
            <Image src="/icons/mail.svg" alt="vector" width={20} height={20} />
            <p>Juk@gmail.com</p>
          </div>
          <div className={styles.sos_icons}>
            <a href="#">
              <Image
                src="/icons/whatsapp.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              {' '}
              <Image
                src="/icons/telegram.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/instagram.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/icons/facebook.svg"
                alt="vector"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
