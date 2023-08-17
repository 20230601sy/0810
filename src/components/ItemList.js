import Container from 'react-bootstrap/Container';
import ItemCard from './ItemCard';
import '../styles/ItemList.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { incNumShowItems } from '../redux/store';
import { useState } from 'react';

const ItemList = ({itemArr}) => {
  // const {totalItems, numShowItems} = useSelector(state=>state);
  // const showItems = totalItems.slice(0, numShowItems);
  // const dispatch = useDispatch();
  // const [numShowItems, setNumShowItems] = useState(itemArr.length > 12 ? 12 : itemArr.length);
  const [numShowItems, setNumShowItems] = useState(12);

  const handleScroll = (e) => {
    const isNearBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 5;
    if (isNearBottom) {
      // dispatch(incNumShowItems((totalItems===null) ? 0 : totalItems.length));
      setNumShowItems(itemArr.length > numShowItems+12 ? numShowItems+12 : itemArr.length);
    }
  }
  // 마음에는 안 들지만 계속 실패하여ㅋㅋㅋ 
  // https://stackoverflow.com/questions/45585542/detecting-when-user-scrolls-to-bottom-of-div-with-react-js
  // 일단 가장 쉬운 방법으로 구현해둠. 나중에 다 끝나고 수정...할 리는 없군ㅎ
  if(!itemArr.length) {
    return (<Container className='d-flex justify-content-center mt-2'><div>검색 결과가 없습니다.</div></Container>);
  }
  return (
    // <Container>
    //   <Row xs='auto' className='test justify-content-center'>
    //     {
    //       [1, 2, 3,
    //       4, 5, 6, 7, 8].map((num)=><Col key={num}><ItemCard /></Col>)
    //     }
    //   </Row>
    // </Container> // 마지막줄 예쁘게 안 됨 결국 grid, 반응형 css 구현 ㅡㅡ^

    <Container className='d-flex justify-content-center mt-2'  onScroll={handleScroll}  style={{overflowY: 'scroll', maxHeight: '80vh'}}>
      <div className="item-list-container">
        {
          itemArr.slice(0, numShowItems).map((item)=>item && <div key={item.id}><ItemCard item={item}/></div>)
        }
      </div>
    </Container>
  );
}

export default ItemList;


