import Card from 'react-bootstrap/Card';
import { imgPath } from '../constants/path';
import imgSrc from '../assets/8809692954699.jpg';

const ItemCard = () => {
  const item = { "id" : 8809692954699, "title" : "조이)꽃카얼그레이뚱카롱" , "img" : "8809692954699.jpg" , "price" : 3900, "category" : "snack", "new" : "New", "event" : "" };
  return (
    // <div className='justify-content-center m-2'>
      <Card className='mb-2'style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="https://via.placeholder.com/300x300?text=Item Image" /> */}
        {/* <Card.Img variant="top" src={`${imgPath}${item.img}`} /> */}
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price.toLocaleString()}원</Card.Text>
        </Card.Body>
      </Card>      
    // </div>
  );
}

export default ItemCard;