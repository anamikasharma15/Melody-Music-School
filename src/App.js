import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import React from "react";

import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import AboutUs from './componants/AboutUs/AboutUs';
import Footer from './componants/Footer/Footer';
import NotFound from './componants/NotFound/NotFound';
import AllProgram from './componants/AllProgram/AllProgram';
import Instructors from './componants/Instructors/Instructors';






function App() {
  return (
    <div>
      <Router>
        <Header></Header>
         <Switch> 

         <Route path="/home">
            <Home></Home>
          </Route>

           <Route exact path='/'>
         <Home></Home>
          </Route> 

      <Route exact path='/programs'>
            <AllProgram></AllProgram>
          </Route>

       <Route path="/instructors">
            <Instructors></Instructors>
          </Route> 

          <Route exact path='/about'>
            <AboutUs></AboutUs>
          </Route>

          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>

          </Switch>
        <Footer></Footer> 

       </Router> 

    </div>
  );
}

export default App;
