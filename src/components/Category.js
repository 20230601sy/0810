// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../constants/categoryList'; // 이 정도는 알고 있는 걸로 하자 ㅡ_ㅡ
import { useDispatch, useSelector } from 'react-redux';
import { setShowItems } from '../redux/store';
import { Button, ButtonGroup } from 'react-bootstrap';

const Category = ({color}) => {
  const {totalItems} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <ButtonGroup vertical className={'Category d-flex justify-content-center'} style={{background:'none'}}>
      {
        CATEGORIES.map(category => {
          return (
            <Button className='Category-Button' style={{...color, color:'rgba(255, 255, 255, 0.55)', fontSize:'16px', height:'42px', border:'none'}} size="lg" key={category.id} onClick={() => {
              dispatch(setShowItems(totalItems.filter(item => item.category === category.category)));
              navigate('/items');
            }}>
              {category.content}
            </Button>
          );
        })
      }
    </ButtonGroup>
  );
}

export default Category;