import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BG_COLOR_SECOND } from '../constants/color';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { CATEGORIES } from '../constants/categoryList'; // 이 정도는 알고 있는 걸로 하자 ㅡ_ㅡ

import '../styles/Footer.css';
import { ABOUT_LISTS } from '../constants/aboutList';
import { useState } from 'react';

const Footer = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='Footer'>
      <Container className='mt-2' style={{height:'80px'}}></Container>
      <div className="pc-footer-container d-none d-md-block fixed-bottom" style={{...BG_COLOR_SECOND}}>
        {/* <Container style={{height:'128px'}}></Container> */}
        {/* <div className='sticky-bottom'> */}
          <Navbar data-bs-theme="dark" className='py-0'>
            <Container>
              <Nav className="me-auto">            
                {
                  // [0, 1, 2].map(num => <Nav.Link key={num} onClick={()=>navigate(`/about/${ABOUT_LISTS[num].id}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                  [0, 1, 2].map(num => <Nav.Link key={num} onClick={()=>navigate(`${ABOUT_LISTS[num].destination}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                }
              </Nav>
            </Container>
          </Navbar>
          <Navbar data-bs-theme="dark" className='py-0'>
            <Container>
              <Nav className="me-auto">            
                {
                  // [3, 4, 5, 6].map(num => <Nav.Link key={num} onClick={()=>navigate(`/about/${ABOUT_LISTS[num].id}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                  [3, 4, 5, 6].map(num => <Nav.Link key={num} onClick={()=>navigate(`${ABOUT_LISTS[num].destination}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                }
              </Nav>
            </Container>
          </Navbar>
        {/* </div> */}
      </div>
      
      
      {/* <Container className='d-md-none' style={{height:'80px'}}></Container> */}
      <Navbar className='footer-mobile d-md-none p-0 fixed-bottom'>
        <Nav className="me-auto">
          <ButtonGroup vertical className={'mobile-dropdown-container ' + (showMobileDropdown ? 'd-block' : 'd-none')}>
            {
              CATEGORIES.map((category) => <Button variant="secondary" size="lg" key={category.id} onClick={()=>navigate(`/category/${category.id}`)}>{category.content}</Button>)
            }
          </ButtonGroup>
          <Nav.Link onMouseMove={()=>setShowMobileDropdown(true)} onMouseLeave={()=>setShowMobileDropdown(false)} className='position-relative'>
            <div><i className="fa-solid fa-bars"></i></div>
            <div>카테고리</div>
          </Nav.Link>
          <Nav.Link onClick={()=>navigate('/about')}>
            <div><i className="fa-regular fa-bell"></i></div>
            <div>픽업 안내</div>
          </Nav.Link>
          <Nav.Link onClick={()=>navigate('/')}>
            <div><i className="fa-solid fa-house"></i></div>
            <div>홈</div>
          </Nav.Link>
          <Nav.Link onClick={()=>navigate('/mypage')}>
          <div><i className="fa-regular fa-user"></i></div>
          <div>마이페이지</div>
          </Nav.Link>
          <Nav.Link onClick={()=>navigate('/cart')}> {/* 수정전 */}
            <div><i className="fa-regular fa-star"></i></div>
            <div>자주 구매</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;