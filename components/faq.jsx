import React, { useState } from 'react';

// FAQ items
const faqs = [
  { question: "Do I need any coding experience?", answer: "Answer here" },
  { question: "Question 2", answer: "Answer 2" },
  { question: "Question 3", answer: "Answer 3" },
  { question: "Question 4", answer: "Answer 4" },
  { question: "Question 5", answer: "Answer 5" },
  { question: "Question 6", answer: "Answer 6" }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">


      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 text-left text-black bg-teal-300 rounded-lg hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-600"
      >


        {question}
        <span>{isOpen ? '▼' : '▶'}</span> // icons


      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-teal-500 rounded-lg text-white"> // will figure out how to fill box with teal
          {answer}
        </div>
      )}
    </div>
  );
};

// defining faq section
const FaqSection = () => {
  return (
    <div className="bg-teal-200 p-8 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
