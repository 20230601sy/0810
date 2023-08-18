import Card from 'react-bootstrap/Card';
import { IMG_PATH } from '../constants/path';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }} onClick={()=>navigate(`/detail/${item.id}`)}>
      <Card.Img variant="top" src={`${IMG_PATH}${item.img}`} style={{ width: '16rem', aspectRatio: '1', margin: '1rem'}} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{Number(item.price).toLocaleString()}원</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;