import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="container">
      <h2 className="mb-4">FAQ</h2>
      <div>
        <h6 className="faq">Q. How does REACT works?</h6>
        <p className="faq">
          <span className="fw-semibold">A.</span> React is a popular JavaScript library. It has made front-end development so easy. React divides the
          UI into isolated reusable pieces of code which are called components. Using component becomes very efficient as they accepts arbitary inputs
          called properties or props. React uses a virtual DOM for comparing changes in the UI elements. Instead of rendering the whole UI everytime
          it finds the particular area where the change happened, then only re-render that area. That's why it is so fast.
        </p>
        <h6 className="faq">Q. What are the differences between props and state?</h6>
        <p className="faq">
          <span className="fw-semibold">A. </span>Props and State are two main things we use to share or pass data. But they are not same. Props is
          used to pass data from one component to another where state can pass data within the component only. If we need to send state to other
          component, we must send it as a props. Props cannot be modified as it is immutable, but state can be modified as it is mutable. Props are
          read only but state can be both read and write.
        </p>
        <h6 className="faq">Q. What are the uses of useEffect hook other than loading API data?</h6>
        <p className="faq">
          <span className="fw-semibold">A. </span> We can use the useEffect hook to handle side effects in our components. Other than fetching data,
          we can directly update the DOM and add timers with useEffect hook. We can use settmeout with this. To perform asynchronous operation,
          useEffect is needed. Rather, if we want to do something that is dependant on other variable or change of state, we must use useEffect. In
          brie, side effect that runs after every render, side effect runs only once after initial render, after state value changes, after props
          value change all can be managed by useEffect hook.
        </p>
      </div>
    </div>
  );
};

export default Faq;
