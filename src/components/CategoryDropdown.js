import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/CategoryDropdown.css';
import { useNavigate } from 'react-router-dom';
import { categories } from '../constants/categoryList'; // 이 정도는 알고 있는 걸로 하자 ㅡ_ㅡ

const CategoryDropdown = () => {
  const navigate = useNavigate();

  return (
    <NavDropdown NavDropdown title={<i class="fa-solid fa-bars">&nbsp;&nbsp;카테고리</i>} className='d-none d-md-block header-dropdown-category'>
    {/* <NavDropdown NavDropdown id="nav-dropdown-dark-example" title={<i class="fa-solid fa-bars">&nbsp;&nbsp;카테고리</i>} menuVariant="dark" className='none-display-on-mobile'> */}
      {/* <NavDropdown.Item onClick={()=>navigate('/cateitemlist/:listID')}>Action</NavDropdown.Item> */}
      {/* <NavDropdown.Item onClick={()=>navigate('/')}>Another action</NavDropdown.Item> */}
      {/* <NavDropdown.Item onClick={()=>navigate('/')}>Something</NavDropdown.Item> */}
      {/* <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      {
        categories.map((category) => <NavDropdown.Item key={category.id} onClick={()=>navigate(`/category/${category.id}`)}>{category.content}</NavDropdown.Item>)
      }
    </NavDropdown>
  );
};

export default CategoryDropdown;