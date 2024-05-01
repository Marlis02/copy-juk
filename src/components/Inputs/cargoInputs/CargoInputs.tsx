import { Controller } from 'react-hook-form'
import styles from './cargoInputs.module.scss'
import ReactSelect from 'react-select'
import { cargoWeightTypes } from '@/data/cargo.data'

const CreateCargoInputs = ({ isMounted, control, register }: any) => {
  return (
    <div className={styles.cargoCon}>
      <div className={styles.inpCon}>
        <input
          type="text"
          {...register('cargoName')}
          placeholder="Имя"
          className={styles.inp}
        />
        <input
          type="text"
          {...register('cargoSize.cargoWeight')}
          placeholder="Имя"
          className={styles.inp}
          autoComplete="username"
        />
        {isMounted && (
          <Controller
            name="cargoSize.weightType"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ReactSelect
                classNamePrefix={styles.inpSelcet}
                className={styles.inpSelcet}
                id={styles.inpSelect}
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
          placeholder="Имя"
          className={styles.inp}
          autoComplete="username"
        />
      </div>
      <div className={styles.inpCon}>
        <input
          type="text"
          {...register('transportName')}
          placeholder="Имя"
          className={styles.inp}
        />
        <input
          type="text"
          {...register('transportSize.transportWeight')}
          placeholder="Имя"
          className={styles.inp}
        />
        {isMounted && (
          <Controller
            name="transportSize.transportWeightType"
            control={control}
            render={({ field: { onChange, value } }) => (
              <ReactSelect
                classNamePrefix={styles.inpSelcet}
                className={styles.inpSelcet}
                id={styles.inpSelect}
                placeholder="Т"
                options={cargoWeightTypes}
                value={cargoWeightTypes.find((c) => c.value === value)}
                onChange={(val) => onChange(val ? val.value : '')}
                styles={{
                  control: (provided) => ({
                    ...provided,
                    borderRadius: '8px',
                    height: '39px',
                  }),
                }}
              />
            )}
          />
        )}
        <input
          type="text"
          {...register('transportSize.transportVolume')}
          placeholder="Имя"
          className={styles.inp}
        />
      </div>
      <div className={styles.dimensionsCon}>
        <div className={styles.dimensionsTitle}>
          <p>Габариты ДхШхВ</p>
          <p>Диаметр</p>
        </div>
        <div className={styles.dimensionsInputs}>
          <input
            type="text"
            placeholder="M"
            {...register('cargoDimensions.length')}
            className={styles.inp}
          />
          <input
            type="text"
            placeholder="M"
            {...register('cargoDimensions.width')}
            className={styles.inp}
          />
          <input
            type="text"
            placeholder="M"
            {...register('cargoDimensions.height')}
            className={styles.inp}
          />
          <input
            type="text"
            placeholder="M"
            {...register('cargoDimensions.diameter')}
            className={styles.inp}
          />
        </div>
      </div>
    </div>
  )
}

export default CreateCargoInputs
