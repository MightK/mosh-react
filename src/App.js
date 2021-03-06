import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import {Route,Redirect,Switch} from "react-router-dom";
import Customers from './components/customers';
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/navbar";
import MovieForm from "./components/movieform";
import LoginForm from './components/loginForm';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="movies"/>
            <Redirect to="not-found"/>
          </Switch>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
