import React from 'react'
import Mainpage from './Components/Mainpage'
import{Route,Routes}from 'react-router-dom'
import Mealinfo from './Components/Mealinfo'


const App = () => {

  
  return (
    // <Mainpage/>
    <Routes>    
     <Route path='/' element={<Mainpage/>}/>
     <Route path='/:mealid' element={<Mealinfo/>}/>
   </Routes>
   

);
}
// import React from 'react'
// import Mainpage from './Components/Mainpage'
// const App = () => {
//   return (
//     <div>
//       <Mainpage />
//     </div>
//   )
// }
export default App;