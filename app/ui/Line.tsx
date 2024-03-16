import React, { useEffect, useRef, useState } from 'react'

const Line = (number: number) => {
  const [showAnimation, setShowAnimation] = useState(false);

    const numberRef = useRef<number>(0);
  const handleScrollDown = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      numberRef.current += 100;
    } else {
      numberRef.current -= 100;
    }

    if (numberRef.current > number) {
      setShowAnimation(true)
    }
    console.log(numberRef.current)
  };

  useEffect(() => {
    
    const handleWheel = (event: WheelEvent) => {
      handleScrollDown(event);
    };

    document.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);
  useEffect(() => {
    const handleReload = () => {
      // Xử lý logic khi trang được tải lại
      window.location.reload();
    window.scrollTo(0, 0);
      console.log('Trang đã được tải lại');
    };

    window.addEventListener('beforeunload', handleReload);

    return () => {
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);
  return (
      <div className={`${
        showAnimation
          ? 'animate-zoom-in opacity-100 scale-120 bg-[#FA4613] h-[2px] md:w-[16%] w-[36%] mx-auto' 
          : 'opacity-0 scale-0'
      } transform transition-all duration-500`}></div>
  )
}

export default Line
