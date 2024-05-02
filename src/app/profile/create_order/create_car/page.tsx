'use client'
import { bodyTypes, timeSelect } from '@/data/cars.data'
import styles from './createCar.module.scss'
import { ICrateCarInputs } from '@/types/cars.types'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

const CreateCar = () => {
  const [isMounted, setIsMounted] = useState(false) // fix error version
  useEffect(() => setIsMounted(true), [])
  const { control, handleSubmit, register, reset } = useForm<ICrateCarInputs>()

  const a = new Date()
  console.log(a)

  const onSubmit: SubmitHandler<ICrateCarInputs> = (data) => {
    console.log(data)
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
          <div className={`${styles.blockItem} ${styles.bodyCon}`}>
            <div className={styles.inputsCon}>
              <label className={styles.label}>Тип кузова</label>
              {isMounted && (
                <Controller
                  name="body.bodyType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.bodySelect}
                      options={bodyTypes}
                      value={bodyTypes.find((c) => c.value === value)}
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
              <div className={styles.bodyChecks}>
                <input
                  type="checkbox"
                  {...register('body.semiTrailer')}
                  className={styles.roundCheck}
                />
                <label className={styles.label}>Полуприцеп</label>
              </div>
              <div className={styles.bodyChecks}>
                <input
                  type="checkbox"
                  {...register('body.truck')}
                  className={styles.roundCheck}
                />
                <label className={styles.label}>Грузовик</label>
              </div>
              <div className={styles.bodyChecks}>
                <input
                  type="checkbox"
                  {...register('body.coupling')}
                  className={styles.roundCheck}
                />
                <label className={styles.label}>Сцепка</label>
              </div>
            </div>
            <div className={`${styles.inputsCon} ${styles.uploadTypeCon}`}>
              <label className={styles.label}>Тип погрузки</label>
              <div className={styles.panel}>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.upper')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Верхняя</label>
                </div>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.lateral')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Боковая</label>
                </div>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.rear')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Задняя</label>
                </div>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.dogruz')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Догруз</label>
                </div>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.hydrolift')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Гидролифт</label>
                </div>
                <div className={styles.panelItem}>
                  <input
                    type="checkbox"
                    {...register('uploadingType.koniky')}
                    className={styles.squareCheck}
                  />
                  <label className={styles.label}>Коники</label>
                </div>
              </div>
            </div>
            <div className={styles.inputsCon}>
              <label className={styles.label}>Грузоподъемность, т</label>
              <input
                className={`${styles.inp} ${styles.inp2}`}
                type="text"
                {...register('loadCapacity')}
              />
            </div>
            <div className={styles.inputsCon}>
              <label className={styles.label}>Объем, м³</label>
              <input
                className={`${styles.inp} ${styles.inp2}`}
                type="text"
                {...register('volume')}
              />
            </div>
            <div className={styles.inputsCon}>
              <label className={styles.label}>
                Внутренние габариты кузова (Д/Ш/В), м
              </label>
              <input
                className={`${styles.inp} ${styles.inp2}`}
                type="text"
                {...register('dimensions.length')}
              />
              <input
                className={`${styles.inp} ${styles.inp2}`}
                type="text"
                {...register('dimensions.width')}
              />
              <input
                className={`${styles.inp} ${styles.inp2}`}
                type="text"
                {...register('dimensions.height')}
              />
            </div>
            <span className={styles.rules}>
              Введите длину, ширину и высоту внутреннего пространства кузова в
              метрах.
            </span>
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Маршрут
          </p>
          <div className={styles.blockItem}>
            <div className={styles.inputsCon}>
              <label className={styles.label}>Откуда (пункт)</label>
              <input
                className={`${styles.inp} ${styles.inp3}`}
                type="text"
                placeholder="Введите название нас. пункта"
                {...register('fromPoint')}
              />
            </div>
            <div className={styles.inputsCon}>
              <label className={styles.label}>Куда (пункт)</label>
              <input
                placeholder="Введите название нас. пункта"
                className={`${styles.inp} ${styles.inp3}`}
                type="text"
                {...register('toPoint')}
              />
            </div>
          </div>
        </div>
        <div className={styles.blocks}>
          <p>
            <span>*</span>Когда
          </p>
          <div className={styles.blockItem}>
            <div className={styles.inputsCon}>
              <input
                type="checkbox"
                {...register('when.readyToUpload')}
                className={styles.roundCheck}
              />
              <label className={styles.label}>
                 готова к загрузке (с сегодняшнего дня + 2 дня)
              </label>
            </div>
            <div className={styles.inputsCon}>
              <input
                type="checkbox"
                {...register('when.with')}
                className={styles.roundCheck}
              />
              <label className={styles.label}>С</label>
              {isMounted && (
                <Controller
                  name="when.withSelect"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.bodySelect}
                      placeholder="12 мая (вторник)"
                      options={timeSelect}
                      value={timeSelect.find((c) => c.value === value)}
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
            <div className={styles.inputsCon}>
              <input
                type="checkbox"
                {...register('when.allTheTime')}
                className={styles.roundCheck}
              />
              <label className={styles.label}>Постоянно</label>
              {isMounted && (
                <Controller
                  name="when.allTheTimeSelect"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <ReactSelect
                      className={styles.bodySelect}
                      options={timeSelect}
                      value={timeSelect.find((c) => c.value === value)}
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
              <label className={styles.label}>
                (с сегодняшнего дня + 2 месяца)
              </label>
            </div>
            <span className={styles.rules}>
              В течение этого времени заявка будет находится в системе, после
              чего будет автоматически удалена. Если заявка потеряет свою
              актуальность раньше, не забудьте ее удалить из системы.
            </span>
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Стоимость</p>
          <div className={styles.inputsCon}>
            <input
              type="text"
              className={styles.inp}
              placeholder="8789-97"
              {...register('price')}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Примечание</p>
          <div className={styles.inputsCon}>
            <input
              type="text"
              className={`${styles.inp} ${styles.noteInp}`}
              placeholder="1000"
              {...register('note')}
            />
          </div>
        </div>
        <div className={styles.blocks2}>
          <p>Контакты</p>
          <div className={styles.blockItem}>
            <label className={styles.rules}>
              Укажите, к кому обратится по объявлению
            </label>
            <div className={styles.inputsCon}>
              <input
                type="text"
                className={styles.inp}
                placeholder="Имя"
                {...register('contacts.name')}
              />
              <input
                type="text"
                className={styles.inp}
                placeholder="Телефон"
                {...register('contacts.phone')}
              />
            </div>
          </div>
        </div>
        <button className={styles.btn} type="submit">
          Опубликовать Машину
        </button>
      </form>
    </>
  )
}

export default CreateCar
