import './App.css';

import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

import { Home } from './pages/home';

import { Log } from './routers/log';
import { Dashboard } from './routers/dashboard';
import { PanelAdmin } from './routers/panel-admin';
import { Messages } from './routers/messages';
import { Cart } from './routers/cart';
import { NotFound } from './notFound/notfound';

import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    Aos.init({
      duration : 1000,
    });
  } ,[])

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/log-in' element={<Log />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/panel-Admin' element={<PanelAdmin />} />
            <Route path='/panel-Admin-messages' element={<Messages />} />
            <Route path='/cart-user' element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
