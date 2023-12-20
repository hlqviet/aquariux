import { ButtonHTMLAttributes } from 'react'

export interface ButtonBaseProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
}

const ButtonBase = (props: ButtonBaseProps) => {
  const { children, className, loading, ...rest } = props

  return (
    <button className={`btn ${className ?? ''}`} {...rest}>
      {loading && <span className='loading loading-spinner' />}
      {children}
    </button>
  )
}

export default ButtonBase
