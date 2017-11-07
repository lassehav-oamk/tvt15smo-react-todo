import React, { Component } from 'react'

class TodoListItem extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        { this.props.description }
                    </div>
                    <div className="col-xs-4">
                        { this.props.dueDate.format('DD.MM.YYYY') }
                    </div>
                    <div className="col-xs-4">
                        { this.props.type }
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoListItem