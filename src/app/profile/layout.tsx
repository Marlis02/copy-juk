'use client'

import Link from 'next/link'
import styles from './layout.module.scss'
import Image from 'next/image'
import { profileItems } from '@/data/navigation.links'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  const pathname = usePathname()

  return (
    <div className={styles.con}>
      <div className={isSidebarOpen ? styles.navConOpen : styles.navConClose}>
        <div className={isSidebarOpen ? styles.vectorOpen : styles.vectorClose}>
          {isSidebarOpen ? (
            <Image
              src="/icons/IconLeft.svg"
              alt="logo"
              width={11}
              height={18}
              className={styles.vectorLeft}
              onClick={() => toggleSidebar()}
            />
          ) : (
            <Image
              src="/icons/IconRight.svg"
              alt="logo"
              width={11}
              height={18}
              className={styles.vectorRight}
              onClick={() => toggleSidebar()}
            />
          )}
        </div>
        <div className={styles.navItems}>
          {profileItems.map(({ href, title }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={active ? styles.activeLink : styles.link}
                onClick={() => toggleSidebar()}
              >
                {title}
              </Link>
            )
          })}
        </div>
        <div className={styles.navLogout}>
          <p>Выйти</p>
          <Image
            src="/icons/dark-logout.svg"
            alt="logo"
            width={12}
            height={13}
          />
        </div>
      </div>
      <div className={styles.modileSidebar}>
        <Image
          src="/icons/profile-menu.svg"
          alt="logo"
          width={19}
          height={14}
          onClick={() => toggleSidebar()}
        />
        {!isSidebarOpen && (
          <div className={styles.profileNavModal}>
            {profileItems.map(({ href, title }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={active ? styles.activeLink : styles.link}
                  onClick={() => toggleSidebar()}
                >
                  {title}
                </Link>
              )
            })}
            <div className={styles.modalLogout}>
              <p>Выйти</p>
              <Image
                src="/icons/dark-logout.svg"
                alt="logo"
                width={12}
                height={13}
              />
            </div>
          </div>
        )}
      </div>
      <section
        className={isSidebarOpen ? styles.sectionOpen : styles.sectionClose}
      >
        {children}
      </section>
    </div>
  )
}

export default ProfileLayout
