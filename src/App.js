import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';

class App extends Component {

  constructor(props)
  {
    super(props);

    let data = [{"dueDate":"2017-10-18T21:00:00.000Z","isDone":false,"description":"Post items","type":"chore","id":"5086441721823232"},{"type":"chore","dueDate":"2017-10-30T00:00:00.000Z","isDone":false,"description":"Get milk","id":"5629499534213120"},{"dueDate":"2017-10-24T21:00:00.000Z","isDone":false,"description":"fsfs","type":"fsf","id":"5634472569470976"},{"dueDate":"2017-10-17T21:00:00.000Z","isDone":false,"description":"test","type":"t","id":"5639445604728832"},{"isDone":false,"description":"testing","type":"s","dueDate":"2017-10-27T21:00:00.000Z","id":"5644406560391168"},{"isDone":false,"description":"Buy winter tyres","type":"car","dueDate":"2017-10-31T22:00:00.000Z","id":"5649391675244544"},{"dueDate":"2017-10-26T21:00:00.000Z","isDone":false,"description":"jepu","type":"test","id":"5654313976201216"},{"isDone":false,"description":"asdfasdf","type":"x","dueDate":"2017-10-01T21:00:00.000Z","id":"5659313586569216"},{"isDone":false,"description":"blah","type":"test","dueDate":"2017-10-26T21:00:00.000Z","id":"5664248772427776"},{"isDone":false,"description":"Graphing","type":"test","dueDate":"2017-10-26T21:00:00.000Z","id":"5668600916475904"},{"dueDate":"2017-10-25T21:00:00.000Z","isDone":false,"description":"test man","type":"dummy","id":"5700305828184064"},{"isDone":false,"description":"Learn React","type":"learn","dueDate":"2017-11-06T13:18:02.000Z","id":"5707702298738688"},{"isDone":false,"description":"Opettele react","type":"learn","dueDate":"2017-11-01T22:00:00.000Z","id":"5720147234914304"},{"type":"xx","dueDate":"2017-10-30T22:00:00.000Z","isDone":false,"description":"refactoring","id":"5732568548769792"}];
    for(let i = 0; i < data.length; i++)
    {
      data[i].dueDate = moment(data[i].dueDate);
    }

    this.state = {
      isNewInputVisible: false,
      todoItems: data
    };
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <TodoList
              displayNewItemInput={ this.state.isNewInputVisible }
              todos={ this.state.todoItems }
          />
        </div>
      </div>
    );
  }
}

export default App;
