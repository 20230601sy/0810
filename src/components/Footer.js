import { Container, Nav, Navbar } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Category from './Category';
import { BG_COLOR_SECOND } from '../constants/color';
import { ABOUT_LISTS } from '../constants/aboutList';
import '../styles/Footer.css';

const Footer = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='Footer'>
      <div className="pc-footer-container d-none d-md-block fixed-bottom" style={{...BG_COLOR_SECOND}}>
          <Navbar data-bs-theme="dark" className='py-0'>
            <Container>
              <Nav className="me-auto">            
                {
                  [0, 1, 2].map(num => <Nav.Link key={num} onClick={()=>navigate(`${ABOUT_LISTS[num].destination}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                }
              </Nav>
            </Container>
          </Navbar>
          <Navbar data-bs-theme="dark" className='py-0'>
            <Container>
              <Nav className="me-auto">            
                {
                  [3, 4, 5, 6].map(num => <Nav.Link key={num} onClick={()=>navigate(`${ABOUT_LISTS[num].destination}`)}>{ABOUT_LISTS[num].title}</Nav.Link>)
                }
              </Nav>
            </Container>
          </Navbar>
      </div>
      
      <Navbar className='footer-mobile d-md-none p-0 fixed-bottom'>
        <Nav className="me-auto">
          <Nav.Link onMouseMove={()=>setShowMobileDropdown(true)} onMouseLeave={()=>setShowMobileDropdown(false)} onClick={()=>setShowMobileDropdown(!showMobileDropdown)} className='position-relative'>
            <div style={{width:'100px', left: '5px', bottom:'65px', background:'none'}} className='position-absolute' >
              {
                showMobileDropdown &&
                <Category color={{background: 'lightgrey'}} />
              }
            </div>
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
          <Nav.Link onClick={()=>navigate('/cart')}>
          <div><i className="fa-regular fa-user"></i></div>
          <div>마이페이지</div>
          </Nav.Link>
          <Nav.Link onClick={()=>navigate('/cart')}>
            <div><i className="fa-regular fa-star"></i></div>
            <div>자주 구매</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;