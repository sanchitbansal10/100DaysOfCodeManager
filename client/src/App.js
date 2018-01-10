import React, { Component } from 'react';
import Form from './components/Form'
import axios from 'axios'

class App extends Component {

  

  sendPostRequest(req){
    axios.post('/form', req)
    .then(function (response) {
      console.log('response')})
    .catch(err => {
      console.error(err);
    });
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
