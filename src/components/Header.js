import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Search from './Search';
import Login from './Login';
import CategoryDropdown from './CategoryDropdown';

import { useNavigate } from 'react-router-dom';

import { IMG_PATH } from '../constants/path';
import { BG_COLOR } from '../constants/color';
import { ITEM_LISTS } from '../constants/itemLists';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='sticky-top' style={{background : 'white'}}>
      <Container>
        <Row className='flex-column flex-md-row align-items-center'>
          <Col className='text-start' xs="auto">
            {/* <img src={process.env.PUBLIC_URL + '/logo.png'} alt='logo'/> */}
            {/* <img src={`${IMG_PATH}logo.png`} alt='logo' class='img-fluid'/> */}
            <img src={`${IMG_PATH}logo.png`} alt='logo' className='py-1' style={{cursor:'pointer'}} onClick={()=>navigate('/')}/>
            {/* <img src="https://via.placeholder.com/200x50?text=logo"/> */}
          </Col>
          <Col>
            <Search />
          </Col>
          <Col className="d-none d-md-block" xs="auto">
            <Login />
          </Col>
        </Row>
      </Container>

      {/* <Navbar bg="dark" data-bs-theme="dark"> */}
      {/* <Navbar data-bs-theme="dark" style={{background : "#2578c4"}}> */}
      <Navbar data-bs-theme="dark" style={{...BG_COLOR}}>
        <Container>
          <Nav className="me-auto">
            <CategoryDropdown /> {/* 가상 태그라 style 적용을 못하니 css를 위해 분리 시전 */}
            
            {/* 신상품 세일중 자주 구매 베스트 */}
            {
              ITEM_LISTS.map(itemlist => <Nav.Link key={itemlist.id} onClick={()=>navigate(`/itemlist/${itemlist.id}`)}>{itemlist.title}</Nav.Link>)
            }
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;