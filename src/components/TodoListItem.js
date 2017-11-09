import React, { Component } from 'react'

class TodoListItem extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4" style={ { textDecoration: this.props.isDone ? 'line-through' : '' } }>
                        { this.props.description }
                    </div>
                    <div className="col-xs-4" style={ { textDecoration: this.props.isDone ? 'line-through' : '' } }>
                        { this.props.dueDate.format('DD.MM.YYYY') }
                    </div>
                    <div className="col-xs-4" style={ { textDecoration: this.props.isDone ? 'line-through' : '' } }>
                        { this.props.type }
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoListItem