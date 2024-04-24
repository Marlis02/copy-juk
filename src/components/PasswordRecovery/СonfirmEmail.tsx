'use client'
import React, { useState } from 'react'
import styles from './passRecov.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IConfirmEmail } from '@/types/auth.types'
import Modal from '../Modal'
import ConfirmCode from './СonfirmСode'
import { useRouter } from 'next/navigation'

const ConfirmEmail = () => {
  const router = useRouter()
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IConfirmEmail>()

  const onSubmit: SubmitHandler<IConfirmEmail> = (data) => {
    router.push('/forgot-password/confirm-code')
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCon}>
        <h3 className={styles.title}>Восстановить пароль</h3>
        <p className={styles.desc}>Мы отправим вам на почту письмо с кодом </p>
        <Controller
          name="confirmEmail"
          control={control}
          rules={{ required: 'Email is required' }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Введите Email </p>
              <input
                type="email"
                {...field}
                placeholder="Email"
                className={styles.inp}
              />
              {errors.confirmEmail && (
                <span className={styles.error}>
                  {errors.confirmEmail.message}
                </span>
              )}
            </div>
          )}
        />
        <button type="submit" className={styles.btn}>
          Продолжить
        </button>
      </form>
    </>
  )
}

export default ConfirmEmail
