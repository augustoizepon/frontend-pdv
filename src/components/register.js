// Register.js
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isPasswordMatching, setPasswordMatching] = useState(true);
  const [serverResponse, setServerResponse] = useState(null);

  async function sendRegisterData() {
    if (isPasswordMatching) {
      try {
        const dataToSend = {
          nome: formData.name,
          email: formData.email,
          senha: formData.password,
        };

        const response = await axios.post(process.env.SITE_REGISTER, dataToSend);
        console.log(response)
        // setServerResponse(response.data.message);
      } catch (error) {
        console.log(error);
        // setServerResponse(error.response.data.message);
      }
    } else {
      // Senhas não coincidem, trate esse caso conforme necessário
      setServerResponse({ error: 'As senhas não coincidem.' });
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handlePasswordChange(event) {
    setFormData({ ...formData, password: event.target.value });
  }

  function handleConfirmPasswordChange(event) {
    const confirmPasswordValue = event.target.value;
    setFormData({ ...formData, confirmPassword: confirmPasswordValue });
    setPasswordMatching(formData.password === confirmPasswordValue);
  }

  return (
    <div className='Register-form-div'>
      <label>Nome:</label>
      <input
        type='text'
        name='name'
        placeholder='Seu nome'
        onChange={handleChange}
      ></input>
      <label>Email:</label>
      <input
        type='text'
        name='email'
        placeholder='email@example.com'
        onChange={handleChange}
      ></input>
      <label>Senha:</label>
      <input
        type='password'
        name='password'
        placeholder='Senha'
        onChange={handlePasswordChange}
      ></input>
      <label>Confirme a Senha:</label>
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirme a senha'
        onChange={handleConfirmPasswordChange}
      ></input>
      {!isPasswordMatching && <p className='red-warning'>As senhas não coincidem.</p>}
      <button className='btn-l-r' onClick={sendRegisterData}>Registrar</button>
      {serverResponse && <div className='server-response'>{serverResponse}</div>}
    </div>
  );
}

export default Register;
