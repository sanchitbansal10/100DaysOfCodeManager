import React , { Component } from 'react';
import axios from 'axios';
import ShowQuery from './ShowQuery';
import '../styles/index.css'

class Query extends Component{
    constructor(){
        super()
        this.state={
            date:null,
            data:null
        }
        this.onDateChange= this.onDateChange.bind(this)
    }

    componentWillMount(){
        var date = new Date()
        var day = date.getDate()
        if(day<10){
            day=`0${day}`
        }
        var month = date.getMonth()+1 //because date.getMonth return a 0 indexed result(december is 11)
        if(month<10){
            month = `0${month}`
        }
        var year = date.getFullYear()
        date=`${year}-${month}-${day}`
        this.setState({date})
    }

    onDateChange(event){
        this.setState({date:event.target.value},
            ()=>{
        axios.get(`/extractOne?date=${this.state.date}`)
        .then((response)=>{
        this.setState({data:response.data})
        })}
        )
    }


    render(){
        return(
            <div>
                <label>Date</label>
                <input type="date" value={this.state.date} onChange={this.onDateChange}/>
                <ShowQuery content={this.state.data}/>
            </div>
        )
    }
    componentDidUpdate(){

    }
}

export default Query