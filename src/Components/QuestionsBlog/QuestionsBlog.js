import React from "react";
import "./QuestionsBlog.css";

const QuestionsBlog = () => {
  return (
    <div className="blog-area">
      <div className="answer-container">
        <h2>How react works?</h2>
        <p>
          Everything in React JS is a component. React has its own virtual DOM
          that renders the data by using ReactDOM.render() function. Basically,
          virtual DOM can track the changes by comparing them with the actual
          DOM with the help of diff algorithm. The JSX (JavaScript XML) is used
          to create react elements. A component in react is a class or a
          function that returns a tree of elements. If we want to send data from
          one component to another then we have to use props. In the props
          value, there is also a property named key that helps React to track
          which unique item is changed or modified. The data flow in React is
          unidirectional. State hook in React is used to update the data and the
          update of the state is asynchronous.
        </p>
      </div>

      <div className="answer-container">
        <h2>What are the differences between Props and State?</h2>
        <p>
          State and Props both are the core functionalities of React JS. State
          is a special function in React JS that is used to store data of the
          current page and props is used to pass data to a child component.
          Props are immutable and read-only which means we cannot change the
          value of props property. On the other hand, state value can be changed
          in the top-level component by using this.setState() and state changes
          can be asynchronous. We can make components reusable by using props
          but state cannot make components reusable. A stateless component can
          have props but a stateless component cannot have a state.
        </p>
      </div>
    </div>
  );
};

export default QuestionsBlog;
