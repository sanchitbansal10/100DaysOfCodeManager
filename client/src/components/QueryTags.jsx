import React , { Component } from 'react';
import axios from 'axios';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import QueryMultiple from './QueryMultiple';
import ShowQuery from './ShowQuery';
import '../styles/index.css'

class QueryTags extends Component{
    constructor(){
        super()
        this.state={
            tags:'',
            data:[]
        }
    }
    tagChange(event){
        this.setState({tags:event.target.value})
    }

    submitReq(){
        axios.get(`/extractTags?tag=${this.state.tags}`)
        .then((response)=>{
            this.setState({data:response.data})
        })
    }

    render(){
        return(
            <div>
                <input type="text" placeholder='enter the tag' onChange={this.tagChange.bind(this)}/>
                <input type="submit" onClick={this.submitReq.bind(this)}/>
                <div className="right-panel">
                    {this.state.data.map(
                        (element)=>{
                        return <ShowQuery content={element}/>
                        }
                    )} 
                </div>
            </div>
        )
    }
}

export default QueryTags