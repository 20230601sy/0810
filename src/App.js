import './App.css';
import { Suspense, lazy, useEffect, useMemo } from 'react';
import axios from 'axios';
import { setTotalItems } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Join from './pages/Join';
import MyPage from './pages/MyPage';
import Cart from './pages/Cart';
import Chart from './pages/Chart';
import Notice from './pages/Notice';
import Board from './pages/Board';
import Category from './pages/Category';
import ItemListPage from './pages/ItemListPage';
import Detail from './pages/Detail';
import About from './pages/About';
import Footer from './components/Footer';

import { useDispatch } from 'react-redux';
import LoginPage from './pages/LoginPage';

const URL = 'https://20230601sy.github.io/0810/src/assets/items.json';
const URL12 = 'https://20230601sy.github.io/0810/src/assets/first12items.json';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    axios.get(URL)
      .then((result)=>{
        dispatch(setTotalItems(result.data));
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);

  useMemo(()=>{
    axios.get(URL12)
      .then((result)=>{
        // console.log(result.data.slice(0,2));
        // alert('hi');
        // dispatch(setFirst12Items(result.data));
        dispatch(setTotalItems(result.data));
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
          <Route path='/category/:categoryID' element={<Category />}/>
          <Route path='/itemlist/:listID' element={<ItemListPage />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;