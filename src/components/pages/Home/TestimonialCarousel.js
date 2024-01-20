import React, { useState,useEffect,useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight} from "@fortawesome/free-solid-svg-icons";


const TestimonialCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
  
    const testimonials = [
      
      {
        id: 2,
      
        content:
          "Dr. Somnay communicates well,and explains everything in detail. She is definitely knowledgeable in her area of expertise. Dr. Somnay did not rush me through any of my questions and she listened to all my concerns. She is my new regular GI doctor!.",
      },
      {
        id: 3,
      
        content:
          "She is a very good and caring doctor, it is always a pleasure to see her. I highly recommend her!.",
      },
      {
        id: 4,
      
        content:
          "Dr. Somnay was very friendly to me and took care in explaining to me my situation and what needed to be done. She did everything in her power to help me and make me feel as comfortable as possible..",
      },
      {
        id: 5,
      
        content:
          "Dr Somnay remove a stent in my bile duct. She has excellent medical skills and compassionate for her patients. She is a truly humble person. I am very fortunate that she’s is my doctor.",
      },
      {
        id: 6,
      
        content:
          "This doctor is so polite and patient. She puts you right at ease from the very first appointment . On follow up visits she takes the time to explain the situation and advises the best solution.",
      },
     
    ];
  
    const prev = () => {
      setActiveIndex((index) => (index === 0 ? testimonials.length - 1 : index - 1));
    };
  
    const next = () => {
      setActiveIndex((index) => (index === testimonials.length - 1 ? 0 : index + 1));
    };
  
    useEffect(() => {
      const container = containerRef.current;
  
      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          prev();
        } else if (event.key === "ArrowRight") {
          next();
        }
      };
  
    //   const handleBlur = () => {
    //     container.focus();
    //   };
  
      container.addEventListener("keydown", handleKeyDown);
    //   container.addEventListener("blur", handleBlur);
      // container.focus();

      return () => {
        container.removeEventListener("keydown", handleKeyDown);
        // container.removeEventListener("blur", handleBlur);
      };
    }, [containerRef]);



  return (
    <div className="w-full bg-skin text-center  outline-none py-20 px-5 lg:px-10 " ref={containerRef}
    tabIndex="0">
        <h1 className="text-brown text-5xl font-medium ">Testimonials</h1>
        <h1 className="my-4 tracking-wide text-brown font-medium">
          SOME OF OUR TRUSTED REVIEWS
        </h1>
      <div className="flex justify-center md:m-[3%] lg:mx-[10%]">      
        <button className="text-brown hover:text-brown focus:outline-none mr-auto" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className=" mx-10 md:mx-16 lg:mx-28">
        <FontAwesomeIcon
          className="text-7xl text-brown my-4"
          icon={faQuoteRight}
        />
          <p className="text-brown italic">{testimonials[activeIndex].content}</p>
          <h3 className="text-xl text-brown font-bold m-3">{testimonials[activeIndex].name}</h3>
        </div>
        <button className="text-brown hover:text-brown focus:outline-none ml-auto" onClick={next}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <div key={index} className={`h-3 w-3 rounded-full bg-brown opacity-50 mx-2 mt-auto mb-4 ${index === activeIndex && 'opacity-100'}`} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
