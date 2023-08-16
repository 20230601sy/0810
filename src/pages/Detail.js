import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { Col, Container, Row } from "react-bootstrap";
import { IMG_PATH } from '../constants/path';

const Detail = () => {
  const {id} = useParams();
  const item = useDetail(id);
  
  if(!item)
    return <div>데이터를 읽어오는 중입니다...</div>;
  
  // const {title, img, price, new, event} = item; new 가 안돼! 허얼...

  return (
    <Container className="mt-2">
      <Row>
        <Col xs={6}>
          <img src={`${IMG_PATH}${item.img}`} style={{ width: '100%', aspectRatio: '1', padding: '1rem'}} alt="item-img"/>
        </Col>
        <Col xs={6} className="align-self-center">
            <h4>{item.title}</h4>
            <p>{item.new}&nbsp;&nbsp;{item.event}</p>
            <p>{Number(item.price).toLocaleString()}원</p>
            {/* <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem({id : fruits[id].id, title : fruits[id].title}));
              window.alert('장바구니 추가');
            }}>주문하기</button>  */}
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;