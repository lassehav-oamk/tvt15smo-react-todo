import React, { Component } from 'react'

class Menu extends Component {
    render () {

        const { activeView, changeView } = this.props;

        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation"
                        className={ activeView === "tasks" ? "active" : ""}
                        onClick={ () => { changeView('tasks') } }>
                            <a href="#">Tasks</a>
                    </li>
                    <li role="presentation"
                        className={ activeView === "graphs" ? "active" : ""}
                        onClick={ () => { changeView('graphs') } }>
                            <a href="#">Graphs</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu