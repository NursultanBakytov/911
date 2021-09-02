const COUNTRY_ID = 2 // Ukraine for now only
let token = null

const CLIENT_SECRET = "HgVocxGH4FINpaBv4vLg9A2e4LzyiGpN4GbS3Nyj"

const BASE_URL_LOCAL = "http://localhost:8080/api"
const BASE_URL_DEV = "https://dev.api.accessibility.com.ua/api/2/"
const BASE_URL_PROD = "https://api.accessibility.com.ua/api/2/"

const BASE_URL = BASE_URL_DEV
//  const BASE_URL = BASE_URL_PROD

export default {
  token,
  CLIENT_SECRET,
  BASE_URL,
  COUNTRY_ID
}
