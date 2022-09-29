import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="container">
      <h2 className="mb-4">FAQ</h2>
      <div>
        <h6 className="faq">Q. How does REACT works?</h6>
        <p className="faq">
          <span className="fw-semibold">A.</span> React works as a component based javascript library.
        </p>
        <h6 className="faq">Q. What are the differences between props and state?</h6>
        <p className="faq">
          <span className="fw-semibold">A.</span> React works as a component based javascript library.
        </p>
        <h6 className="faq">Q. What are the uses of useEffect hook other than loading API data?</h6>
        <p className="faq">
          <span className="fw-semibold">A.</span> React works as a component based javascript library.
        </p>
      </div>
    </div>
  );
};

export default Faq;
