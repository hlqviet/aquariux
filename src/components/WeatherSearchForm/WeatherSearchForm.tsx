import { ErrorMessage } from '@hookform/error-message'
import { SubmitHandler, useForm } from 'react-hook-form'

import useGetGeoQuery from '../../hooks/useGetGeoQuery'
import ButtonBase from '../Buttons/ButtonBase'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import TextField from '../TextField'

const defaultValues = {
  city: '',
  country: ''
}

type WeatherFormValues = typeof defaultValues

interface WeatherSearchFormProps {
  loading: boolean
  fetchGeo: ReturnType<typeof useGetGeoQuery>['execute']
}

const WeatherSearchForm = (props: WeatherSearchFormProps) => {
  const { loading, fetchGeo } = props
  const {
    formState: { errors, isSubmitting },
    register,
    reset,
    handleSubmit
  } = useForm<WeatherFormValues>({
    defaultValues
  })

  const onSubmit: SubmitHandler<WeatherFormValues> = async (data) => {
    await fetchGeo(data)
  }

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
            disabled={loading || isSubmitting}
            loading={loading || isSubmitting}
            type='submit'
          >
            Search
          </ButtonPrimary>
          <ButtonBase onClick={onClear}>Clear</ButtonBase>
        </div>
      </div>
      <ul className='ml-4 my-4 list-disc text-red-500'>
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
