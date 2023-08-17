import './App.css';
import { Suspense, useEffect, useMemo } from 'react';
import axios from 'axios';
import { setTotalItems, setShowItems } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Cart from './pages/Cart';
import Chart from './pages/Chart';
import Notice from './pages/Notice';
import Board from './pages/Board';
import Items from './pages/Items';
import Detail from './pages/Detail';
import About from './pages/About';
import Footer from './components/Footer';


const URL = 'https://20230601sy.github.io/0810/src/assets/items.json';
const URL12 = 'https://20230601sy.github.io/0810/src/assets/first12items.json';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get(URL)
      .then((result)=>{
        dispatch(setTotalItems(result.data));
        dispatch(setShowItems(result.data));
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);

  useMemo(()=>{
    axios.get(URL12)
      .then((result)=>{
        dispatch(setShowItems(result.data));
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);
  
  return (
    <div className="App">
      <Header />
      
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/join' element={<Join />}/>
          <Route path='/mypage' element={<MyPage />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/chart' element={<Chart />}/>
          <Route path='/notice' element={<Notice />}/>
          <Route path='/board' element={<Board />}/>
          <Route path='/items' element={<Items />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;