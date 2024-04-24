import { INewPassword } from '@/types/auth.types'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './passRecov.module.scss'

const NewPassword = () => {
  const { handleSubmit, control } = useForm<INewPassword>()

  const onSubmit: SubmitHandler<INewPassword> = (data) => {
    alert(data.confirmNewPassword + ' ' + data.newPassword)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCon}>
        <h3 className={styles.title}>Введите новый пароль</h3>
        <Controller
          name="newPassword"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Введите пароль </p>
              <input
                type="password"
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
            </div>
          )}
        />
        <Controller
          name="confirmNewPassword"
          control={control}
          rules={{ required: true }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Повторите пароль </p>
              <input
                type="password"
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
            </div>
          )}
        />
        <button className={styles.btn}>Сохранить</button>
      </form>
    </>
  )
}

export default NewPassword
