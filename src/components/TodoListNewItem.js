import React, { Component } from 'react'

class TodoListNewItem extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            inputDescription: "",
            inputDueDate: "",
            inputType: ""
        }
        this.changeDescription = this.changeDescription.bind(this);
        this.changeDueDate = this.changeDueDate.bind(this);
        this.changeType = this.changeType.bind(this);
        this.saveItem = this.saveItem.bind(this);
    }

    changeDescription(event)
    {
        console.log(event.target.value);
        this.setState({ inputDescription: event.target.value });
    }

    changeDueDate(event)
    {
        this.setState({ inputDueDate: event.target.value });
    }

    changeType(event)
    {
        this.setState({ inputType: event.target.value });
    }

    saveItem()
    {
        this.props.addNewItem(this.state.inputDescription, this.state.inputDueDate, this.state.inputType);
    }

    render () {

        const { displayNewItemInput,
                toggleInputVisibility } = this.props;

        let content = null;
        if(displayNewItemInput)
        {
            content = (<div className="row">
                            <div className="col-xs-4">
                                <input type="text"
                                       value={ this.state.inputDescription }
                                       onChange={ this.changeDescription } />
                            </div>
                            <div className="col-xs-4">
                                <input type="date"
                                       value={ this.state.inputDueDate }
                                       onChange={ this.changeDueDate }/>
                            </div>
                            <div className="col-xs-4">
                                <input type="text"
                                       value={ this.state.inputType }
                                       onChange={ this.changeType }/>
                                <button className="btn btn-sm btn-success" onClick={ this.saveItem }>Save</button>
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