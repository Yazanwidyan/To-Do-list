import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TodoList from '../Container/TodoList/Todolist';
import Home from '../Container/Home/Home';
import Signup from '../Container/Signup/Signup';
import Login from '../Container/Login/Login';


export default function App() {
  return (
    <Router>

        <Switch>
          
        <Route path="/todolist">
            <TodoList />
          </Route>  
        <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
