import { api } from "./api";

export const getTasks = async () => {
  try {
    const { data } = await api.get('/task', {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    return data
  } catch (err) {
    console.log(err)
  }
}