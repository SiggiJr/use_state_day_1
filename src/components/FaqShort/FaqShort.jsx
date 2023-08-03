import './FaqShort.scss'
import FaqLong from '../FaqLong/FaqLong';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const FaqShort = (props) => {

  const [faqLongStatus, setFaqLongStatus] = useState(false)

  const showFaqLong = () => {
    setFaqLongStatus(prevFaqLongStatus => !prevFaqLongStatus)
  }

  return ( 
    <>
      <div className="faq_short">
        <p>{props.answer}</p>
        <button onClick={showFaqLong}>{faqLongStatus ? '-' : '+'}</button>
      </div>
          {faqLongStatus && <FaqLong key={uuidv4()} answerLong={props.answerLong}/>}
    </>
  );
}

export default FaqShort;