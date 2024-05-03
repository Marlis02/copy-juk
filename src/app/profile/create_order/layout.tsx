'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import styles from './orderLayout.module.scss'

const OrderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div className={styles.con}>
      <div className={styles.btnsCon}>
        <button
          type="button"
          className={
            pathname === '/profile/create_order/create_cargo'
              ? styles.btnActive
              : styles.btn
          }
          onClick={() => router.push('/profile/create_order/create_cargo')}
        >
          Грузы
        </button>

        <button
          type="button"
          className={
            pathname === '/profile/create_order/create_car'
              ? styles.btnActive
              : styles.btn
          }
          onClick={() => router.push('/profile/create_order/create_car')}
        >
          Машины
        </button>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}

export default OrderLayout
