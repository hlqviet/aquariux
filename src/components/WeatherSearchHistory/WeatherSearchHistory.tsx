import { SearchEntry } from '../../lib/types'
import HistoryEntryRow from './HistoryEntryRow'

interface WeatherSearchHistoryProps {
  entries: SearchEntry[]
}

const WeatherSearchHistory = (props: WeatherSearchHistoryProps) => {
  const { entries } = props

  return (
    <div>
      <h3 className='mb-4 py-2 font-bold text-2xl border-b border-b-solid'>
        Search History
      </h3>
      <div>
        {entries.map((entry, index) => (
          <HistoryEntryRow
            key={`${entry.city}-${entry.country}-${entry.time.toString()}`}
            index={index + 1}
            entry={entry}
          />
        ))}
      </div>
    </div>
  )
}

export default WeatherSearchHistory
