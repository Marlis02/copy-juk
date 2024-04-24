import styles from '../forgotPass.module.scss'
import NewPassword from '@/components/PasswordRecovery/NewPassword'

const NewPass = () => {
  return (
    <div className={styles.con}>
      <NewPassword />
    </div>
  )
}

export default NewPass
