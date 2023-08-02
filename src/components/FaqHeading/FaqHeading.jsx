import { useState } from 'react';
import './FaqHeading.scss'
import FaqShort from '../FaqShort/FaqShort'

const FaqHeading = () => {

const [FaqShortStatus, setFaqShortStatus] = useState(false);

const showFaqShort = () => {
setFaqShortStatus((prevFaqShortStatus) => !prevFaqShortStatus);
}

  return ( 
    <>
      <section className="faq_section">
        <div className='faq_header'>
          <p>Why is React great?</p>
          <button onClick={showFaqShort}>{FaqShortStatus ? '-' : '+'}</button>
        </div>
          {FaqShortStatus && <FaqShort/>}
      </section>
    </>
  );
}

export default FaqHeading;