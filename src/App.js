// import React, { useEffect } from 'react'
// import { Switch, Route } from "react-router-dom";
// import Datatable from './Datatable'
// import './App.css';

// // import Register from '.'


//  const App = () => {

//   return (
//     <>
//       <div id="main-content">
//       <Datatable/>

//       </div>
//     </>

//   )
// }
// export default App;


// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;



import { Switch } from '@mui/material';
import { BrowserRouter, Route, Router } from 'react-router-dom'
import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Epp from './components/pages/Epp'



function App() {

  return (
  
      
        <div class="row row-offcanvas row-offcanvas-left">
          <Navbar/>
          <Sidebar/>
          <Dashboard/>
          <Switch>
            <Router>
              {/* <Route exact path="/dashboard" component={Dashboard} /> */}
              <Route exact path="/Epp" component={Epp} />
            </Router>
          </Switch>  
        </div>
      
    

    // <div>

    // <div class="container-fluid" id="main">
    //   <div class="row row-offcanvas row-offcanvas-left">

    //     <Navbar />
    //     <Sidebar />
    //     <Dashboard />


    //   </div>
    // </div>


    // </div>

    //  <>
    // <Router>
    //  
    // <Navbar />
    //  <Sidebar />
    //  <Dashboard /> 
    // <Switch>
    //  <Route exact path="/"  component={Dashboard } />
    // <Route exact path="/Epp" component ={Epo} />
    // </Switch>
    // </Router>
    // </>   

  );
}

export default App



