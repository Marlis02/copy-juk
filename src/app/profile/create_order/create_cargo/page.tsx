'use client'

import { ICreateCargoInputs } from '@/types/cargo.types'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import styles from './createCargo.module.scss'
import ReactSelect from 'react-select'
import { cargoWeightTypes } from '@/data/cargo.data'
import CreateCargoInputs from '@/components/Inputs/cargoInputs/CargoInputs'

const CreateCargo = () => {
  const [isMounted, setIsMounted] = useState(false) // fix error version
  useEffect(() => setIsMounted(true), [])
  const { control, handleSubmit, register, setValue, reset } =
    useForm<ICreateCargoInputs>()
  const onSubmit: SubmitHandler<ICreateCargoInputs> = (data) => {
    console.log(data)
  }

  const uploadPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile: any = e.target.files[0]
      setValue('addPhoto', selectedFile)
    }
  }
  return (
    <>
      <div className={styles.title}>
        <p>Добавить груз</p>
        <button className={styles.clearBtn} onClick={() => reset()}>
          ОЧИСТИТЬ ФОРМУ
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formCon}>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Груз
          </p>
          <div className={`${styles.inputsCon} ${styles.cargoCon}`}>
            <div className={styles.infoCon}>
              <input
                type="text"
                {...register('cargoName')}
                placeholder="Выберите или введите свое"
                className={`${styles.cargoInp} ${styles.inp}`}
              />
              <input
                type="text"
                {...register('cargoSize.cargoWeight')}
                placeholder="Вес"
                className={`${styles.cargoInp} ${styles.inp}`}
                autoComplete="username"
              />
              {isMounted && (
                <Controller
                  name="cargoSize.weightType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.selectInp}
                      placeholder="Т"
                      options={cargoWeightTypes}
                      value={cargoWeightTypes.find((c) => c.value === value)}
                      onChange={(val) => onChange(val ? val.value : '')}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          borderRadius: '8px',
                          height: '39.6px',
                        }),
                      }}
                    />
                  )}
                />
              )}
              <input
                type="text"
                {...register('cargoSize.cargoVolume')}
                placeholder="Объём  м³"
                className={`${styles.cargoInp} ${styles.inp}`}
              />
            </div>
            <div className={styles.infoCon}>
              <input
                type="text"
                {...register('transportName')}
                placeholder="Выберите тип транспорта"
                className={`${styles.cargoInp} ${styles.inp}`}
              />
              <input
                type="text"
                {...register('transportSize.transportWeight')}
                placeholder="Вес"
                className={`${styles.cargoInp} ${styles.inp}`}
              />
              {isMounted && (
                <Controller
                  name="transportSize.transportWeightType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.selectInp}
                      placeholder="Т"
                      options={cargoWeightTypes}
                      value={cargoWeightTypes.find((c) => c.value === value)}
                      onChange={(val) => onChange(val ? val.value : '')}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          borderRadius: '8px',
                          height: '39.6px',
                        }),
                      }}
                    />
                  )}
                />
              )}
              <input
                type="text"
                {...register('transportSize.transportVolume')}
                className={`${styles.cargoInp} ${styles.inp}`}
                placeholder="Объём  м³"
              />
            </div>
            <div className={styles.dimensionsCon}>
              <div className={styles.dimensionsBlock}>
                <p>Габариты ДхШхВ</p>
                <div className={styles.dimensionsInputs}>
                  <input
                    type="text"
                    {...register('cargoDimensions.length')}
                    className={`${styles.dimensionsInp} ${styles.inp}`}
                  />
                  <input
                    type="text"
                    {...register('cargoDimensions.width')}
                    className={`${styles.dimensionsInp} ${styles.inp}`}
                  />
                </div>
              </div>
              <div className={styles.dimensionsBlock}>
                <p>Диаметр</p>
                <div className={styles.dimensionsInputs}>
                  <input
                    type="text"
                    {...register('cargoDimensions.height')}
                    className={`${styles.dimensionsInp} ${styles.inp}`}
                  />
                  <input
                    type="text"
                    {...register('cargoDimensions.diameter')}
                    className={`${styles.dimensionsInp} ${styles.inp}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Прицеп
          </p>
          <div className={`${styles.inputsCon} ${styles.trailerCon}`}>
            {isMounted && (
              <Controller
                name="containerCarrier"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactSelect
                    className={styles.trailerSelect}
                    placeholder="Контейнеровоз"
                    options={cargoWeightTypes}
                    value={cargoWeightTypes.find((c) => c.value === value)}
                    onChange={(val) => onChange(val ? val.value : '')}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        borderRadius: '8px',
                        height: '32px',
                      }),
                    }}
                  />
                )}
              />
            )}
            {isMounted && (
              <Controller
                name="smallTonnageContainers"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactSelect
                    className={styles.trailerSelect}
                    placeholder="Малотоннажные контейнеры"
                    options={cargoWeightTypes}
                    value={cargoWeightTypes.find((c) => c.value === value)}
                    onChange={(val) => onChange(val ? val.value : '')}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        borderRadius: '8px',
                        height: '32px',
                      }),
                    }}
                  />
                )}
              />
            )}
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Когда
          </p>
          <div className={`${styles.inputsCon} ${styles.dateCon}`}>
            {isMounted && (
              <Controller
                name="readyToLoad"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactSelect
                    className={styles.dateSelect}
                    placeholder="Готов к загрузке"
                    options={cargoWeightTypes}
                    value={cargoWeightTypes.find((c) => c.value === value)}
                    onChange={(val) => onChange(val ? val.value : '')}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        borderRadius: '8px',
                        height: '32px',
                      }),
                    }}
                  />
                )}
              />
            )}
            {isMounted && (
              <Controller
                name="workingDays"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <ReactSelect
                    className={styles.dateSelect}
                    placeholder="По рабочим дням"
                    options={cargoWeightTypes}
                    value={cargoWeightTypes.find((c) => c.value === value)}
                    onChange={(val) => onChange(val ? val.value : '')}
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        borderRadius: '8px',
                        height: '32px',
                      }),
                    }}
                  />
                )}
              />
            )}
            <input
              type="date"
              {...register('workingDate')}
              className={`${styles.dateInp} ${styles.inp}`}
            />
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Загрузка
          </p>
          <div className={`${styles.inputsCon} ${styles.uploadCon}`}>
            <div className={styles.uploadBlock}>
              <input
                type="text"
                placeholder="Населенный пункт"
                {...register('uploading.locality')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
              <input
                type="text"
                placeholder="Адрес в населенном пункте"
                {...register('uploading.addressLocality')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
            </div>
            <div className={styles.uploadBlock}>
              <p>Время загрузки</p>
              <input
                type="text"
                placeholder="00:00"
                {...register('uploading.uploadingTime')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
            </div>
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Разгрузка
          </p>
          <div className={`${styles.inputsCon} ${styles.uploadCon}`}>
            <div className={styles.uploadBlock}>
              <input
                type="text"
                placeholder="Населенный пункт"
                {...register('uploading.locality')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
              <input
                type="text"
                placeholder="Адрес в населенном пункте"
                {...register('uploading.addressLocality')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
            </div>
            <div className={styles.uploadBlock}>
              <p>Время загрузки</p>
              <input
                type="text"
                placeholder="00:00"
                {...register('uploading.uploadingTime')}
                className={`${styles.uploadInp} ${styles.inp}`}
              />
              <p>
                <span>Убедитесь, что адрес заполнен.</span> Так водитель будет
                знать, куда ехать
              </p>
            </div>
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Загрузка</p>
          <div className={`${styles.inputsCon} ${styles.loadCon}`}>
            <input
              type="text"
              placeholder="Верхняя"
              {...register('upper')}
              className={`${styles.loadInp} ${styles.inp}`}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Разгрузка</p>
          <div className={`${styles.inputsCon} ${styles.loadCon}`}>
            <input
              type="text"
              placeholder="Задняя"
              {...register('rear')}
              className={`${styles.loadInp} ${styles.inp}`}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Добавить</p>
          <div className={`${styles.inputsCon} ${styles.payCon}`}>
            <div className={styles.payBlock}>
              <input
                type="checkbox"
                placeholder="Задняя"
                {...register('addPayment.prepaymentFuel')}
                className={styles.payCheck}
              />
              <p>Предоплата топливом</p>
            </div>
            <div className={styles.payBlock}>
              <input
                type="checkbox"
                placeholder="Задняя"
                {...register('addPayment.paymentOnUnloading')}
                className={styles.payCheck}
              />
              <p>Оплата на выгрузке (скрывает оплату через)</p>
            </div>
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Контакты</p>
          <div className={`${styles.inputsCon} ${styles.contactCon}`}>
            <p>Укажите, к кому обратится по объявлению</p>
            <div className={styles.contactBlock}>
              <input
                type="text"
                {...register('contacts.name')}
                placeholder="Имя"
                className={styles.inp}
              />
              <input
                type="text"
                {...register('contacts.phone')}
                placeholder="Телефон"
                className={styles.inp}
              />
            </div>
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Стоимость</p>
          <div className={`${styles.inputsCon} ${styles.contactCon}`}>
            <input
              type="text"
              placeholder="8789-97"
              {...register('price')}
              className={styles.inp}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Примечание</p>
          <div className={`${styles.inputsCon} ${styles.contactCon}`}>
            <input
              type="text"
              placeholder="1000"
              {...register('note')}
              className={`${styles.inp} ${styles.noteInp}`}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Добавить</p>
          <div className={`${styles.inputsCon} ${styles.photoCon}`}>
            <label htmlFor="upload-photo" className={styles.uploadPhoto}>
              <span>+</span> Фото
              <input
                type="file"
                id="upload-photo"
                accept="image/*"
                onChange={uploadPhoto}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>

        <button className={styles.btn} type="submit">
          Опубликовать Груз
        </button>
      </form>
    </>
  )
}

export default CreateCargo
