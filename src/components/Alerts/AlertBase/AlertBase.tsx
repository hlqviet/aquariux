import { HTMLAttributes } from 'react'

const AlertBase = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props

  return <div className={`alert ${className ?? ''}`} role='alert' {...rest} />
}

export default AlertBase
