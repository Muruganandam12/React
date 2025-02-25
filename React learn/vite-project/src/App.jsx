import User from "./User";

function App(){
  //return <h1>App</h1>
 /*react fragement 
 return (
  <> 
  <h1>Welcome</h1>
  <h2>to my</h2>
  <h3>Website</h3>
  </>
 );*/
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
/*function Hello(){
  return <h1>Hello World</h1>
}

export {Hello,App}*/
export default App; 

