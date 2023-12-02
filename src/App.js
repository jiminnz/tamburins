import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sub_category from './pages/Sub_category';
import Sub_item from './pages/Sub_item';
import Sub_cart from './pages/Sub_cart';
import Sub_login from './pages/Sub_login';
import Sub_empty from './pages/Sub_empty';
// import Item from './components/Item'



function App() {
  return (
    <div id='app'>
      <BrowserRouter>
      {/* <HashRouter> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories/:title" element={<Sub_category />}></Route>
          <Route path="/item" element={<Sub_item />}></Route>
          <Route path="/cart" element={<Sub_cart />}></Route>
          <Route path="/login" element={<Sub_login />}></Route>
          <Route path="/*" element={<Sub_empty/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  )
}

export default App
