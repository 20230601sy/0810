import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ITEM_LISTS } from '../constants/itemLists'

const ItemListPage = () => {
  const {listID} = useParams();
  let target = ITEM_LISTS.find(itemList => Number(itemList.id) === Number(listID));
  if (!target)
    target = ITEM_LISTS[0];

  const {totalItems} = useSelector(state=>state);

  return (
    <ItemList itemArr={totalItems.filter(item => item[target.compareTarget])}/>
  );
}

export default ItemListPage;