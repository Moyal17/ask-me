import { InputGroup, Form} from 'react-bootstrap';
import apiService from "../services/apiService";
import {useState} from "react";


function Input(props) {
  apiService.askQuestion({question: ''})
  const [question, setQuestion] = useState(null)

  const setValue = (e) => {
    console.log(e.target.value);
    setQuestion(e.target.value)
  }

  return (
    <InputGroup size="lg" className="mb-3">
      <InputGroup.Text id="basic-addon3">
        Ask Me Something
      </InputGroup.Text>
      <Form.Control id="basic-url" aria-describedby="basic-addon3"  onChange={(e) => { setValue(e)}}/>
    </InputGroup>
  );
}

export default Input;
