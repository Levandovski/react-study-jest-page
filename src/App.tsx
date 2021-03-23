import React, { useState } from 'react';
import { Home } from './Container/Home';
// import {Home} from './Container/Home';

export const App: React.FC =  () => {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginForm = (event: any) => {
     setLogin(event.target.value);
  }
  
  const handlePasswordForm = (event: any) => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = (event: any) => {
      event.preventDefault();
  }

  return (
     <Home chidren={
      <div >
        <h1>Bem Vindo ao Site!</h1>
        <form>
          <input 
              type="text" 
              onChange={handleLoginForm}
              data-testid="form-login"
           />
          <input 
              type="password" 
              onChange={handlePasswordForm}
              data-testid="form-password" 
          /> 
          <button 
              type="submit"
              onSubmit={handleFormSubmit}
              data-testid="button-logar">Logar</button>
        </form>
      </div>}>          
   </Home>      
  );
}


