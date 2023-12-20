import { ErrorMessage } from '@hookform/error-message'
import { SubmitHandler, useForm } from 'react-hook-form'

import ButtonBase from '../Buttons/ButtonBase'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import TextField from '../TextField'

const defaultValues = {
  city: '',
  country: ''
}

type WeatherFormValues = typeof defaultValues

const WeatherSearchForm = () => {
  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit
  } = useForm<WeatherFormValues>({
    defaultValues
  })

  const onSubmit: SubmitHandler<WeatherFormValues> = () => {}

  const onClear = () => {
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-wrap flex-col md:flex-row md:items-end gap-4'>
        <TextField
          label='City'
          {...register('city', {
            required: { value: true, message: 'City is required' }
          })}
        />
        <TextField
          label='Country'
          {...register('country', {
            required: {
              value: true,
              message: 'Country is required'
            },
            pattern: {
              value: /^[A-Za-z]{2}$/i,
              message: 'Please use ISO 3166 country codes (e.g. US, GB)'
            }
          })}
        />
        <div className='flex gap-4'>
          <ButtonPrimary
            disabled={isSubmitting}
            loading={isSubmitting}
            type='submit'
          >
            Search
          </ButtonPrimary>
          <ButtonBase onClick={onClear}>Clear</ButtonBase>
        </div>
      </div>
      <ul className='my-4 list-disc text-red-500'>
        {Object.keys(defaultValues).map((field) =>
          errors[field as keyof WeatherFormValues] ? (
            <li key={field}>
              <ErrorMessage
                errors={errors}
                name={field as keyof WeatherFormValues}
              />
            </li>
          ) : undefined
        )}
      </ul>
    </form>
  )
}

export default WeatherSearchForm
