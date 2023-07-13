import React, { useState, useEffect } from 'react';

const CharacterAnimation = ({ text }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const charArray = text.split(''); // Split the text into an array of characters

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex < charArray.length) {
        setCharacters(prevChars => [...prevChars, charArray[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Interval duration between each character (adjust as needed)

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [text]);

  return (
    <div>
      {characters.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

export default CharacterAnimation;
