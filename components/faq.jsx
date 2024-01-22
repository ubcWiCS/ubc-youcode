import React, { useState } from 'react';
import { MdExpandLess } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';

const faqs = [
  { question: "Why wellness?", answer: "We advocate for a symbiotic relationship between technology and wellbeing. Technology represents powerful tool that can promote better health, with individuals in the tech industry equally leading healthy lifestyles as they pursue their professional endeavors." },
  { question: "Do I need any coding experience?", answer: "youCode aims to provide an equal opportunity to beginner and advanced level students to engage with their technical abilities. This is an environment for learning, growth, and proper experience. Relevant coursework would be encouraged. We offer a beginner stream and advanced stream for students with corresponding levels of experience. If you have little to no experience, please consider registering as a participant in the beginner stream. " },
  { question: "Who can participate?", answer: "We welcome participants of any gender from all majors and faculties at UBC. You must present a valid UBC student ID to participate at youCode.  " },
  { question: "How do I register?", answer: "Keep your eye out for registration details to come in March!   " },
  { question: "Should I register in a team or can I participate as an individual?", answer: "All interested youCode participants must register individually. You will be notified by email if you were selected to participate at youCode. After your participation is confirmed, you will be able to form teams.   " },
  { question: "Who will be on the judging panel?  ", answer: "The judging panel will consist of representatives of our Gold and Platinum sponsors. Please refer to our sponsors list at the bottom of this page for more information.  " },
  { question: "How will this event be held?  ", answer: "This event is entirely in-person on the UBC Vancouver campus and will be held across two days. Participants will not be required to stay overnight as everyone will reconvene the morning of Day 2 of the hackathon.  " },
  { question: "Have more questions?  ", answer: "For more participant enquiries and partnership opportunities, please refer to our social media below or email us at ubcyoucode@gmail.com!” Participants, feel free to reach out to us with your questions.  " }
];


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-4 py-2 text-left text-dark-green bg-teal rounded-lg hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal"
      >
        {question}
        <span>{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span> 
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-teal rounded-lg text-dark-green">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="bg-teal-200 p-8 rounded-xl shadow-md" id="faq">
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