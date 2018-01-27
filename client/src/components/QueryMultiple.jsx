import React , { Component } from 'react';
import axios from 'axios';
import ShowQuery from './ShowQuery'

class QueryMultiple extends Component{
    constructor(){
        super()
        this.state={
            date:'',
            number:'',
            toggle:false,
            data:{}
        }
        this.onDateChange= this.onDateChange.bind(this)
        this.extractOne= this.extractOne.bind(this)
        this.onNumberChange= this.onNumberChange.bind(this)
    }

    onDateChange(event){
        this.setState({date:event.target.value})
    }

    onNumberChange(event){
        this.setState({number:event.target.value})
    }

    extractOne(date){
        this.setState({toggle:true},()=>{
            axios.get(`/extractMultiple?date=${this.state.date}&number=${this.state.number}`)
            .then((response)=>{
            this.setState({data:response})
            })})
    }

    render(){
        return(
            <div>
                <label>Date</label>
                <input type="date" onChange={this.onDateChange}/>
                <input type="number" value= {this.state.number} onChange={this.onNumberChange}/>
                <input type="submit" onClick={(event)=>this.extractOne(this.state.date)}/>
                
            </div>
        )
    }
}

export default QueryMultiple