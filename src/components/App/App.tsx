import { useEffect, useState } from 'react'

import useGetGeoQuery from '../../hooks/useGetGeoQuery'
import useGetWeatherQuery from '../../hooks/useGetWeatherQuery'
import { SearchEntry } from '../../lib/types'
import AlertError from '../Alerts/AlertError'
import Container from '../Container'
import Layout from '../Layout'
import WeatherSearchForm from '../WeatherSearchForm'
import WeatherSearchHistory from '../WeatherSearchHistory'
import WeatherSearchResult from '../WeatherSearchResult'

const App = () => {
  const [searchHistory, setSearchHistory] = useState<SearchEntry[]>([])
  const {
    data: geoData,
    error: geoError,
    loading: geoLoading,
    execute: fetchGeo
  } = useGetGeoQuery()
  const {
    data: weatherData,
    error: weatherError,
    loading: weatherLoading,
    execute: fetchWeather
  } = useGetWeatherQuery()

  useEffect(() => {
    if (!geoData) return

    fetchWeather({ lat: geoData.lat, lon: geoData.lon })
  }, [fetchWeather, geoData])

  useEffect(() => {
    if (!weatherData) return

    setSearchHistory((prevState) => {
      // Prevent adding duplicate history entry
      if (prevState.find(({ id }) => id === weatherData.id)) return prevState

      return [
        {
          id: weatherData.id,
          city: weatherData.name,
          country: weatherData.sys.country,
          lat: weatherData.coord.lat,
          lon: weatherData.coord.lon,
          dt: weatherData.dt * 1000
        },
        ...prevState
      ]
    })
  }, [weatherData])

  return (
    <Layout>
      <Container>
        <WeatherSearchForm
          loading={geoLoading || weatherLoading}
          fetchGeo={fetchGeo}
        />

        {geoError && <AlertError>{geoError.message}</AlertError>}

        {weatherError && <AlertError>{weatherError.message}</AlertError>}

        {!geoError && !weatherError && weatherData && (
          <WeatherSearchResult weatherDetails={weatherData} />
        )}

        <WeatherSearchHistory
          entries={searchHistory}
          fetchWeather={fetchWeather}
          setSearchHistory={setSearchHistory}
        />
      </Container>
    </Layout>
  )
}

export default App
