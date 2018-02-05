import React, { Component } from 'react';
import Form from './components/Form'
import Date from './components/form-components/Date'
import axios from 'axios'
import Query from './components/Query'
import QueryMultiple from './components/QueryMultiple';
import ShowLast10Days from './components/ShowLast10Days'
import QueryTags from './components/QueryTags'
import './index.css'
import { Route,Link,Switch } from 'react-router-dom'


class App extends Component {
//axios by default send request in contenttype JSON
  sendPostRequest(req){
    axios.post('/form', req)
  }

  extractOne(date){
    axios.get(`/extractOne?date=${date}`)
    .then((response)=>{
    })
  }

  render() {
    return (
      <div className="main">
        <div className='left-panel'>
        <Route  path='/' render={props => <Form sendPostRequest={this.sendPostRequest.bind(this)} {...props} />}/>
        <Route exact path='/extract' component={Query} />
        <Link to='/extract'>Search by date</Link>
        </div>
        <div className='right-panel'>
          <Route  path='/' component={ShowLast10Days} />
        </div>
      </div>
    );
  }
}

export default App;
