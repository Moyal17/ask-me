import {InputGroup, Form, Col} from 'react-bootstrap';
import Input from "./Input";

function AnswerBlock(props) {
  return (
   <div className="AnswerBlock">
     <Col lg={12}>
       <p>{props.answer}</p>
     </Col>
     <Col lg={12}>
       <p>{props.confidence}</p>
     </Col>
   </div>
  );
}

export default AnswerBlock;
