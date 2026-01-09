import { useState } from "react";
import Title from "./title";
import Subtitle from "./subtitle";

export function CustomCard({ title, desc }) {
  const [showBack, setShowBack] = useState(false);

  return (
    <div
      className="w-60 h-60 perspective cursor-pointer"
      onMouseOver={() => setShowBack(true)}
      onMouseLeave={() => setShowBack(false)}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 
          transform-3d
          ${showBack ? "transform-[rotateY(180deg)]" : ""}
        `}
      >
        
        <div className="absolute inset-0 bg-linear-to-tl from-oasis-blue to-oasis-button-light to-90% p-8 rounded-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.3)] flex items-center justify-center backface-hidden">
          <Title text={title} />
        </div>

        <div className="absolute inset-0 bg-oasis-button-dark p-8 rounded-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.3)] flex items-center justify-center transform-[rotateY(180deg)] backface-hidden">
          <Subtitle size={'text-[0.8rem]'} color={'text-white'} text={desc} />
        </div>
      </div>
    </div>
  );
}

export function AdmCard({ cardTitle, cardIcon, cardNumber, cardDate}) {
    
    return (
      <>
      
        <div className="bg-admin-element p-3 min-w-56 min-h-42 rounded-2xl font-oasis-text text-[0.8rem] flex flex-col justify-between items-center">

          <section className="w-full flex flex-row justify-between items-center">
              <p>{cardTitle}</p>
              <img src={cardIcon}/>
          </section>

          <section className="w-full flex flex-col justify-start items-center">
            <p className="text-[3rem] font-semibold">{cardNumber}</p>
            <p>as of {cardDate}</p>
          </section>

        </div>
      </>
    );

}