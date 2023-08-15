import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BG_COLOR_SECOND } from '../constants/color';
import { useNavigate } from 'react-router-dom';

import '../styles/MainFooter.css';
import { ABOUT_LISTS } from '../constants/aboutList';

const MainFooter = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar data-bs-theme="dark" className='mt-2 py-0 d-none d-md-block' style={{...BG_COLOR_SECOND}}>
        <Container>
          <Nav className="me-auto">            
            {
              [0, 1, 2].map(num => <Nav.Link key={num} onClick={()=>navigate(`/about/${ABOUT_LISTS[num].id}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
              // [0, 1, 2].map(num => <Nav.Link key={num} onClick={()=>navigate(`${abouts[num].destination}`)}>{abouts[num].title}</Nav.Link>)
            }
          </Nav>
        </Container>
      </Navbar>
      <Navbar data-bs-theme="dark" className='py-0 pb-5 d-none d-md-block' style={{...BG_COLOR_SECOND}}>
        <Container>
          <Nav className="me-auto">            
            {
              [3, 4, 5, 6].map(num => <Nav.Link key={num} onClick={()=>navigate(`/about/${ABOUT_LISTS[num].id}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
            }
          </Nav>
        </Container>
      </Navbar>

      {/* fixed-bottom 공간 margin 계산 안하려고 똑같은 거 집어넣음... */}
      <Navbar className='main-footer-mobile d-md-none p-0 mt-2'>
        <Nav>
        {/* <Nav className="me-auto"> */}
          <Nav.Link href="#home">
            <div><i className="fa-solid fa-bars"></i></div>
            <div>카테고리</div>
          </Nav.Link>
          <Nav.Link href="#features">
            <div><i className="fa-regular fa-bell"></i></div>
            <div>픽업 안내</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i className="fa-solid fa-house"></i></div>
            <div>홈</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
          <div><i className="fa-regular fa-user"></i></div>
          <div>마이페이지</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i className="fa-regular fa-star"></i></div>
            <div>자주 구매</div>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Navbar className='main-footer-mobile d-md-none p-0 mt-2 fixed-bottom'>
        <Nav>
        {/* <Nav className="me-auto"> */}
          <Nav.Link href="#home">
            <div><i className="fa-solid fa-bars"></i></div>
            <div>카테고리</div>
          </Nav.Link>
          <Nav.Link href="#features">
            <div><i className="fa-regular fa-bell"></i></div>
            <div>픽업 안내</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i className="fa-solid fa-house"></i></div>
            <div>홈</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
          <div><i className="fa-regular fa-user"></i></div>
          <div>마이페이지</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <div><i className="fa-regular fa-star"></i></div>
            <div>자주 구매</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MainFooter;