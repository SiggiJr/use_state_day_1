import './FaqLong.scss'

const FaqLong = (props) => {
  return ( 
    <>
    <div className="faq_long">
      <p>{props.answerLong}</p>
    </div>
    </>
  );
}

export default FaqLong;