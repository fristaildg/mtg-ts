let API_ROOT: string
let APP_ROOT: string

if (process.env.NODE_ENV === 'development') {
  API_ROOT = 'http://localhost:5000/api/v1'
  APP_ROOT = 'http://localhost:3000'
}

if (process.env.NODE_ENV === 'production') {
  API_ROOT = 'https://glacial-eyrie-05457.herokuapp.com/api/v1'
  APP_ROOT = 'https://damp-badlands-60145.herokuapp.com'
}

const MTG_SRC_ROOT = 'https://api.scryfall.com'

export { API_ROOT, APP_ROOT, MTG_SRC_ROOT }