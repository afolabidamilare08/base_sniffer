
'use client'
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Card from "@/components/Card";

interface FAQProps {
  faq: {
    question: string;
    answer: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const openAnswer = () => {
    setShowAnswer(true);
  };

  const closeAnswer = () => {
    setShowAnswer(false);
  };

  return (
    <Card
      className="faq"
      onClick={handleAnswer}
      onMouseOver={openAnswer}
      onMouseOut={closeAnswer}
    >
      <div>
        <h5 className="faq__question">{faq.question}</h5>
        <button className="faq__icon">
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p className="faq__answer">{faq.answer}</p>}
    </Card>
  );
};

export default FAQ;
