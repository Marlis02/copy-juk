'use client'
import { useState } from 'react'
import styles from './profile.module.scss'
import Modal from '@/components/Modals/Modal'
import UserData from '@/components/Modals/UserData/UserDataModal'
import { IUserData } from '@/types/profile.types'
import Image from 'next/image'
import { reviews } from '@/data/profile.data'

const Profile = () => {
  const [userModal, setUserModal] = useState(false)
  const [reviewsOpen, setReviewsOpen] = useState(false)
  const [userData, setUserData] = useState<IUserData | null>(null)

  return (
    <div className={styles.con}>
      <div className={styles.con1}>
        <div className={styles.userInfo}>
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
        <Modal setActive={setUserModal} active={userModal}>
          <UserData setAct={setUserModal} setData={setUserData} />
        </Modal>
        <div className={styles.userInfo}>
          <div className={styles.userInfoTitle}>
            <p>Мой Автопарк</p>
            <p>+</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№2</p>
            <p>Mercedes</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№3</p>
            <p>Mercedes</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№4</p>
            <p>Mercedes</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№5</p>
            <p>Mercedes</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№6</p>
            <p>Mercedes</p>
          </div>
          <div className={styles.userInfoText}>
            <p>№7</p>
            <p>Mercedes</p>
          </div>
        </div>
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

        <div className={styles.userRating}>
          <p>Рейтинг</p>
          <p>★☆☆☆☆</p>
        </div>
        <div className={styles.reviews}>
          <div
            className={styles.reviewsTitle}
            onClick={() => setReviewsOpen(!reviewsOpen)}
          >
            <p>Отзывы</p>
            {reviewsOpen ? (
              <Image
                src="/icons/upVector.svg"
                alt="pen"
                width={18}
                height={11}
              />
            ) : (
              <Image
                src="/icons/downVector.svg"
                alt="pen"
                width={18}
                height={11}
              />
            )}
          </div>
          <div
            className={reviewsOpen ? styles.reviewsOpen : styles.reviewsClose}
          >
            {reviews.map((review) => (
              <div className={styles.review} key={review.id}>
                <p>{review.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
