import { useState } from "react";
import Title from "./title";
import Subtitle from "./subtitle";

export function CustomCard({ title, desc }) {
  const [showBack, setShowBack] = useState(false);

  const flip = () => setShowBack((prev) => !prev);

  return (
    <div
      className="w-60 h-60 perspective cursor-pointer"
      onClick={flip}
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 
          transform-3d
          ${showBack ? "transform-[rotateY(180deg)]" : ""}
        `}
      >
        
        <div className="absolute inset-0 bg-linear-to-tl from-oasis-blue to-oasis-button-light p-8 rounded-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.3)] flex items-center justify-center backface-hidden">
          <Title text={title} />
        </div>


        <div className="absolute inset-0 bg-oasis-button-dark p-8 rounded-[20px] shadow-[3px_3px_5px_rgba(0,0,0,0.3)] flex items-center justify-center transform-[rotateY(180deg)] backface-hidden">
          <Subtitle text={desc} />
        </div>
      </div>
    </div>
  );
}
