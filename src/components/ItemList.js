import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from './ItemCard';

const ItemList = () => {
  return (
    <Container>
      <Row xs='auto'>
        {
          [1, 2, 3,
          4, 5, 6, 7, 8].map((num)=><Col key={num}><ItemCard /></Col>)
        }
      </Row>
    </Container>
  );
}

export default ItemList;