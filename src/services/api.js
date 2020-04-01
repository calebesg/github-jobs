import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jobs.github.com/api'
})

export default api
