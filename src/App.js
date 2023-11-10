// App.js
import React, { useState } from 'react';
import './style/App.css';
import Login, {loginMessage} from './components/login';
import Register from './components/register';
import Funcional from './components/Funcional';



function App() {
  const [isLoginVisible, setLoginVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  function toggleLoginVisibility() {
    setLoginVisible(true);
    setRegisterVisible(false);
  }

  function toggleRegisterVisibility() {
    setLoginVisible(false);
    setRegisterVisible(true);
  }

  function handleClickOutside(event) {
    if (event.target.closest('#Login-div') || event.target.closest('#SignUp-div')) {
      return;
    }

    setLoginVisible(false);
    setRegisterVisible(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Frente de loja</h1>
        <div className='App-header-menu'>
          <div
            id='Login-div'
            className='main-div'
            onClick={toggleLoginVisibility}
          >
            <p>Fazer Login!</p>
            {isLoginVisible && <Login />}
          </div>
          <div
            id='SignUp-div'
            className='main-div'
            onClick={toggleRegisterVisibility}
          >
            <p>Registre-se!</p>
            {isRegisterVisible && <Register />}
          </div>
        </div>
      </header>
      <main className='App-main'>
      {loginMessage === 'Logado com sucesso!' && <Funcional/>}


      </main>
      {document.addEventListener('click', handleClickOutside)}
    </div>
  );
}

export default App;
