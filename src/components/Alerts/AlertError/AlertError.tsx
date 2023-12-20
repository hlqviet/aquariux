import { HTMLAttributes } from 'react'

import AlertBase from '../AlertBase'

const AlertError = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, ...rest } = props

  return <AlertBase className={`alert-error ${className ?? ''}`} {...rest} />
}

export default AlertError
