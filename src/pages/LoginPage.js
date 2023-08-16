import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginState } from '../redux/store';
import { useState } from 'react';
import { AUTHORITIES } from '../constants/authList';
import { BG_COLOR } from '../constants/color';
const LoginPage = () => {
  const [input, setInput] = useState({id:'', pwd:''});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const submitHandler = () => {
    let target = AUTHORITIES.find(auth => auth.loginIdPwd.id === input.id && auth.loginIdPwd.pwd === input.pwd);
    if (target && input.id) {
      dispatch(setLoginState(target.loginState));
      navigate('/');
    } else {
      setInput({id:'', pwd:''});
      navigate('/login');
    }
  };

  return (
    <Container className='mt-5'>
      <Form action="" method="post">
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalID">
          <Col md={2} className='d-none d-md-block'></Col>
          <Form.Label column xs={3} md={2}>
            ID
          </Form.Label>
          <Col xs={9} md={6}>
            <Form.Control placeholder="ID" name='id' value={input.id} onChange={changeHandler}/>
          </Col>
          <Col md={2} className='d-none d-md-block'></Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
          <Col md={2} className='d-none d-md-block'></Col>
          <Form.Label column xs={3} md={2}>
            Password
          </Form.Label>
          <Col xs={9} md={6}>
            <Form.Control type="password" placeholder="Password" name='pwd' value={input.pwd} onChange={changeHandler} />
          </Col>
          <Col md={2} className='d-none d-md-block'></Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5" controlId="formHorizontalCheck">
          <Col className = 'd-flex align-items-center' xs={6} md={{span: 3, offset : 4}}>
            <Form.Check label="Remember me" />
          </Col>
          <Col xs={3} md={1}></Col>
          <Col xs={3} md={2}>
            {/* <Button type="submit" onClick={submitHandler}>Sign in</Button> */}
            <Button style={{...BG_COLOR}}onClick={submitHandler}>Sign in</Button>
          </Col>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default LoginPage;