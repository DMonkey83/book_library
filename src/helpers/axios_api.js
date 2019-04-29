import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://booklibrary-27023.firebaseio.com'
})

export default instance