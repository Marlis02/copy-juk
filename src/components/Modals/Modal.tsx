'use client'

import styles from './modal.module.scss'

interface ModalProps {
  active: boolean
  setActive: (active: boolean) => void
  children: React.ReactNode
}
const Modal = ({ active, setActive, children }: ModalProps) => {
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
