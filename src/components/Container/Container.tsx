import { PropsWithChildren } from 'react'

const Container = (props: PropsWithChildren) => {
  const { children } = props

  return <div className='p-4 md:p-6'>{children}</div>
}

export default Container
