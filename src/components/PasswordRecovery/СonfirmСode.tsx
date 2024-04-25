'use client'
import React, { useState, createRef, useEffect } from 'react'
import styles from './passRecov.module.scss'
import { useRouter } from 'next/navigation'

const ConfirmCode: React.FC = () => {
  let idCounter = 0

  const [code, setCode] = useState<string[]>(['', '', '', ''])
  const uniqueIds = code.map(() => idCounter++)
  const [seconds, setSeconds] = useState<number>(60)
  const router = useRouter()
  const inputRefs = Array.from({ length: 4 }, () =>
    createRef<HTMLInputElement>(),
  )

  const handleChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newCode = [...code]
      newCode[index] = event.target.value
      setCode(newCode)

      if (event.target.value.length === 1 && index < 3) {
        inputRefs[index + 1].current?.focus()
      }
    }

  const handleKeyDown =
    (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Backspace' && code[index] === '' && index > 0) {
        const newCode = [...code]
        newCode[index - 1] = ''
        setCode(newCode)
        inputRefs[index - 1].current?.focus()
      }
    }

  const handleSubmit = () => {
    const confirmCode = code.join('')

    if (confirmCode.length < 4) {
      alert('Заполните код')
    } else {
      console.log(confirmCode)
      router.push('/forgot-password/new-pass')
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(60)
    }
  }, [seconds])

  return (
    <div className={styles.formCon}>
      <div className={styles.formTitle}>
        <h3>Восстановить пароль</h3>
        <p>Введите код </p>
        <p>Проверьте вашу почту</p>
      </div>
      <div className={styles.formInp}>
        {' '}
        {code.map((item, index) => (
          <input
            className={styles.codeInp}
            key={uniqueIds[index]}
            type="text"
            value={code[index]}
            onChange={handleChange(index)}
            onKeyDown={handleKeyDown(index)}
            maxLength={1}
            ref={inputRefs[index]}
          />
        ))}
      </div>
      <p className={styles.timer}>
        Отправить заново <span>{seconds}s</span>
      </p>
      <button type="button" className={styles.btn} onClick={handleSubmit}>
        Продолжить
      </button>
    </div>
  )
}

export default ConfirmCode
