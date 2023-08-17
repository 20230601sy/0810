import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    navigate(`/search/${searchInput}`);
  }
  
  return (
    <Form className="my-2" onSubmit={submitHandler}>
      <InputGroup value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}>
        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        <InputGroup.Text id="inputGroup-sizing-default">
          <i className="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default Search;