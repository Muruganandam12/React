/*import User from "./User";
// Props
function App(){
  return <h1>App</h1>
 react fragement 
 return (
  <> 
  <h1>Welcome</h1>
  <h2>to my</h2>
  <h3>Website</h3>
  </>
 );
 const userData={
  name:"logu",
  age:22,
  phone:1234567890,
  email:"logu@gmail.com",

 }
 return (
  <div>
    <h1>Hello World</h1>
    <User
      name={userData.name}
      age={userData.age}
      phone={userData.phone}
      email={userData.email}
    
    />
  </div>
 );
}
function Hello(){
  return <h1>Hello World</h1>
}

export {Hello,App}
export default App; 
*/
//  useState Hook

/*import React, { useState } from 'react';

const App = () => {
  const [num, setNum] = useState(1);
  let x = 1;

  const handleAdd = () => {
    //x = x + 1; // x++; x+=1
    //console.log("x", x);
    //setNum(2);
    setNum((prevNum) => {
      return prevNum + 1;
    });
  };

  //console.log(num);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default App;*/
// useEffect Hook
/*import React, { useEffect, useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState(100);
  const [num2, setNum2] = useState(1000);

  useEffect(() => {
    setNum1(200);
    console.log("from useEffect");

    return () => {
      setNum1(100);
      console.log("memory cleaned");
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleAddNum1 = () => {
    setNum1((curr) => curr + 1);
  };

  const handleAddNum2 = () => {
    setNum2((curr) => curr + 1);
  };

  return (
    <div>
      <h1>{num1}</h1>
      <button onClick={handleAddNum1}>Add</button>
      <h1>{num2}</h1>
      <button onClick={handleAddNum2}>Add</button>
    </div>
  );
};

export default App;*/

// useRef Hook

// import React, { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [input, setInput] = useState("");
//   const inputRef = useRef();

//   console.log("Getting rendered");

//   const display = () => {
//     console.log(inputRef.current.value); // Access the value property
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <h1>Input</h1>
//       <input
//         ref={inputRef}
//         type="text"
//         value={input}
//         onChange={(event) => setInput(event.target.value)}
//       />
//       <p>My name is {input}</p>
//       <p>My name is {inputRef.current ? inputRef.current.value : ""}</p>
//       <button onClick={display}>Show input</button>
//     </div>
//   );
// };

//export default App;

// useMemo
// import React from "react";
// import { useEffect } from "react";
// import { useState, useMemo } from "react";

// const App = () => {
//   const [number, setNumber] = useState(0);
//   const [dark, setDark] = useState(false);

//   const doubleNumber = useMemo(() => {
//     return (number);
//   },[number]);

// const themeStyles = useMemo(() => {
//   return {
//     backgroundColor: dark ? "black" : "white",
//     color: dark ? "white" : "black",
//   };
// },[dark] );

// useEffect (() => {
//   console.log("Theme changed");
// }, [themeStyles]);

// return (
//   <div>
//    <input
//     type="number"
//     value={number}
//     onChange= {(e) => setNumber(e.target.value)}
//    />
//    <button onClick={() => setDark ((curr) => !curr)}>Toggle Theme</button>
//    <div style ={themeStyles}>{doubleNumber}</div>
  
//   </div>
// );

// };
// export default App;

//useCallback

// import React, { useState, useCallback } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   // Increment function memoized with useCallback
//   const increment = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []); // No dependencies, so the function is memoized once

//   // Decrement function memoized with useCallback
//   const decrement = useCallback(() => {
//     setCount((prevCount) => prevCount - 1);
//   }, []); // No dependencies, so the function is memoized once

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;

// useContext hook
// import React, { createContext, useContext, useState } from 'react';
// const AuthContext = createContext();
// function AuthProvider({ children }) {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     return (
//         <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
//             {children}
//         </AuthContext.Provider>
//     );
// }
// function LoginButton() {
//     const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
//     return (
//         <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//             {isLoggedIn ? 'Logout' : 'Login'}
//         </button>
//     );
// }
// function App() {
//     return (
//         <AuthProvider>
//             <LoginButton />
//         </AuthProvider>
//     );
// }
// export default App;

//usereducer Hook
import React, { useReducer } from 'react';
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};
function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        </div>
    );
}
export default Counter;
