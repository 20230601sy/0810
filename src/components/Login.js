import { useSelector } from 'react-redux';
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const { loginState } = useSelector(state=>state);
  const navigate = useNavigate();

  if(!loginState.isLogin) {
    return (
      <div className="login" onClick={()=>navigate('/login')}>
        <i className="fa-solid fa-power-off"></i>{' '}
        <i className="fa-regular fa-user"></i>{' '}
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    );
  } else {
    return (
      <div className="login" onClick={()=>navigate('/login')}>
        <i className="fa-solid fa-power-off"></i>{' '}
        <i className="fa-regular fa-user"></i>{' '}
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    );
  }
}

export default Login;