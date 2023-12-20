import { useCallback, useState } from 'react'

import {
  OPEN_WEATHER_API_HOST,
  OPEN_WEATHER_API_KEY
} from '../../lib/constants'
import { Geo } from '../../lib/types'

const useGetGeoQuery = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<Geo | undefined>()
  const [error, setError] = useState<Error | undefined>()

  const execute = useCallback(
    async (params: { city: string; country: string }) => {
      if (!params.city || !params.country) return

      const searchParams = new URLSearchParams()

      searchParams.set('q', `${params.city},${params.country}`)
      searchParams.set('appid', OPEN_WEATHER_API_KEY)

      setLoading(true)

      try {
        const response = await fetch(
          `${OPEN_WEATHER_API_HOST}/geo/1.0/direct?${searchParams.toString()}`
        )

        if (!response.ok) {
          setError(new Error(response.statusText))
          return
        }

        const responseData = await response.json()

        if (!responseData.length) {
          setError(new Error('Not found'))
          return
        }

        setData(responseData[0])
        setError(undefined)
      } catch (err: any) {
        setError(err)
        setData(undefined)
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return { error, loading, data, execute }
}

export default useGetGeoQuery
