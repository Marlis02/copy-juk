'use client'

import React, { useEffect, useState } from 'react'
import styles from './modal.module.scss'

const Modal = ({ active, setActive, children }: any) => {
  return (
    <div
      onClick={() => setActive(false)}
      className={active ? styles.modalActive : styles.modal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default Modal
