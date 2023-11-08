import React, { useState } from 'react';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate';
import CategoryList from './CategoryList';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');
  const [token, setToken] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  async function sendLoginData() {
    try {
      const dataToSend = {
        email: formData.email,
        senha: formData.password,
      };
      const response = await axios.post('https://backendfrentedeloja.onrender.com/login', dataToSend);

      setLoginMessage(response.data.message);
      setToken(response.data.token);
      setShowLogin(false);
      setShowCategories(true);
    } catch (error) {
      Ikmn7Hvg
      console.log(error);
      setLoginMessage(error.response.data.message);
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
      {loginMessage === 'Logado com sucesso!' && <ProfileUpdate token={token} />}
      {showCategories && <CategoryList token={token} />}
    </div>
  );
}

export default Login;
