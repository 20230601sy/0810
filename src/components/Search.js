import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Search = () => {
  return (
    // <div className="align-items-center">
    <div className="my-2">
      <InputGroup>
        <Form.Control aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
        <InputGroup.Text id="inputGroup-sizing-default">
          <i class="fa-solid fa-magnifying-glass"></i>
        </InputGroup.Text>
      </InputGroup>
    </div>
  );
}

export default Search;