//app.js for rendering multiple components
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Service from './components/Service';
// import Contact from './components/Contact';

// function App() {
//   return (
//     <div className="App">
//     <Home/>
//     <About/>
//     <Service/>
//     <Contact/>
//     </div>
//   );
// }

// export default App;





//app.js for routing multi[ple components
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./components/Router/Home";
// import About from "./components/Router/About";
// import Contact from "./components/Router/Contact";

// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;





//app.js for normal calling of different components
import React from 'react'
import BgChanger from './components/BgChanger'

const App = () => {
  return (
    <div>
      <BgChanger/>
    </div>
  )
}

export default App

