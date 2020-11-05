import React, { useState } from 'react';
import './SquareName.scss';

const SquareName : React.FunctionComponent = props => {
  var [isMoving, setIsMoving] = useState(false);
  var [displayedText, setDisplayedText] = useState("Kim Anh");
  const animationDuration = 2000;
  var isMovingClassname = isMoving ? "is-moving" : "";

  const onMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isMoving === false) {
      setIsMoving(true);
      if (displayedText === "Kim Anh") {
        setTimeout(() =>setDisplayedText("Ngu yen"), animationDuration / 2);
      }
      else {
        setTimeout(() =>setDisplayedText("Kim Anh"), animationDuration / 2);
      }
      setTimeout(() => { setIsMoving(false) }, animationDuration);
    }
  }

  return (
    <div className={`square-name ${isMovingClassname}`} onMouseEnter={onMouseEnter}>
        <div className={`square-name-text`}>
            <div className={`square-name-text-side`}>
              {displayedText}
            </div>
            <div className={`square-name-cache line`} >
              <div className={`square-name-cache-half one`} style={{ backgroundImage: "url('noise/noise-white.png')"}}></div>
              <div className={`square-name-cache-half two`} style={{ backgroundImage: "url('noise/noise-white.png')"}}></div>
            </div>
            <div className={`square-name-cache column`}>
              <div className={`square-name-cache-half three`} style={{ backgroundImage: "url('noise/noise-white.png')"}}></div>
              <div className={`square-name-cache-half four`} style={{ backgroundImage: "url('noise/noise-white.png')"}}></div>
            </div>
        </div>
    </div>
  )
}
export default SquareName;
