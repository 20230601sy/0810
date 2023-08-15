import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CATEGORIES } from "../constants/categoryList";

const Category = () => {
  const {categoryID} = useParams();
  let target = CATEGORIES.find(category => Number(category.id) === Number(categoryID));
  if (!target)
    target = CATEGORIES[0];

  const {totalItems} = useSelector(state=>state);

  return (
    <ItemList itemArr={totalItems.filter(item => item.category === target.category)}/>
  );
}

export default Category;