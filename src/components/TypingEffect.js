import React, { useState, useEffect, useRef } from "react";

const TypingEffect = ({ text, speed=100 }) => {
  const [displayText, setDisplayText] = useState("");
  const currentIndexRef = useRef(0);
  const displayTextRef = useRef("");
  const [showCursor, setShowCursor] = useState(true);
  let cursorIntervalId = null
  useEffect(() => {
    currentIndexRef.current = 0;
    displayTextRef.current = "";
  }, [text]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        displayTextRef.current += text[currentIndexRef.current];
        setDisplayText(displayTextRef.current);
        currentIndexRef.current += 1;
      } else {
        clearInterval(intervalId);
        setShowCursor(false);
        clearInterval(cursorIntervalId)
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text]);



  useEffect(() => {
    if (currentIndexRef.current === text.length) {
      setShowCursor(false);
      clearInterval(cursorIntervalId)
    } else {
      clearInterval(cursorIntervalId)
       cursorIntervalId = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
      }, speed);

      return () => clearInterval(cursorIntervalId);
    }
  }, [currentIndexRef.current, text.length]);

  return (
    <p>
     <span className=" mr-2"> {displayText}</span>
      {showCursor && <span className="cursor">|</span>}
    </p>
  );
};

export default TypingEffect;
