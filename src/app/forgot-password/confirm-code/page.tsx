import ConfirmCode from '@/components/Modals/PasswordRecovery/СonfirmСode'
import React from 'react'
import styles from '../forgotPass.module.scss'
const EnterCode = () => {
  return (
    <div className={styles.con}>
      <ConfirmCode />
    </div>
  )
}

export default EnterCode
