import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { Header, Input } from '../../Components'
import axios from 'axios'


function Login() {

  let navigate = useNavigate()

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const submit = async () => {

    try {
      const result = await axios.post('http://localhost:3002/login', {
        cpf: user,
        senha: password,
      }, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      navigate('/matriculas')
      console.log(result.data.jwt);
    } catch (e) {
      navigate('/cadastrar-usuario')
      console.log("Login Falhou");
    }
  } 

  return (
    <div >
      <Header />
      <h1> Login </h1>
      <Input
        value={user}
        onChange={e => setUser(e.target.value)}
        label="CPF:*"
        type="text"
      />
      <Input
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Senha:*"
        type="text"
      />
      <button className="acessar-button" onClick={submit}> Acessar </button>
    </div>
  );
}

export default Login;
