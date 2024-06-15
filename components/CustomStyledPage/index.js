import React, { useState } from "react";
import useGenerativeAI from "../generative_ai";
import QuestionForm from "../QuestionForm";
import "./index.css";

const CustomStyledPage = () => {
  const [userInput, setUserInput] = useState("");
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const { mcq, error } = useGenerativeAI(userInput);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleGenerateMCQs = () => {
    setShowQuestionForm(true);
  };

  return (
    <div className="container">
      {!showQuestionForm && (
        <>
          <div className="icon-container">
            <img
              src="https://res.cloudinary.com/dlkovvlud/image/upload/v1710153103/Screenshot_2024-03-02_152204_d5yncr.png"
              alt="Icon"
            />
          </div>
          <h1 className="title">Welcome to QuestBot</h1>
          <div className="button-grid"></div>
          <div className="user-input">
            <input
              className="chat-input"
              placeholder="Enter your text here..."
              type="text"
              value={userInput}
              onChange={handleInputChange}
            />
            <button className="generate-button" onClick={handleGenerateMCQs}>
              Generate MCQs
            </button>
          </div>
        </>
      )}
      {showQuestionForm && <QuestionForm mcq={mcq} />}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CustomStyledPage;
