import React, { useState } from 'react';
import { MdExpandLess } from 'react-icons/md';
import { MdExpandMore } from 'react-icons/md';

const faqs = [
  { question: "Why wellness?", answer: "We advocate for a symbiotic relationship between technology and wellbeing. Technology represents powerful tool that can promote better health, with individuals in the tech industry equally leading healthy lifestyles as they pursue their professional endeavors." },
  { question: "Do I need any coding experience?", answer: "youCode aims to provide an equal opportunity to beginner and advanced level students to engage with their technical abilities. This is an environment for learning, growth, and proper experience. We offer a beginner stream and advanced stream for students with corresponding levels of experience and relevant coursework. If you have little to no experience, please consider registering as a participant in the beginner stream. " },
  { question: "Who can participate?", answer: "We welcome participants of any gender from all majors and faculties at UBC. You must present a valid UBC student ID to participate at youCode.  " },
  { question: "How do I register?", answer: "Keep your eye out for registration details to come in March!   " },
  { question: "Do I have to register with a team?", answer: "All interested youCode participants must register individually. You will be notified by email if you were selected to participate at youCode. After your participation is confirmed, you will be able to form teams.   " },
  { question: "Who will be on the judging panel?  ", answer: "The judging panel will consist of representatives of our Gold and Platinum sponsors. Please refer to our sponsors list at the bottom of this page for more information.  " },
  { question: "How will this event be held?  ", answer: "This event is entirely in-person on the UBC Vancouver campus and will be held across two days. Participants will not be required to stay overnight as everyone will reconvene the morning of Day 2 of the hackathon.  " },
  { question: "Have more questions?  ", answer: "For more participant enquiries and partnership opportunities, please refer to our social media below or email us at ubcyoucode@gmail.com! Participants, feel free to reach out to us with your questions.  " }
];


const FaqItem = ({ question, answer, isOpen, onClick }) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-[6px] md:mb-4 flex flex-col">
      <button
        onClick={onClick}
        className="text-[7px] md:text-xs lg:text-lg flex justify-between items-center w-full px-4 py-[2px] md:px-6  md:py-[5px] lg:py-3 text-left text-white md:font-semibold bg-teal/[0.7] rounded-2xl hover:bg-teal focus:outline-none focus:ring-2 focus:ring-teal"
      >
        {question}
        <span>{isOpen ? <MdExpandLess /> : <MdExpandMore />}</span> 
      </button>
      {isOpen && (
        <div className="mt-1 lg:mt-2 p-2 md:p-4 text-[7px] md:text-xs lg:text-lg font-bold rounded-lg text-white">
          {answer}
        </div>
      )}
    </div>
  );
};


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleItemClick = index => {
    setOpenIndex(index === openIndex ? null : index);
  };

    // fixing spacing on other side of dropdown and using flex instead
    const half = Math.ceil(faqs.length / 2);
    const firstHalfFaqs = faqs.slice(0, half);
    const secondHalfFaqs = faqs.slice(half);

    return (
      <div className="bg-teal-200 p-3 md:p-6 lg:p-14 md:mt-20 lg:mt-40 rounded-3xl lg:bg-white/[0.1] my-10 mx-auto max-w-6xl" id="faq">
        <p className='text-center text-xs md:text-3xl lg:text-5xl font-bold text-white mb-[8px] md:mb-7 lg:mb-20'> 
          FAQ
        </p>
        <div className="flex flex-wrap justify-between mx-10 lg:mx-20 gap-x-2 gap-y-1 md:gap-x-5 lg:gap-x-12 md:gap-y-1 lg:gap-y-4">
          <div className="flex-1"> 
            {firstHalfFaqs.map((faq, index) => (
              <FaqItem 
                key={index}
                {...faq}
                isOpen={openIndex === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>


          <div className="flex-1">
            {secondHalfFaqs.map((faq, index) => (
              <FaqItem 
                key={index + half} // using half to prevent more than one box from opening at once
                {...faq}
                isOpen={openIndex === index + half}
                onClick={() => handleItemClick(index + half)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };



export default FaqSection;