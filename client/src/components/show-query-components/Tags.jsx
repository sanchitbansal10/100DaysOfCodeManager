import React,{Component} from 'react';
import axios from 'axios';
import ShowQueryFancy from '../ShowQueryFancy';
import { Route,Link,Switch } from 'react-router-dom'
/* let Tags = (props)=>(
    <div>{props.tags.map((item)=><button className="tags-item">{item}</button>)}</div>
) */

class Tags extends Component{
    constructor(){
        super()
        this.submitTag=this.submitTag.bind(this)
    }
    submitTag(item){
        this.props.callback(item)
    }

    render(){
        /* return( this.state.data==null?
        <div>{this.props.tags.map((item)=><button onClick={()=>this.submitTag(item)} className="tags-item">{item}</button>)}</div>:
        <ShowQueryFancyFancy content={this.state.data} />
    ) */
    return(
        <div>{this.props.tags.map((item)=><button  onClick={()=>this.submitTag(item)} className="tags-item">{item}</button>)}</div>
    )
    }
}

export default Tags