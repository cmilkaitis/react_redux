import React, { Component } from 'react';
import ListTodos from './ListTodos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'play game'}
    ]
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    })

    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];

    this.setState({todos})
  }

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todo's</h1>
        <ListTodos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
