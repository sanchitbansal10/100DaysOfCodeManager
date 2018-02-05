import React , { Component } from 'react';
import axios from 'axios';
import ShowQuery from './ShowQuery';
import '../index.css'

class Query extends Component{
    constructor(){
        super()
        this.state={
            date:'',
            data:null
        }
        this.onDateChange= this.onDateChange.bind(this)
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
                <input type="date" onChange={this.onDateChange}/>
                {console.log(this.state.data)}  
                <ShowQuery className='right-panel' content={this.state.data}/>
            </div>
        )
    }
    componentDidUpdate(){

    }
}

export default Query