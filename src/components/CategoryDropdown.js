import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/CategoryDropdown.css';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants/categoryList'; // 이 정도는 알고 있는 걸로 하자 ㅡ_ㅡ
import { useDispatch, useSelector } from 'react-redux';
import { setShowItems } from '../redux/store';

const CategoryDropdown = () => {
  const {totalItems} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavDropdown NavDropdown title={<i className="fa-solid fa-bars">&nbsp;&nbsp;카테고리</i>} className='d-none d-md-block header-dropdown-category'>
      {
        CATEGORIES.map(category => {
          return (
            <NavDropdown.Item key={category.id} onClick={()=>{
              dispatch(setShowItems(totalItems.filter(item => item.category === category.category)));
              navigate('/items');
            }}>
              {category.content}
            </NavDropdown.Item>
          );
        })
      }
    </NavDropdown>
  );
};

export default CategoryDropdown;