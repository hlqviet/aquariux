import { Dispatch, SetStateAction } from 'react'

import useGetWeatherQuery from '../../hooks/useGetWeatherQuery'
import { SearchEntry } from '../../lib/types'
import ButtonCircle from '../Buttons/ButtonCircle'
import SearchIcon from '../Icons/SearchIcon'
import TrashIcon from '../Icons/TrashIcon'
import HistoryEntryRow from './HistoryEntryRow'

interface WeatherSearchHistoryProps {
  entries: SearchEntry[]
  fetchWeather: ReturnType<typeof useGetWeatherQuery>['execute']
  setSearchHistory: Dispatch<SetStateAction<SearchEntry[]>>
}

const WeatherSearchHistory = (props: WeatherSearchHistoryProps) => {
  const { entries, fetchWeather, setSearchHistory } = props

  const onSearch = async (lat: number, lon: number) => {
    await fetchWeather({ lat, lon })
  }

  const onDelete = (deletingId: number) => {
    setSearchHistory((prevState) =>
      prevState.filter(({ id }) => id !== deletingId)
    )
  }

  return (
    <div>
      <h3 className='mb-4 py-2 font-bold text-2xl border-b border-b-solid'>
        Search History
      </h3>

      {entries.length === 0 && (
        <div className='text-center text-2xl'>No Record</div>
      )}

      {entries.length > 0 && (
        <div>
          {entries.map((entry, index) => (
            <HistoryEntryRow key={entry.id} index={index + 1} entry={entry}>
              <ButtonCircle
                className='btn-sm md:btn-md'
                onClick={() => onSearch(entry.lat, entry.lon)}
              >
                <SearchIcon />
              </ButtonCircle>
              <ButtonCircle
                className='btn-sm md:btn-md'
                onClick={() => onDelete(entry.id)}
              >
                <TrashIcon />
              </ButtonCircle>
            </HistoryEntryRow>
          ))}
        </div>
      )}
    </div>
  )
}

export default WeatherSearchHistory
