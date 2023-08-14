import './App.css';
import { Suspense, lazy, useEffect, useMemo } from 'react';
import axios from 'axios';
import { setTotalItems } from './redux/store';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import ItemListPage from './pages/ItemListPage';
import Detail from './pages/Detail';
import About from './pages/About';
import { useDispatch } from 'react-redux';

const URL = 'https://20230601sy.github.io/0810/src/assets/items.json';
const URL12 = 'https://20230601sy.github.io/0810/src/assets/first12items.json';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
  // useMemo(()=>{
    axios.get(URL)
      .then((result)=>{
        // console.log(result.data.slice(0,2));
        // alert('hi');
        dispatch(setTotalItems(result.data));
      })
      .catch((error)=>{
        console.log(error);
      })
  }, []);

  axios.get(URL12)
    .then((result)=>{
      // console.log(result.data.slice(0,2));
      // alert('hi');
      dispatch(setFirst12Items(result.data));
    })
    .catch((error)=>{
      console.log(error);
    });
  
  return (
    <div className="App">
      <Header />
      
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/category/:categoryID' element={<Category />}/>
          <Route path='/itemlist/:listID' element={<ItemListPage />}/>
          <Route path='/detail/:id' element={<Detail />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;