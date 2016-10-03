import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export class TodoApp extends Component {

  render() {
    return (
      <div>
        <div className="page-actions">
          <a href="#"
            onClick={(e)=>{
              e.preventDefault;
              this.props.startLogout()}}>Logout</a>
        </div>

        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, actions)(TodoApp)
