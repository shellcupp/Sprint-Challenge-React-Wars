# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

There are many frameworks and libraries out there trying to accomplish the same thing: provide developers with the ability to build large scale applications effectively; React is one of them. React JS is a user interface component library built by facebook to help solve some of the major problems the team was facing when dealing with complex state. It is not a framework but only a library that does one thing really well... render UI. Scalable, reusable and fun to write. Everything is a component. Unoponionated when it comes to how you manage your data meaning React doesn’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React is Declarative which makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable and easier to debug.

1. What does it mean to think in react?

https://reactjs.org/docs/thinking-in-react.html
Think threw the app before yu=ou build it.
-start with a mock
-break the UI into a compoent hierarchy
-build a static version in react
-identify the minimal (but complete) representation of UI state
-identify where you state should live
-add inverse data flow

1. Describe state.


React state is an object that determines how a component renders and behaves. This is what allows a react component to be interactive. State can also be mutated on the fly, causing a re-render of that component.

1. Describe props.

When we want to pass information held on state inside one component to another component, we pass them as props.Important thing to remember is that we never make changes to props data - props are read-only.This helps ensure that our data flow remains clean and organized. This way, we know exactly where changes are made to our application. And if something goes wrong, we can find the issue and fix it.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?


A side effect is anything that affects something outside the scope of the function being executed. Fetching data from an API, timers, logging, and manually manipulating the DOM are all examples of side effects. 