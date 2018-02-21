import React, { Component } from 'react';
import ShowQueryFancy from './ShowQueryFancy'
import axios from 'axios'
import ShowQueryFromTags from './ShowQueryFromTags';

class ShowLast10Days extends Component{
    constructor(){
        super()
        this.state={
            data:[],
            renderQueryTag:false,
            tag:null
        }
        this.callback = this.callback.bind(this)
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

    callback(tag){
        this.setState({renderQueryTag:true,tag:tag})
    }

    render(){
        return(
            <div>{this.state.renderQueryTag?<ShowQueryFromTags callback={this.callback} tag={this.state.tag} />:
            <div>{this.state.data.map(
                    (element)=>{
                       return <ShowQueryFancy callback={this.callback} content={element}/>
                    }
                )}</div>
                }
                
            </div>
        )
        
    }
}

export default ShowLast10Days