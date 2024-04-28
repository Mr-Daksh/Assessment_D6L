import React from 'react'


const Home = () => {
  return (
    <div>
    <h1>This is Home Page</h1>
    </div>
  )
}

   
export default Home



//for dynamic routing, using navigate
// import React from 'react'
// import { useNavigate } from 'react-router-dom'


// const Home = () => {
//     const navigate = useNavigate(); 
//     const changeRoute = ()=>{
//         navigate('/about'); 
//     }
//   return (
//     <div>
//     <h1>This is Home Page</h1>
//       <button onClick={changeRoute}>Go to About</button>
//     </div>
//   )
// }

   
// export default Home


