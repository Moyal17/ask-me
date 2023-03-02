import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, InputGroup, Form} from 'react-bootstrap';
import Input from './Components/Input'
import AnswerBlock from './Components/AnswerBlock'
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="text-center">
            <Col lg={12}>
              <Input/>
            </Col>
            <Col lg={12}>
              <AnswerBlock/>
            </Col>
          </Row>
      </Container>
    </div>
  );
}

export default App;
