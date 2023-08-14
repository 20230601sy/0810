import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import ItemCard from './ItemCard';
import '../styles/ItemList.css';
import items from '../constants/items';
import { useSelector } from 'react-redux';

const ItemList = () => {
  const {totalItems, numShowItems} = useSelector(state=>state);
  // const showItems = totalItems.slice(0, numShowItems);
  alert('itemlist');
  console.log(totalItems);
  return (
    // <Container>
    //   <Row xs='auto' className='test justify-content-center'>
    //     {
    //       [1, 2, 3,
    //       4, 5, 6, 7, 8].map((num)=><Col key={num}><ItemCard /></Col>)
    //     }
    //   </Row>
    // </Container> // 마지막줄 예쁘게 안 됨 결국 grid, 반응형 css 구현 ㅡㅡ^
    <Container className='d-flex justify-content-center'>
      <div className="item-list-container">
        {
          // [1, 2, 3,
          // 4, 5, 6, 7, 8, 1, 2, 3,
          // 4, 5, 6, 7, 8].map((num)=><div key={num}><ItemCard item={items[num]}/></div>)
          totalItems.slice(0, numShowItems).map((item)=><div key={item.id}><ItemCard item={item}/></div>)
        }
      </div>
    </Container>
  );
}

export default ItemList;