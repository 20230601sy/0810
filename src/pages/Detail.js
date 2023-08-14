import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { Col, Container, Row } from "react-bootstrap";
import { imgPath } from '../constants/path';

const Detail = () => {
  const {id} = useParams();
  const item = useDetail(id);
  
  if(!item)
    return <div>데이터를 읽어오는 중입니다...</div>;
  
  // const {title, img, price, new1, event} = item; new 가 안돼! 허얼...

  return (
    <Container className="mt-2">
      <Row>
        {/* <Col><ItemCard item={item}/></Col> */}
        <Col xs={6}>
          <img src={`${imgPath}${item.img}`} width="100%" />
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