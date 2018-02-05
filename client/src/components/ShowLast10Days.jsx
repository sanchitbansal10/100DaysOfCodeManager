import React, { Component } from 'react';
import ShowQuery from './ShowQuery'
import axios from 'axios'

class ShowLast10Days extends Component{
    constructor(){
        super()
        this.state={data:[]}
    }

    componentDidMount(){
        let date=new Date()
        let day = date.getDate()
        if(day<10){
            day=`0${day}`
        }
        let month = date.getMonth()+1 //because date.getMonth return a 0 indexed result(december is 11)
        if(month<10){
            month = `0${month}`
        }
        let year = date.getFullYear()
        date=`${year}-${month}-${day}`

        axios.get(`/extractMultiple?date=${date}&number=${10}`)
            .then((response)=>{
            this.setState({data:response.data})
            })
    }
    render(){
        return(
            <div>
                {this.state.data.map(
                    (element)=>{
                       return <ShowQuery content={element}/>
                    }
                )}
            </div>
        )
        
    }
}

export default ShowLast10Days