import './FaqShort.scss'
import FaqLong from '../FaqLong/FaqLong';
import { useState } from 'react';

const FaqShort = () => {

  const [faqLongStatus, setFaqLongStatus] = useState(false)

  const showFaqLong = () => {
    setFaqLongStatus(prevFaqLongStatus => !prevFaqLongStatus)
  }

  return ( 
    <>
      <div className="faq_short">
        <p>Fast Learning Curve</p>
        <button onClick={showFaqLong}>{faqLongStatus ? '-' : '+'}</button>
      </div>
          {faqLongStatus && <FaqLong/>}
    </>
  );
}

export default FaqShort;