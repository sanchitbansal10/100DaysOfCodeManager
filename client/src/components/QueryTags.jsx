import React , { Component } from 'react';
import axios from 'axios';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import QueryMultiple from './QueryMultiple';
import ShowQueryFancy from './ShowQueryFancy';
import '../styles/index.css'

class QueryTags extends Component{
    constructor(){
        super()
        this.state={
            tag:null,
            data:[],
            preDefinedTags:false
        }
    }

    componentWillMount(){
        if (this.props.match.params.item!==undefined){
            this.setState({preDefinedTags:true,tag:this.props.match.params.item},()=>{
                axios.get(`/extractTags?tag=${this.state.tag}`)
                .then((response)=>{
                    this.setState({data:response.data})
            })}
            )
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

    componentWillReceiveProps(nextProp){
        this.setState({tag:nextProp.match.params.item},()=>{
            axios.get(`/extractTags?tag=${this.state.tag}`)
            .then((response)=>{
                this.setState({data:response.data})
        })}
        )
    }
    render(){

        return(
            <div>
                {this.state.preDefinedTags?
                    <div className="right-panel">
                        {this.state.data.map(
                            (element)=>{
                            return <ShowQueryFancy content={element}/>
                            }
                        )}
                    </div>:
                <div>
                    <input type="text" placeholder='enter the tag' onChange={this.tagChange.bind(this)}/>
                    <input type="submit" onClick={this.submitReq.bind(this)}/>
                    <div className="right-panel">
                        {this.state.data.map(
                            (element)=>{
                            return <ShowQueryFancy content={element}/>
                            }
                        )}
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default QueryTags