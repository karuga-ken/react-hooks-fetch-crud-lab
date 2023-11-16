import React from "react";
import QuestionItem from "./QuestionItem";
import { useState, useEffect } from "react";

function QuestionList() {
  const [question, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((data) => {
      setQuestions(data);
    }, [])
  })
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {question.map((questions) => (
          <QuestionItem key={questions.id} question={questions}/>
      ))}
      </ul>
    </section>
  );
}

export default QuestionList;
