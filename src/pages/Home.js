import EventCarousel from '../components/EventCarousel';
import ItemList from '../components/ItemList';
import { useSelector } from 'react-redux';

const Home = () => {
  const {totalItems} = useSelector(state=>state);

  return (
    <div>
      <EventCarousel />
      <ItemList itemArr={totalItems}/>
    </div>
  );
}

export default Home;