import Image from 'next/image'
import styles from './contacts.module.scss'

const ContactsPage = () => {
  return (
    <div className={styles.con}>
      <div className={styles.contacts_info}>
        <div className={styles.contacts_text}>
          <h3>In a laoreet purus.</h3>
          <p>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. In a laoreet purus. Integer turpis quam,
            laoreet id orci nec, ultrices lacinia nunc. In a laoreet purus.
            Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. In
            a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices
            lacinia nunc.
          </p>
          <p>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. In a laoreet purus. Integer turpis quam,
            laoreet id orci nec, ultrices lacinia nunc. In a laoreet purus.
            Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. In
            a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices
            lacinia nunc.
          </p>
          <p>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices lacinia nunc. In a laoreet purus. Integer turpis quam,
            laoreet id orci nec, ultrices lacinia nunc. In a laoreet purus.
            Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. In
            a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices
            lacinia nunc.
          </p>
        </div>
        <div className={styles.contacts_links}>
          <p>
            <Image
              src="/dark-icons/mail.svg"
              alt="mail"
              width={20}
              height={16}
            />
            Juk@gmail.com
          </p>
          <p>
            <Image
              src="/dark-icons/dark-loc.svg"
              alt="mail"
              width={14}
              height={20}
            />
            г. Бишкек <span>Ул. Истанова</span>
          </p>
          <p>
            <Image src="/icons/phone.svg" alt="mail" width={18} height={18} />
            +675 493 43 32
          </p>
          <div className={styles.sos_icons}>
            <a href="#">
              <Image
                src="/dark-icons/whatsapp.svg"
                alt="vector"
                width={24}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/telegram.svg"
                alt="vector"
                width={20}
                height={21}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/instagram.svg"
                alt="vector"
                width={24}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/dark-icons/facebook.svg"
                alt="vector"
                width={24}
                height={25}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsPage
