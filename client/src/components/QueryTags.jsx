import React , { Component } from 'react';
import axios from 'axios';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import QueryMultiple from './QueryMultiple';
import ShowQueryFancy from './ShowQueryFancy';
import '../styles/index.css'
import ShowQueryFromTags from './ShowQueryFromTags';

class QueryTags extends Component{
    constructor(){
        super()
        this.state={
            tag:null,
            showQuery:false
        }
        this.callback=this.callback.bind(this)
    }

    
    tagChange(event){
        this.setState({tag:event.target.value})
    }

    submit(){
        this.setState({showQuery:true})
    }

    callback(tag){
        this.setState({tag:tag})
    }


    render(){
      
        return(<div>
            <input type="text" onChange = {this.tagChange.bind(this)}/><input type="button" onClick={this.submit.bind(this)}/>
            {this.state.showQuery?<ShowQueryFromTags renderedFromQueryTags={true}tag = {this.state.tag} callback={this.callback} />:null}
            </div>
        )
    }
}

export default QueryTags