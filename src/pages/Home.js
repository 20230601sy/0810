import EventCarousel from '../components/EventCarousel';
import Items from './Items';
import { useDispatch, useSelector } from 'react-redux';
import { setShowItems } from '../redux/store';

const Home = () => {
  const {totalItems} = useSelector(state=>state);
  const dispatch = useDispatch();
  dispatch(setShowItems(totalItems));

  return (
    <div>
      <EventCarousel />
      <Items />
    </div>
  );
}

export default Home;