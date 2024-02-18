import axios from 'axios'

export const useApi = () => {
  const baseURL = 'https://iadeena.com/api/'
//   const storeUser = useStoreUser()

  return axios.create({
    baseURL,
    // headers: {
      // Authorization: `Bearer ${storeUser.token}`
    // }
  })
}
export default axios
