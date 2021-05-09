// import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  const addTodo = (title, desc) => {
    console.log(title, desc);
    let no;
    if (todos.length === 0) {
      no = 0;
    } else {
      no = todos[todos.length - 1].no + 1;
    }
    const mytodo = {
      // no: todos.length + 1,
      no: no,
      title: title,
      desc: desc,
    };
    console.log(mytodo.no);
    // todos.push(mytodo);

    settodos([...todos, mytodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // console.log(todos.indexOf(todo));
    settodos(
      todos.filter((e) => {
        // console.log("APP>Jst", todos.length);
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  console.log(inittodo);
  return (
    <>
      <Router>
        <Header title="My First React Todo List" search={true} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
