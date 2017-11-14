import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemData from './data/itemData';


class App extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      isNewInputVisible: false,
      todoItems: []
    };

    this.toggleInputVisibility = this.toggleInputVisibility.bind(this);
    this.toggleItemIsDone = this.toggleItemIsDone.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  componentDidMount()
  {
    itemData.getItems().then(data => {
      this.setState({ todoItems: data });
    })
    .catch(error => {
      console.log("getItems failed ", error);
    });
  }

  toggleInputVisibility()
  {
    this.setState({ isNewInputVisible: !this.state.isNewInputVisible });
  }

  toggleItemIsDone(itemId)
  {
    itemData.toggleIsDone(itemId).then((data) => {
      this.setState({ todoItems: data });
    })
  }

  addNewItem(description, dueDate, type)
  {
    itemData.addNewItem(description, dueDate, type).then(data => {
      this.setState({ todoItems: data, isNewInputVisible: false });
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <TodoList
              displayNewItemInput={ this.state.isNewInputVisible }
              todos={ this.state.todoItems }
              toggleInputVisibility={ this.toggleInputVisibility }
              toggleItemIsDone={ this.toggleItemIsDone }
              addNewItem={ this.addNewItem }
          />
        </div>
      </div>
    );
  }
}

export default App;
