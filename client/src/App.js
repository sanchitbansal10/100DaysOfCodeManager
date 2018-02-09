import React, { Component } from 'react';
import Form from './components/Form'
import Date from './components/form-components/Date'
import axios from 'axios'
import Query from './components/Query'
import QueryMultiple from './components/QueryMultiple';
import ShowLast10Days from './components/ShowLast10Days'
import QueryTags from './components/QueryTags'
import './styles/index.css'
import { Route,Link,Switch } from 'react-router-dom'
import Title from './components/Title'
import Account from './components/Account'


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
      <div className="top">
        <div className='top-panel'>
          <Title />
          <Account />
        </div>
        <div className="main">
          <div className='left-panel'>
            <div className='left-nav'>
            <Link className='left-nav-item' to='/submitWork'><div className='but'>Fill Today's Work</div></Link>
            <Link className='left-nav-item' to='/extract'><div className='but'>Search by date</div></Link>
            <Link className='left-nav-item' to='/extractTags'><div className='but'>Search by tags</div></Link>
            </div>
          </div>
          <div className='right-panel'>
            <Route exact path='/submitWork' render={props => <Form sendPostRequest={this.sendPostRequest.bind(this)} {...props} />}/>
            <Route exact path='/' component={ShowLast10Days} />
            <Route exact path='/extract' component={Query} />
            <Route exact path='/extractTags' component={QueryTags} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
