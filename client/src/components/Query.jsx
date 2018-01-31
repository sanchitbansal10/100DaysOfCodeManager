import React , { Component } from 'react';
import axios from 'axios';
import ShowQuery from './ShowQuery'

class Query extends Component{
    constructor(){
        super()
        this.state={
            date:'',
            toggle:false,
            data:{}
        }
        this.onDateChange= this.onDateChange.bind(this)
        this.extractOne= this.extractOne.bind(this)
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

    extractOne(date){
        this.setState({toggle:true})
    }

    render(){
        return(
            <div>
                <label>Date</label>
                <input type="date" onChange={this.onDateChange}/>
                {console.log(this.state.data)}
                <input type="submit" onClick={(event)=>this.extractOne(this.state.date)}/>
                {this.state.toggle?<ShowQuery content={this.state.data}/>:null}
            </div>
        )
    }
    componentDidUpdate(){

    }
}

export default Query