'use client'
import React, { useState } from 'react'
import styles from './signin.module.scss'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ISignInFields } from '@/types/auth.types'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Modal from '../Modal'

const SignInModal = ({ setAct }: any) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ISignInFields>()
  const [showPassword, setShowPassword] = useState(false)
  const [modalActive, setModalActive] = useState(false)
  const router = useRouter()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const onSubmit: SubmitHandler<ISignInFields> = (data) => {
    alert(data.email + ', pass :' + data.password)
    reset()
    router.push('/')
    setAct(false)
  }

  return (
    <>
      <form className={styles.formCon} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.formTitle}>Вход</h3>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
          }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.emailCon}>
              <p>Введите Email:</p>
              <input
                type="email"
                {...field}
                placeholder="Email"
                className={styles.inp}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email.message}</span>
              )}
            </div>
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: 'Password is required' }}
          render={({ field }) => (
            <div className={styles.passwordCon}>
              <p>Введите пароль:</p>
              <input
                type={showPassword ? 'text' : 'password'}
                {...field}
                placeholder="Пароль"
                className={styles.inp}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image
                    src="/icons/closeEye.svg"
                    alt="eye"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/icons/openEye.svg"
                    alt="eye"
                    width={20}
                    height={20}
                  />
                )}
              </button>
              <p
                onClick={() => {
                  router.push('/forgot-password')
                  setAct(false)
                }}
              >
                Забыли пароль?
              </p>
            </div>
          )}
        />

        <button type="submit" className={styles.signInBtn}>
          Вход
        </button>
        <p className={styles.register}>
          Вы еще не зарегистрированы?{' '}
          <Link href="/signup" onClick={() => setAct(false)}>
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </>
  )
}

export default SignInModal
