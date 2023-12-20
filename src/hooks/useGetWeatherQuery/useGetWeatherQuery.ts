import { useCallback, useState } from 'react'

import {
  OPEN_WEATHER_API_HOST,
  OPEN_WEATHER_API_KEY
} from '../../lib/constants'
import { Weather } from '../../lib/types'

interface UseGetWeatherQueryProps {
  lat: number
  lon: number
}

const useGetWeatherQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Weather | undefined>()
  const [error, setError] = useState<Error | undefined>()

  const execute = useCallback(async (params: UseGetWeatherQueryProps) => {
    if (params.lat === 0 || params.lon === 0) return

    const searchParams = new URLSearchParams()

    for (const [key, value] of Object.entries(params)) {
      searchParams.set(key, value.toString())
    }

    searchParams.set('units', 'metric')
    searchParams.set('appid', OPEN_WEATHER_API_KEY)

    setLoading(true)

    try {
      const response = await fetch(
        `${OPEN_WEATHER_API_HOST}/data/2.5/weather?${searchParams.toString()}`
      )

      if (!response.ok) {
        setError(new Error(response.statusText))
        return
      }

      const responseData = await response.json()

      setData(responseData)
      setError(undefined)
    } catch (err: any) {
      setError(err)
      setData(undefined)
    } finally {
      setLoading(false)
    }
  }, [])

  return { error, loading, data, execute }
}

export default useGetWeatherQuery
