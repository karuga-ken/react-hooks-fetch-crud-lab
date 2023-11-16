import React, { useEffect, useState } from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;


  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const [post, setPost] = useState({})
  const handleDelete = () =>{
    useEffect(()=>{
      fetch(`https://localhost:5001/api/questions`, 
      {method:'DELETE'})
      .then(() => setPost())
    }, [])

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}}

export default QuestionItem;
