import React from "react";

export default function Question(props) {
  console.log("Props: ", props);
  const question = props;
  console.log(question.question.optionOne.text);
  return (
    <div className="container-question">
      <div className="option-one">
        {question.question.optionOne.text}
      </div>
      <div>
          <span>
              
          </span>
      </div>
      <div className="option-two">
        {question.question.optionTwo.text}
      </div>
    </div>
  );
}
