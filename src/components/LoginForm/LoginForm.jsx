import { useState } from "react";
import { login } from "../../services/auth.service";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

  const handleLogin = async () => {
    await login(email, password)
    if (localStorage.getItem('token')) {
      navigate('/dashboard')
    } else {
      console.log('No me token')
    }
  }

  return (
    <div className="login">
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}  
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type="button" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
