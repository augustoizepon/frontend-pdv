import React, { useState } from 'react';
import axios from 'axios';
let loginMessage = ''
let token = ''
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showLogin, setShowLogin] = useState(true);

  async function sendLoginData() {
    try {
      const dataToSend = {
        email: formData.email,
        senha: formData.password,
      };
      const response = await axios.post('https://backendfrentedeloja.onrender.com/login', dataToSend);

      loginMessage = response.data.message
      token = response.data.token
      setShowLogin(false);
    } catch (error) {
      console.log(error);
      loginMessage = error.response.data.message;
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className='Login-form-div'>
      {showLogin && (
        <div className='Login-form-div'>
          <label>Email:</label>
          <input
            type='text'
            name='email'
            placeholder='email@example.com'
            onChange={handleChange}
          />
          <label>Senha:</label>
          <input
            type='password'
            name='password'
            placeholder='Senha'
            onChange={handleChange}
          />
          <button className='btn-l-r' onClick={sendLoginData}>
            Entrar
          </button>
          <p>{loginMessage}</p>
        </div>
      )}
    </div>
  );
  
}



export {token}
export default Login;
export {loginMessage}
