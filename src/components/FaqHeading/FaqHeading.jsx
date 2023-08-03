import { useState } from 'react';
import './FaqHeading.scss'
import FaqShort from '../FaqShort/FaqShort'
import { v4 as uuidv4 } from 'uuid';


const FaqHeading = (props) => {

const [FaqShortStatus, setFaqShortStatus] = useState(false);

const showFaqShort = () => {
setFaqShortStatus((prevFaqShortStatus) => !prevFaqShortStatus);
}

  return ( 
    <>
        <div className='faq_header'>
          <p>{props.question}</p>
          <button onClick={showFaqShort}>{FaqShortStatus ? '-' : '+'}</button>
        </div>
          {FaqShortStatus && <FaqShort key={uuidv4()} answer={props.answer} answerLong={props.answerLong}/>}
    </>
  );
}

export default FaqHeading;