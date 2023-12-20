import { SearchEntry } from '../../../lib/types'
import ButtonCircle from '../../Buttons/ButtonCircle'
import SearchIcon from '../../Icons/SearchIcon'
import TrashIcon from '../../Icons/TrashIcon'

interface HistoryEntryRowProps {
  index: number
  entry: SearchEntry
}

const HistoryEntryRow = (props: HistoryEntryRowProps) => {
  const {
    index,
    entry: { city, country, time }
  } = props

  return (
    <div className='py-3 border-b border-b-solid flex justify-between items-center'>
      <div className='text-sm md:text-base'>
        {index}. {city}, {country}
      </div>
      <div className='flex items-center gap-2 text-sm md:text-base'>
        <span>
          {new Intl.DateTimeFormat(undefined, {
            hour12: true,
            timeStyle: 'medium'
          })
            .format(time)
            .replace('am', 'AM')
            .replace('pm', 'PM')}
        </span>
        <ButtonCircle className='btn-sm md:btn-md'>
          <SearchIcon />
        </ButtonCircle>
        <ButtonCircle className='btn-sm md:btn-md'>
          <TrashIcon />
        </ButtonCircle>
      </div>
    </div>
  )
}

export default HistoryEntryRow
