import styles from './profile.module.scss'

const Profile = () => {
  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        <div className={styles.userInfo}>Профиль пользователя</div>
        <div className={styles.userCars}>Мой Автопарк</div>
      </div>
      <div className={styles.con2}>
        <div className={styles.userPhoto}>Фото</div>
        <div className={styles.userRating}>Рейтинг</div>
        <div className={styles.reviews}>Отзывы</div>
      </div>
    </div>
  )
}

export default Profile
