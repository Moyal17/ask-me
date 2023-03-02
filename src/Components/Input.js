import { InputGroup, Form} from 'react-bootstrap';
import {apiMethods} from "../services/apiService";


function Input() {
  apiMethods.askQuestion({question: ''})

  return (
    <InputGroup size="lg" className="mb-3">
      <InputGroup.Text id="basic-addon3">
        Ask Me Something
      </InputGroup.Text>
      <Form.Control id="basic-url" aria-describedby="basic-addon3" />
    </InputGroup>
  );
}

export default Input;
