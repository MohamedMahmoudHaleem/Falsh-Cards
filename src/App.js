import { useState } from "react";

const questions = [
  {
    id: 3457,
    question: "What language is React based on ?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps ?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React ?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components ?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory ?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question: "What do we call an input element that is completely synchronised with state ?",
    answer: "Controlled element",
  },
];
export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}

function FlashCards() {
  return (
    <div className="flashcards">
      {questions.map((card) => (
        <Card cardObj={card} key={card.id} />
      ))}
    </div>
  );
}
function Card({ cardObj }) {
  const [select, setSelect] = useState(false);
  function handleSelect() {
    select ? setSelect((s) => false) : setSelect((s) => true);
  }

  return (
    <div onClick={handleSelect} className={select ? "selected" : ""}>
      {select ? cardObj.answer : cardObj.question}
    </div>
  );
}
