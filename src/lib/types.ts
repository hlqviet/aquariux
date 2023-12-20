export type Geo = {
  name: string
  lat: number
  lon: number
  country: string
}

export type Weather = {
  id: number
  coord: {
    lon: number
    lat: number
  }
  weather: {
    id: number
    main: string
    description: string
  }[]
  main: {
    temp_min: number
    temp_max: number
    humidity: number
  }
  sys: {
    country: string
  }
  name: string
  dt: number
}

export type SearchEntry = {
  id: number
  city: string
  country: string
  lat: number
  lon: number
  dt: number
}
