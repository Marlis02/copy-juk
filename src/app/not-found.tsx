import styles from '@/styles/error.module.scss'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.p}>
        К сожалению, запрашиваемая страница не найдена. <br />
        Возможно, она была перемещена, удалена или временно недоступна.{' '}
      </p>
    </div>
  )
}

export default NotFound
