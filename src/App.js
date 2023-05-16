import React from 'react'
import './App.css'
import Profile from './Components/Profile';
import Button from './Components/Profile/Button';


 function App() {
  const fullname = "sdiri oumayma";
  const bio = "learning web development to improve my skills";
  const profession = "IT student"
  const handleName=(name)=>alert(name)
   return (
     <div style={{textAlign: "center"}}>
    <Profile fullname={fullname} bio={bio} profession={profession}> 
    <img src='https://blankhearts.com/wp-content/uploads/2022/10/girl-whatsapp-dp-15.jpg' alt='profile pic'></img>
    </Profile>
   
     <Button handleName={handleName} fullname="sdiri oumayma" />
      </div>
    

   );
 }

 export default App
 