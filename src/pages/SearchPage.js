import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { useSelector } from 'react-redux';

const SearchPage = () => {
  const {title} = useParams();
  const {totalItems} = useSelector(state=>state);
  return (
      <ItemList itemArr={totalItems.filter(item => item.title.includes(title))}/>
  );
}

export default SearchPage;