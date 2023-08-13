import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useNavigate } from 'react-router-dom';

import '../styles/MainFooter.css'

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container className='d-none d-md-block'>
        <Row md="auto">
          <Col>공지사항</Col>
          <Col>점포안내</Col>
          <Col onClick={()=>navigate('/about')}>(주문)픽업위치</Col>
        </Row>
        <Row md="auto">
          <Col>회사 소개</Col>
          <Col>개인정보처리방침</Col>
          <Col>이용약관</Col>
          <Col>연락처</Col>
        </Row>
      </Container>

      <Navbar className='main-footer-mobile d-md-none p-0 fixed-bottom'>
        <Nav>
        {/* <Nav className="me-auto"> */}
          <Nav.Link href="#home">
            <div><i class="fa-solid fa-bars"></i></div>
            <div>카테고리</div>
          </Nav.Link>
          <Nav.Link href="#features">
            <div><i class="fa-regular fa-bell"></i></div>
            <div>픽업 안내</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i class="fa-solid fa-house"></i></div>
            <div>홈</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
          <div><i class="fa-regular fa-user"></i></div>
          <div>마이페이지</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i class="fa-regular fa-star"></i></div>
            <div>자주 구매</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MainFooter;