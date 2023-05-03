import { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = ({question, answer}) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon">
          {
            isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
          }
        </button>
      </div>
      <p>{answer}</p>
    </article>
  )
}

export default FAQ