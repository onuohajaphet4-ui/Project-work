import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ end, duration = 2000, prefix = "", suffix = "" }) => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const increment = end / (duration / 16); 
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(handle);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(handle);
  }, [visible, end, duration]);

 const formatNumber = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toFixed(0);
};

  return (
    <span ref={ref}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;