'use client'
import { useState } from 'react'
import styles from './profile.module.scss'
import Modal from '@/components/Modals/Modal'
import UserData from '@/components/Modals/UserData/UserDataModal'
import { IUserData } from '@/types/profile.types'
import Image from 'next/image'

const Profile = () => {
  const [userModal, setUserModal] = useState(false)
  const [userData, setUserData] = useState<IUserData | null>(null)
  console.log(userData, 'userData')

  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        <div className={styles.userInfo}>
          <div className={styles.userInfoCon}>
            <div
              className={styles.userInfoTitle}
              onClick={() => setUserModal(true)}
            >
              <p>Профиль пользователя</p>
              <Image src="/icons/pen.svg" alt="pen" width={18} height={19} />
            </div>
            <div className={styles.userInfoText}>
              <p>Имя </p>
              <p>{userData ? userData.name : '-'}</p>
            </div>
            <div className={styles.userInfoText}>
              <p>Профиль</p>
              <p>{userData ? userData.position : '-'}</p>
            </div>
            <div className={styles.userInfoText}>
              <p>Город</p>
              <p>{userData ? userData.city : '-'}</p>
            </div>
            <div className={styles.userInfoText}>
              <p>Email</p>
              <p>{userData ? userData.email : '-'}</p>
            </div>
            <div className={styles.userInfoText}>
              <p>Телефон</p>
              <p>{userData ? userData.phone : '-'}</p>
            </div>
          </div>
        </div>
        <Modal setActive={setUserModal} active={userModal}>
          <UserData setAct={setUserModal} setData={setUserData} />
        </Modal>
        <div className={styles.userCars}>Мой Автопарк</div>
      </div>
      <div className={styles.con2}>
        <div className={styles.userPhoto}>
          <Image
            src={
              userData && userData.photo
                ? userData.photo
                : '/icons/photoPreview.svg'
            }
            alt="gg"
            width={100}
            height={100}
            className={
              userData && userData.photo ? styles.userAva : styles.userAva2
            }
          />
        </div>

        <div className={styles.userRating}>Рейтинг</div>
        <div className={styles.reviews}>Отзывы</div>
      </div>
    </div>
  )
}

export default Profile
