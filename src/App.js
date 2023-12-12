import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  const [page , setPage] = useState('login');
  const handlePage = (page) => {
    setPage(page)
  }
  if(page === 'login') {
      return (
        <div className = 'App'>
          <Login switchPage = {handlePage} />
        </div>
      );
  }
  else {
    return (
      <div className = 'App'>
        <SignUp switchPage = {handlePage} />
      </div>
    );
  }
}

export default App;
