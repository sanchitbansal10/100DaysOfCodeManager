import React, { Component } from 'react';
import Form from './components/Form'
import axios from 'axios'

class App extends Component {

//axios by default send request in contenttype JSON
  sendPostRequest(req){
    axios.post('/form', req)
    console.log('sendPostRequest is called')
  }

  render() {
    return (
      <div>
        <Form sendPostRequest={this.sendPostRequest.bind(this)}/>
      </div>
    );
  }
}

export default App;
