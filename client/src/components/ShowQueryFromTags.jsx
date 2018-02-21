import React , {Component} from 'react';
import ShowQueryFancy from './ShowQueryFancy';
import axios from 'axios';

class ShowQueryFromTags extends Component{
    constructor(){
        super()
        this.state={
            content:null,
        }
        this.callback=this.callback.bind(this)
    }

    componentWillMount(){
        axios.get(`/extractTags?tag=${this.props.tag}`)
            .then((response)=>{
                this.setState({content:response.data})
            })
    }

    callback(tag){
        if(this.props.renderedFromQueryTags){
            this.props.callback(tag)
        }
    }

    componentWillReceiveProps(nextProps){
        axios.get(`/extractTags?tag=${nextProps.tag}`)
            .then((response)=>{
                this.setState({content:response.data})
            })
    }

    render(){
        return(
            <div>
                {this.state.content==null?<span>Loading</span>:<div>{this.state.content.map((content)=><ShowQueryFancy callback={this.callback} content={content} />)}</div>}
            </div>
        )
    }

}

export default ShowQueryFromTags