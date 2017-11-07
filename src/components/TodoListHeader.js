import React, { Component } from 'react'

class TodoListHeader extends Component {
    render () {
        return (
            <div>
                <div className="row header">
                    <div className="col-xs-4">
                        Task
                    </div>
                    <div className="col-xs-4">
                        Due date
                    </div>
                    <div className="col-xs-4">
                        Type
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoListHeader