import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage.js';
import { Route } from 'react-router-dom';
import './App.css'
const App = () => {
  return (
    <div className='App'>
            <Route path="/" component={Homepage} exact />
              <Route  exact path="/chats" component={ChatPage} />
    </div>
  )
}

export default App
