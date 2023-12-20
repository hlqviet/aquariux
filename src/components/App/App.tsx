import { Weather } from '../../lib/types'
import Container from '../Container'
import Layout from '../Layout'
import WeatherSearchForm from '../WeatherSearchForm'
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

const App = () => {
  return (
    <Layout>
      <Container>
        <WeatherSearchForm />
        <WeatherSearchResult time={new Date()} weatherDetails={weatherMock} />
      </Container>
    </Layout>
  )
}

export default App
