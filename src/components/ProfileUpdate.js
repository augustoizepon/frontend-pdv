import React, { useState } from 'react';
import axios from 'axios';

function ProfileUpdate({ token }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUpdateProfile = async () => {

    const userData = {};

    if (newName !== '') {
      userData.nome = newName;
    }

    if (newEmail !== '') {
      userData.email = newEmail;
    }

    if (newPassword !== '') {
      userData.senha = newPassword;
    }

    try {
     
      const response = await axios.put(process.env.SITE_UPDATE, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

     
      alert(response.data.message);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <button className='btn-l-r' onClick={() => setIsExpanded(!isExpanded)}>Atualizar Perfil</button>
      {isExpanded && (
        <div className='Login-form-div'>
          <label>Novo Nome:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label>Novo Email:</label>
          <input
            type="text"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <label>Nova Senha:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button className='btn-l-r' onClick={handleUpdateProfile}>Atualizar Perfil</button>
        </div>
      )}
    </div>
  );
}

export default ProfileUpdate;
