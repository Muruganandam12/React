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
// Hook

import React, { useState } from 'react';

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

export default App;