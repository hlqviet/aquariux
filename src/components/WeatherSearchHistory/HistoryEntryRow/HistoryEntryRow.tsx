import { PropsWithChildren } from 'react'

import { SearchEntry } from '../../../lib/types'

interface HistoryEntryRowProps {
  index: number
  entry: SearchEntry
}

const HistoryEntryRow = (props: PropsWithChildren<HistoryEntryRowProps>) => {
  const {
    index,
    children,
    entry: { city, country, dt }
  } = props

  return (
    <div className='py-3 border-b border-b-solid flex flex-wrap justify-between items-center'>
      <div className='text-sm md:text-base'>
        {index}. {city}, {country}
      </div>
      <div className='flex items-center gap-2 text-sm md:text-base'>
        <span>
          {new Intl.DateTimeFormat(undefined, {
            hour12: true,
            timeStyle: 'medium'
          })
            .format(dt * 1000)
            .replace('am', 'AM')
            .replace('pm', 'PM')}
        </span>
        {children}
      </div>
    </div>
  )
}

export default HistoryEntryRow
