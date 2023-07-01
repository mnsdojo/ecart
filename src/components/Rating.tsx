import React from "react";

import { AiFillStar } from "react-icons/ai";
function Rating({ stars }: { stars: number }) {
  return (
    <div className="flex items-center -ml-1">
      {Array.from({ length: 4 }).map((_, index) => (
        <>
          <AiFillStar
            key={index}
            className="w-6 h-6 flex-shrink-0 text-yellow-600"
          />
        </>
      ))}
    </div>
  );
}

export default Rating;
