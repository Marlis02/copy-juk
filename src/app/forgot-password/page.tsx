import styles from './forgotPass.module.scss'
import ConfirmEmail from '@/components/Modals/PasswordRecovery/СonfirmEmail'

const ForgotPass = () => {
  return (
    <div className={styles.con}>
      <ConfirmEmail />
    </div>
  )
}

export default ForgotPass
