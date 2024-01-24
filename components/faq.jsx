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
    <div className="mb-[2px] md:mb-4 flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[7px] md:text-lg flex justify-between items-center w-full px-2 py-[2px] md:px-4 md:py-3 text-left text-white md:font-semibold bg-teal/[0.7] rounded-2xl hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal"
      >
        {question}
        <span>{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span> 
      </button>
      {isOpen && (
        <div className="mt-1 md:mt-2 p-2 md:p-4 text-[7px] md:text-lg  rounded-lg text-white">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <div className="bg-teal-200 p-3 md:p-14 rounded-3xl md:bg-white/[0.1] md:m-20  items-center justify-center" id="faq">
      <p className='text-center text-lg md:text-5xl font-bold text-white drop-shadow-[0_0_4px_#E2D6FF] mb-[2px] md:mb-20 '> 
        Curious 🤔 ❓ 
      </p>
      <div className="grid grid-cols-1 mx-10  md:mx-20  md:grid-cols-2 gap-x-2 gap-y-1 md:gap-x-12 md:gap-y-4">
        {faqs.map((faq, index) => (
          <FaqItem key={index} {...faq} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;