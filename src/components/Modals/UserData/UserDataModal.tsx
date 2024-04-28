'use client'
import { carsCountries } from '@/data/cars.data'
import styles from './userDataModal.module.scss'
import { IUserData } from '@/types/profile.types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'
import { DiVim } from 'react-icons/di'
import { userPositions } from '@/data/profile.data'

interface Props {
  setAct: (active: boolean) => void
  setData: (active: any) => any
}
const UserData = ({ setAct, setData }: Props) => {
  const [isMounted, setIsMounted] = useState(false) // fix error version
  const { handleSubmit, control, setValue, reset } = useForm<IUserData>()
  const [userImg, setUserImg] = useState<string | null>(null)
  useEffect(() => setIsMounted(true), [])

  const onSubmit: SubmitHandler<IUserData> = (data) => {
    console.log(data)
    setData(data)
    setAct(false)
  }
  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile: any = e.target.files[0]
      setUserImg(URL.createObjectURL(selectedFile))
      setValue('photo', URL.createObjectURL(selectedFile))
    }
  }

  return (
    <>
      <form className={styles.formCon} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.photoCon}>
          {!userImg ? (
            <>
              <p>Выберите фото</p>
              <label htmlFor="upload-photo" className={styles.uploadButton}>
                <Image
                  src="/icons/photoPreview.svg"
                  width={42}
                  height={38}
                  alt="Upload"
                  className={styles.previewPhoto}
                />
                <input
                  type="file"
                  id="upload-photo"
                  onChange={uploadPhoto}
                  accept="image/*"
                />
              </label>
            </>
          ) : (
            <>
              <p>Выберите фото</p>
              <label htmlFor="upload-photo" className={styles.uploadButton}>
                <Image
                  src={userImg}
                  width={50}
                  height={50}
                  alt="Upload"
                  className={styles.uploadedPhoto}
                />
                <input
                  type="file"
                  id="upload-photo"
                  onChange={uploadPhoto}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
              </label>
            </>
          )}
        </div>
        <Controller
          name="name"
          control={control}
          rules={{ required: false }}
          defaultValue=""
          render={({ field }) => (
            <div className={styles.inpCon}>
              <p>Введите Имя</p>
              <input
                type="text"
                {...field}
                placeholder="Имя"
                className={styles.inp}
                autoComplete="username"
              />
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => (
            <div className={styles.inpCon}>
              <p>Введите Email</p>
              <input
                type="text"
                {...field}
                placeholder="Email"
                className={styles.inp}
                autoComplete="current-password"
              />
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => (
            <div className={styles.inpCon}>
              <p>Введите Email</p>
              <input
                type="text"
                {...field}
                placeholder="Телефон"
                className={styles.inp}
                autoComplete="current-password"
              />
            </div>
          )}
        />
        {isMounted && (
          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, value } }) => (
              <div className={styles.inpCon}>
                <p>Введите Должность</p>
                <ReactSelect
                  classNamePrefix={styles.inpSelcet}
                  className={styles.inpSelcet}
                  id={styles.inpSelect}
                  placeholder="Должность"
                  options={userPositions}
                  value={userPositions.find((c) => c.value === value)}
                  onChange={(val) => onChange(val ? val.value : '')}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      borderRadius: '8px',
                      height: '44px',
                    }),
                  }}
                />
              </div>
            )}
            rules={{ required: true }}
          />
        )}
        <Controller
          name="city"
          control={control}
          defaultValue=""
          rules={{ required: false }}
          render={({ field }) => (
            <div className={styles.inpCon}>
              <p>Введите Email</p>
              <input
                type="text"
                {...field}
                placeholder="Город"
                className={styles.inp}
                autoComplete="current-password"
              />
            </div>
          )}
        />
        <button type="submit" className={styles.userBtn}>
          Вход
        </button>
      </form>
    </>
  )
}

export default UserData
