import { Weather } from '../../lib/types'
import DetailRow from './components/DetailRow'

interface WeatherSearchResultProps {
  weatherDetails: Weather
}

const WeatherSearchResult = (props: WeatherSearchResultProps) => {
  const { weatherDetails } = props
  const {
    dt,
    main: { humidity, temp_max: tempMax, temp_min: tempMin },
    name,
    sys: { country },
    weather
  } = weatherDetails
  const [day, , month, , year, , hour, , minute, , dayPeriod] =
    new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).formatToParts(dt * 1000)

  return (
    <div className='prose my-8'>
      <span>
        {name}, {country}
      </span>
      <h2 className='mt-0'>{weather[0].main}</h2>
      <div>
        <DetailRow label='Description' content={weather[0].description} />
        <DetailRow
          label='Temperature'
          content={`${tempMin}\u00B0C ~ ${tempMax}\u00B0C`}
        />
        <DetailRow label='Humidity' content={humidity} />
        <DetailRow
          label='Time'
          content={`${year.value}-${month.value}-${day.value} ${hour.value}:${
            minute.value
          } ${dayPeriod.value.toUpperCase()}`}
        />
      </div>
    </div>
  )
}

export default WeatherSearchResult
