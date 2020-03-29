/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import { HashRouter, Switch, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";


// importation du css
require("../css/app.css");

// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';

console.log("Hello !!!");
//localhost:8000/#/
const App = () => {
  return (
    <HashRouter>
      <Navbar />
          <main className='container pt-5'>
              <Switch>
                <Route path="/project" component={ProjectPage}/>    
                <Route path="/" component={HomePage}/>
            </Switch>
    
      </main>
    </HashRouter>
  );
};
const rootElement = document.querySelector("#app");
ReactDOM.render(<App />, rootElement);
