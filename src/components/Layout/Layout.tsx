import { PropsWithChildren } from 'react'

import Header from '../Header'

const Layout = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
