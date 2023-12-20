import { SearchEntry, Weather } from '../../lib/types'
import Container from '../Container'
import Layout from '../Layout'
import WeatherSearchForm from '../WeatherSearchForm'
import WeatherSearchHistory from '../WeatherSearchHistory'
import WeatherSearchResult from '../WeatherSearchResult'

const weatherMock: Weather = {
  coord: { lon: 106.7011, lat: 10.7764 },
  weather: [{ id: 802, main: 'Clouds', description: 'scattered clouds' }],
  main: {
    temp_min: 25.95,
    temp_max: 25.95,
    humidity: 69
  },
  sys: {
    country: 'VN'
  },
  name: 'Ho Chi Minh City'
}
const searchHistoryMock: SearchEntry[] = [
  { city: 'Ho Chi Minh City', country: 'VN', time: new Date(2023, 12, 12) },
  { city: 'London', country: 'GB', time: new Date() }
]

const App = () => {
  return (
    <Layout>
      <Container>
        <WeatherSearchForm />
        <WeatherSearchResult time={new Date()} weatherDetails={weatherMock} />
        <WeatherSearchHistory entries={searchHistoryMock} />
      </Container>
    </Layout>
  )
}

export default App
