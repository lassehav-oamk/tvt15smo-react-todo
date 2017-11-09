import React, { Component } from 'react'

class TodoListNewItem extends Component {
    render () {

        const { displayNewItemInput, toggleInputVisibility } = this.props;

        let content = null;
        if(displayNewItemInput)
        {
            content = (<div className="row">
                            <div className="col-xs-4">
                                <input type="text" />
                            </div>
                            <div className="col-xs-4">
                                <input type="text" />
                            </div>
                            <div className="col-xs-4">
                                <input type="text" />
                                <button className="btn btn-sm btn-success">Save</button>
                                <button className="btn btn-sm" onClick={ toggleInputVisibility }>X</button>
                            </div>
                        </div>);
        }
        else
        {
            content = <button className="btn btn-default btn-block" onClick={ toggleInputVisibility }>Add new</button>;
        }

        return (
            <div>
                { content }
            </div>
        )
    }
}

export default TodoListNewItem