import React from "react";
import { useSelector } from "react-redux";
import { questions, users } from "../Data";
import Nav from "./Nav";
import Question from "./Question";

export default function Home() {
  const currentUser = useSelector(state => state.currentUser);
  const allQuestions = questions;
  console.log(allQuestions);
  return (
    <div className="container-navigation">
      <Nav />
      <div>
        {allQuestions.map(question => {
          return <Question key={question.id} question={question} />;
        })}
      </div>
    </div>
  );
}
