import { useState } from 'react';
import {faq} from '../FaqData/faqData'
import FaqHeading from '../FaqHeading/FaqHeading';
import { v4 as uuidv4 } from 'uuid';

const FaqLogic = () => {
  return ( 
  <section className='faq_section'>
    {faq.map(faqObject => <FaqHeading key={uuidv4()} question={faqObject.question} answer={faqObject.answer} answerLong={faqObject.answerLong}/>)}
  </section>
  );
}

export default FaqLogic;