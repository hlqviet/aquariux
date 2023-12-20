import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const TextField = (
  props: TextFieldProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  const { label, ...rest } = props

  if (label) {
    return (
      <label className='form-control'>
        <div className='label'>{label}</div>
        <input
          className='input input-bordered'
          type='text'
          ref={ref}
          {...rest}
        />
      </label>
    )
  }

  return <input className='input input-bordered' type='text' {...rest} />
}

export default forwardRef(TextField)
