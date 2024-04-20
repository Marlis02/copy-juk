'use client'
import Image from 'next/image'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems } from '@/data/navigation.links'
import SignInModal from '../Modals/SignIn/SignInModal'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [loginModal, setLoginModal] = useState<boolean>(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_con}>
        <div className={styles.nav_logo}>
          {pathname === '/' ? (
            <>
              <Image
                className={styles.logo1}
                width={109}
                height={65}
                alt="logo1"
                src="/main-logo1.png"
              />
              <Image
                className={styles.logo2}
                width={61}
                height={34}
                alt="logo2"
                src="/main-logo2.svg"
              />
            </>
          ) : (
            <Image
              className={styles.logo3}
              width={61}
              height={34}
              alt="logo2"
              src="/main-logo2.svg"
            />
          )}
        </div>
        <div className={styles.nav_links}>
          {navItems.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={active ? styles.activ_link : styles.link}
              >
                {link.title}
              </Link>
            )
          })}
        </div>
        <div className={styles.nav_btns}>
          <button
            type="button"
            onClick={() => setLoginModal(true)}
            className={styles.btn}
          >
            Вход
          </button>
          <SignInModal active={loginModal} setActive={setLoginModal} />
          <button type="button" className={styles.btn}>
            <Link href="/signup">Регистрация</Link>
          </button>
        </div>
      </div>
      <div className={styles.nav_mobile}>
        <Image
          className={styles.mobilelogo}
          width={109}
          height={65}
          alt="logo2"
          src="/main-logo2.svg"
        />
        <div className={styles.navMobileCon}>
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
                width={21}
                height={21}
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
          <a type="button" onClick={() => setLoginModal(true)}>
            <Image width={24} height={24} alt="logo2" src="/icons/logout.svg" />
          </a>
          <SignInModal active={loginModal} setActive={setLoginModal} />
          <Image
            onClick={togglePopup}
            width={24}
            height={24}
            alt="logo2"
            src="/icons/nav-modal.svg"
          />
          {isOpen && (
            <div className={styles.navModal}>
              <div className={styles.modalCon}>
                {navItems.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={
                        active ? styles.activModalLink : styles.modalLink
                      }
                      onClick={togglePopup}
                    >
                      {link.title}
                    </Link>
                  )
                })}
                <div className={styles.modalLoc}>
                  <Image
                    src="/dark-icons/dark-loc.svg"
                    alt="loc"
                    width={16}
                    height={16}
                  />
                  <div className={styles.loc_text}>
                    <p>г. Бишкек</p>
                    <p>Ул. Истанова</p>
                  </div>
                </div>
                <div className={styles.modalPhone}>
                  <Image
                    src="/icons/phone.svg"
                    alt="loc"
                    width={20}
                    height={20}
                  />
                  +996 675 566 567
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
                      width={21}
                      height={21}
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
                <span className={styles.modalClose} onClick={togglePopup}>
                  ×
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
