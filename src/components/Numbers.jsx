import React, { useRef, useState } from "react";
import CountUp from "react-countup";
const Numbers = () => {
  const numbersRef = useRef(null);
  const [count, setCount] = useState(false);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY >= numbersRef.current.offsetTop - 850) {
      setCount(true);
    }
  });
  return (
    <section className="numbers" ref={numbersRef}>
      <div className="container">
        <div className="numbersWrapper">
          <div className="number">
            <h2>
              {count && <CountUp start={0} end={255} duration={2} delay={0} />}
            </h2>
            <p>Total Projects</p>
          </div>
          <div className="number">
            <h2>
              {count && <CountUp start={0} end={244} duration={2} delay={0} />}
            </h2>
            <p>On Going Projects</p>
          </div>
          <div className="number">
            <h2>
              {count && <CountUp start={0} end={95} duration={2} delay={0} />}%
            </h2>
            <p>Job Success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
