import {Col} from 'react-bootstrap';

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
