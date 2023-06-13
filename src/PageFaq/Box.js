import React from "react";
import "./Box.css";
interface Props {
  question: string;
  answer: string;
}

const Box = ({ question, answer }: Props) => {
  const accordionData = {
    title: question,
    content: answer,
  };

  const { title, content } = accordionData;

  return (
    <React.Fragment>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>{title}</div>
            <div>+</div>
          </div>
          <div className="accordion-content">{content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Box;
