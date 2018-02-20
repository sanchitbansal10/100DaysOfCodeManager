import React , { Component } from 'react';
import axios from 'axios';
import ShowQueryFancy from './ShowQueryFancy'

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
        this.extractMultiple= this.extractMultiple.bind(this)
        this.onNumberChange= this.onNumberChange.bind(this)
        this.setToggle = this.setToggle.bind(this)
    }

    onDateChange(event){
        this.setState({date:event.target.value})
    }

    onNumberChange(event){
        this.setState({number:event.target.value})
    }

    setToggle(){
        console.log('setToggle called')
        this.setState({toggle:true})
    }

     extractMultiple(date){
            axios.get(`/extractMultiple?date=${this.state.date}&number=${this.state.number}`)
            .then((response)=>{
            this.setState({data:response})
            })
            .then(this.setToggle)
        }

    render(){
        return(
            <div>
                <label>Date</label>
                <input type="date" onChange={this.onDateChange}/>
                <input type="number" value= {this.state.number} onChange={this.onNumberChange}/>
                <input type="submit" onClick={(event)=>this.extractMultiple(this.state.date)}/>
                
            </div>
        )
    }
}

export default QueryMultiple