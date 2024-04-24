import React from 'react'
import styles from '../forgotPass.module.scss'
import NewPassword from '@/components/Modals/PasswordRecovery/NewPassword'

const NewPass = () => {
  return (
    <div className={styles.con}>
      <NewPassword />
    </div>
  )
}

export default NewPass
