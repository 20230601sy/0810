// import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/CategoryDropdown.css';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants/categoryList'; // 이 정도는 알고 있는 걸로 하자 ㅡ_ㅡ
import { useDispatch, useSelector } from 'react-redux';
import { setShowItems } from '../redux/store';

const Category = ({color, position}) => {
  const {totalItems} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ButtonGroup vertical className={'Category ' + (showMobileDropdown ? 'd-block' : 'd-none')}>
      {
        CATEGORIES.map(category => {
          return (
            {
              CATEGORIES.map((category) => <Button variant="secondary" size="lg" key={category.id} onClick={()=>navigate(`/category/${category.id}`)}>{category.content}</Button>)
            }
            
            <NavDropdown.Item key={category.id} onClick={()=>{
              dispatch(setShowItems(totalItems.filter(item => item.category === category.category)));
              navigate('/items');
            }}>
              {category.content}
            </NavDropdown.Item>
          );
        })
      }
    </div>
  );
};

export default Category;