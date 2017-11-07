import React, { Component } from 'react'

class TodoListNewItem extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4">
                        <input type="text" />
                    </div>
                    <div className="col-xs-4">
                        <input type="text" />
                    </div>
                    <div className="col-xs-4">
                        <input type="text" />
                        <button className="btn btn-sm btn-success">Save</button>
                        <button className="btn btn-sm">X</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoListNewItem