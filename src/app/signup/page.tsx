import React from 'react'
import styles from './signup.module.scss'
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import Image from 'next/image'

const SignUpPage = () => {
  return (
    <div className={styles.containerSignup}>
      <div className={styles.parentBlockSignUp}>
        <div className={styles.blockSignup}>
          <h1>Регистрация</h1>
          <p className={styles.profile}>Укажите профиль деятельности</p>

          <div className={styles.buttonBlock}>
            <button type="button" className={styles.buttonOrder}>
              Заказчик
            </button>
            <button type="button" className={styles.buttonCargo}>
              Грузоперевозчик
            </button>
          </div>

          <div className={styles.containerPhone}>
            <p>Введите Телефон</p>
            <input type="text" placeholder="Телефон" />
          </div>
          <div className={styles.containerEmail}>
            <p>Введите Email</p>
            <input type="text" placeholder="Email" />
          </div>
          <div className={styles.containerPassword}>
            <p>Введите Пароль</p>
            <input type="text" placeholder="Пароль" />
          </div>
          <div className={styles.containerPasswordTry}>
            <p>Повторите Пароль</p>
            <input type="text" placeholder="Пароль" />
          </div>
          <div className={styles.containerBtnSignIn}>
            <button type="button">Вход</button>
          </div>

          <div className={styles.containerSignUp}>
            <div className={styles.childContainer}>
              <Link className={styles.textSignUp} href="#">
                Вы уже зарегистрированы?
              </Link>
              <Link className={styles.signInBtn} href="#">
                Войти
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        className={styles.image}
        width={390}
        height={580}
        src="/images/Cargo.png"
        alt="img"
      />
    </div>
  )
}

export default SignUpPage
