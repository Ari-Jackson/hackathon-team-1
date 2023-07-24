import  { useState, useEffect } from 'react';
import Parent1 from '../Images/Parent1.png';
import Parent2 from '../Images/Parent2.png';
import Parent3 from '../Images/Parent3.png';
import Parent4 from '../Images/Parent4.png';
import Parent5 from '../Images/Parent5.png';

const DisplayParents = () => {
  const imagesArray = [Parent1, Parent2, Parent3, Parent4, Parent5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imagesArray.length);
      setCurrentImageIndex(randomIndex);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [imagesArray]);

  const currentImage = imagesArray[currentImageIndex];

  return (
    <div>
      <img src={currentImage} alt='parents' />
    </div>
  );
};

export default DisplayParents;
