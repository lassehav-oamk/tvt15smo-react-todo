import React, { Component } from 'react'
import './TodoList.css';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import TodoListNewItem from './TodoListNewItem';

class TodoList extends Component {
    render () {

        let newListItem = null;

        if(this.props.displayNewItemInput)
        {
            newListItem = <TodoListNewItem />;
        }

        return (
            <div>
                <button className="btn btn-primary">Add new</button>
                <TodoListHeader />
                { newListItem }
                {
                    this.props.todos.map(todo => <TodoListItem key={ todo.id }
                                                    dueDate={ todo.dueDate }
                                                    description={ todo.description }
                                                    type={ todo.type } />)
                }
            </div>
        )
    }
}

export default TodoList