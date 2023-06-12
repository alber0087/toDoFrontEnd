import { api } from "./api";

export const login = async (email, password) => {
  try {
    const { data } = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', data.token)
    localStorage.setItem('role', data.role)
    console.log(data)
    
  } catch (err) {
    console.error(err)
  }
}