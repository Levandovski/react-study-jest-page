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
  return (
     <Home chidren={
      <div >
        <h1>Bem Vindo ao Site!</h1>
        <form>
          <input type="text"/>
          <input type="password"/> 
          <button type="submit">Logar</button>
        </form>
      </div>}>          
   </Home>      
  );
}


