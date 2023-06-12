import './HomePage.css'
import { getTasks } from '../../services/task.service'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    navigate('/')
  }

  useEffect(() => {
    const getAllTasks = async () => {
      const res = await getTasks()
      setTasks(res)
    }
    getAllTasks()
  }, [])


  return (
    <div>
      <h1>Welcome!!</h1>
      <button onClick={logout}>Logout</button>
      { tasks ? tasks?.map((task, idx) => <div key={idx}>{task}</div>) : <div>Loading...</div> }
    </div>
  )
}

export default HomePage