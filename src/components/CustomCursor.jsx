import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) {
    return null; // hide on mobile
  }

  return (
    <>
      <div 
        className="custom-cursor-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          transition: 'transform 0.2s'
        }} 
      />
      <div 
        className="custom-cursor-outline" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
          borderColor: isPointer ? 'rgba(14, 165, 233, 0.5)' : 'rgba(139, 92, 246, 0.5)'
        }} 
      />
      <div 
        className="glow-effect"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)' 
        }} 
      />
    </>
  );
};

export default CustomCursor;
