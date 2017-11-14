import React, { Component } from 'react'
import './TodoList.css';
import TodoListHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import TodoListNewItem from './TodoListNewItem';

class TodoList extends Component {

    render () {

        const { todos, toggleItemIsDone, ...rest } = this.props;

        return (
            <div>
                <TodoListHeader />
                <TodoListNewItem {...rest} />
                {
                    todos.map(todo => <TodoListItem key={ todo.id }
                                                    toggleItemIsDone={ toggleItemIsDone }
                                                    { ...todo }/>)
                }
            </div>
        )
    }
}

export default TodoList