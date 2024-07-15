// 1. What is React ?
// React is a JavaScript library created by Facebook
// React is a User Interface(UI) library
// React is a tool for building UI components

//2. What are the key features of React ?
// 1. JSX(JavaScript Syntax Extension):
// JSX is a combination of HTML and JavaScript.You can embed JavaScript objects inside the HTML elements.JSX is not supported by the browsers, as a result, Babel compiler transcompile the code into JavaScript code.JSX makes codes easy and understandable.It is easy to learn if you know HTML and JavaScript.

// 2. Virtual DOM:
// DOM stands for Document Object Model.It is the most important part of the web as it divides into modules and executes the code.Usually, JavaScript Frameworks updates the whole DOM at once, which makes the web application slow.But react uses virtual DOM which is an exact copy of real DOM.Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM.
//  In the above - shown figure, when the whole virtual DOM has updated there is a change in the child components.So, now DOM finds the difference and updates only the changed part.

// 3. One - way Data Binding:
// One - way data binding, the name itself says that it is a one - direction flow.The data in react flows only in one direction i.e.the data is transferred from top to bottom i.e.from parent components to child components.The properties(props) in the child component cannot return the data to its parent component but it can have communication with the parent components to modify the states according to the provided inputs.

// 4. Components:
// React.js divides the web page into multiple components as it is component - based.Each component is a part of the UI design which has its own logic and design as shown in the below image.So the component logic which is written in JavaScript makes it easy and run faster and can be reusable.

// 3. What are React components ? Explain the difference between functional and class components.
// Answer: React components are the building blocks of React applications that encapsulate a part of the user interface.Components can be either functional or class-based:

// Functional Components: These are JavaScript functions that receive props as an argument and return JSX elements.They are simpler and easier to understand, and can use React hooks for state and side effects since React 16.8.

//     Example:
// function MyComponent(props) {
//     return <div>Hello, {props.name}!</div>;
// }

// Class Components: These are ES6 classes that extend from React.Component and have their own internal state.They have a lifecycle and were the traditional way of creating components before hooks were introduced.

//Example:
// class MyComponent extends React.Component {
//     render() {
//         return <div>Hello, {this.props.name}!</div>;
//     }
// }

// 4. How do you handle forms in React ?
// Answer : Forms in React are handled by managing form input elements through state and handling form submission events.Common practices include:

// Using controlled components where form data is controlled by React state.
// Handling input change events(onChange) to update state.
// Handling form submission(onSubmit) to process form data.
// Example of a controlled form component:


// import React, { useState } from 'react';

// function LoginForm() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Process form data (e.g., submit to backend)
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//             />
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//             />
//             <button type="submit">Login</button>
//         </form>
//     );
// }

// 5. What are React hooks ? Provide examples of commonly used hooks.
//     Answer: React hooks are functions that allow functional components to manage state, perform side effects, and tap into React lifecycle features.Some commonly used hooks include:

// useState: Manages local state in functional components.
//     useEffect: Performs side effects in functional components(similar to componentDidMount, componentDidUpdate, componentWillUnmount lifecycle methods).
//         useContext: Accesses context within functional components.
//             useReducer: Alternative to useState for managing more complex state logic.
// Example of useState and useEffect hooks:


// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         // Update the document title using the browser API
//         document.title = `You clicked ${count} times`;
//     }, [count]); // Only re-run the effect if count changes

//     return (
//         <div>
//             <p>You clicked {count} times</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click me
//             </button>
//         </div>
//     );
// }

// 6. What are props in React ?
//     Props(short for properties) are inputs to a React component.They are passed from parent to child components and are read - only.Props allow you to customize a component when it is created and make components reusable.

//         Example:
// // Parent Component
// function App() {
//     return <ChildComponent name="John" />;
// }

// // Child Component
// function ChildComponent(props) {
//     return <h1>Hello, {props.name}</h1>;
// }

// 7. What are keys in React and why are they important ?
//     Keys are special string attributes that provide a way for React to identify which items have changed, are added, or are removed in lists of elements.They help React identify which components have been changed, added, or removed efficiently.Keys should be unique among sibling elements but don’t need to be globally unique.

//         Example:


// const listItems = todos.map(todo => (
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// ));

// 8. What are higher - order components(HOCs) in React ?
//     Higher - order components are functions that take a component and return a new component with enhanced functionality.They allow code reuse, logic abstraction, and can be used for tasks like state management, prop manipulation, and rendering.

//         Example:


// function withLogger(Component) {
//     return function WrappedComponent(props) {
//         console.log(`Rendering ${Component.name} with props:`, props);
//         return <Component {...props} />;
//     };
// }

// const EnhancedComponent = withLogger(MyComponent);

// 9.Explain the React lifecycle methods.
// In class components, React provides several lifecycle methods that allow you to perform actions at specific points in the component's lifecycle, such as when it is mounted or updated. The lifecycle methods include componentDidMount, componentDidUpdate, componentWillUnmount, etc. These methods are used for tasks like fetching data, subscribing to events, or cleaning up resources.

// Example:


// class MyComponent extends React.Component {
//     componentDidMount() {
//         console.log('Component did mount');
//         // Perform initialization tasks here
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log('Component did update');
//         // Perform state comparison or other tasks here
//     }

//     componentWillUnmount() {
//         console.log('Component will unmount');
//         // Clean up resources here
//     }

//     render() {
//         return <div>{this.props.message}</div>;
//     }
// }

// 14. How does React Router work and what are its main components ?
//     React Router is a popular library for routing in React applications.It enables navigation between different components or pages in a React application.The main components of React Router are:

// BrowserRouter: Uses HTML5 history API for navigation.
//     Route: Renders UI when the path matches the current URL.
//         Link: Provides declarative, accessible navigation around your application.
//             Switch: Renders the first child < Route > or < Redirect > that matches the location.
//                 Example:


// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About</Link></li>
//                     </ul>
//                 </nav>

//                 <Switch>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }

// What are controlled and uncontrolled components in React ?
//     Controlled components: These components take their current value through props and notify changes through callbacks like onChange.The parent component has full control over the value of the input or form element.
//         Example:


// class ControlledInput extends React.Component {
//     state = {
//         value: ''
//     };

//     handleChange = (event) => {
//         this.setState({ value: event.target.value });
//     };

//     render() {
//         return (
//             <input
//                 type="text"
//                 value={this.state.value}
//                 onChange={this.handleChange}
//             />
//         );
//     }
// }
// Uncontrolled components: These components store their own state internally, and you query the DOM using a ref to find its current value when needed.They are often used in forms where you want to manage form data without controlling every input field.
//     Example:


// function UncontrolledInput() {
//     const inputRef = useRef(null);

//     const handleClick = () => {
//         alert(`Input value: ${inputRef.current.value}`);
//     };

//     return (
//         <>
//             <input type="text" ref={inputRef} />
//             <button onClick={handleClick}>Show Value</button>
//         </>
//     );
// }