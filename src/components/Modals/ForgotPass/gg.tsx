import React from 'react'
import './gg.css'

const Modal = ({ active, setActive }: any) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? 'modal_content active' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="conteiner">
          <div className="form">
            <h1>Регистрация</h1>
            <form>
              <input
                type="text"
                required
                placeholder="Имя"
                id="name1"
                className="input"
              />
              <input
                type="text"
                required
                placeholder="Фамилия"
                id="name2"
                className="input"
              />
              <input
                type="text"
                required
                placeholder="Отчество"
                id="name3"
                className="input"
              />
              <input
                type="email"
                required
                placeholder="Емейл"
                id="email"
                className="input"
              />
              <input
                type="password"
                required
                placeholder="Пароль"
                id="pass1"
                className="input"
              />
              <input
                type="password"
                required
                placeholder="Подтвердите пароль"
                id="pass2"
                className="input"
              />
              <input
                type="number"
                required
                placeholder="Номер телефона"
                id="tel"
                className="input"
              />
              <button id="btn">Регистрация</button>
              Нажимая "Регистрация", вы подтверждаете, что прочитали и согласны
              с нашими Условиями Пользования и Политикой Конфиденциальности
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
