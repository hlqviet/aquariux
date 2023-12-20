export type Weather = {
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
}

export type SearchEntry = {
  city: string
  country: string
  time: Date
}
