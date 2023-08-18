import Container from 'react-bootstrap/Container';
import ItemCard from '../components/ItemCard';
import '../styles/Items.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Items = () => {
  const {showItems} = useSelector(state=>state);
  const [numShowItems, setNumShowItems] = useState(12);

  const handleScroll = (e) => {
    const isNearBottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 5;
    if (isNearBottom)
      setNumShowItems(showItems.length > numShowItems+12 ? numShowItems+12 : showItems.length);
  }
  // 마음에는 안 들지만 계속 실패하여ㅋㅋㅋ 
  // https://stackoverflow.com/questions/45585542/detecting-when-user-scrolls-to-bottom-of-div-with-react-js
  // 일단 가장 쉬운 방법으로 구현해둠. 나중에 다 끝나고 수정...할 리는 없군ㅎ
  if(!showItems.length)
    return (<Container className='d-flex justify-content-center mt-2'><div>검색 결과가 없습니다.</div></Container>);
    
  return (
    <div className="Items">
      <Container className='d-flex justify-content-center mt-2'  onScroll={handleScroll}  style={{overflowY: 'scroll', maxHeight: '80vh'}}>
        <div className="item-list-container">
          {
            showItems.slice(0, numShowItems).map((item)=>item && <div key={item.id}><ItemCard item={item}/></div>)
          }
        </div>
      </Container>
      <Container className='mt-2' style={{height:'80px'}}></Container>
    </div>
  );
}

export default Items;