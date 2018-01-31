import React, { Component } from 'react';
import Form from './components/Form'
import Date from './components/form-components/Date'
import axios from 'axios'
import Query from './components/Query'
import QueryMultiple from './components/QueryMultiple';
import ShowLast10Days from './components/ShowLast10Days'

class App extends Component {

//axios by default send request in contenttype JSON
  sendPostRequest(req){
    axios.post('/form', req)
    console.log('sendPostRequest is called')
    console.log(req)
  }

  extractOne(date){
    axios.get(`/extractOne?date=${date}`)
    .then((response)=>{
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <Form sendPostRequest={this.sendPostRequest.bind(this)}/>
        <Query extractOne= {this.extractOne.bind(this)} />
        <QueryMultiple />
        <ShowLast10Days />
      </div>
    );
  }
}

export default App;
