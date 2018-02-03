import React, { Component } from "react"
import axios from 'axios'
import Date from "./form-components/Date";
import Time from "./form-components/Time";
import Title from "./form-components/Title";
import Thoughts from "./form-components/Thoughts";
import LinkToWork from "./form-components/LinkToWork";
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'


class Form extends Component {
    constructor(props) {
        super();
        this.state={
            date:'',
            startTime:'',
            endTime:'',
            title:'',
            thoughts:'',
            whatILearned:'',
            linkToWork:'',
            tags:[]
        }
    }

    changeDate(event){
        this.setState({date:event.target.value})
    }
    changeStartTime(event){
        this.setState({startTime:event.target.value})
    }
    changeEndTime(event){
        this.setState({endTime:event.target.value})
    }
    changeTitle(event){
        this.setState({title:event.target.value})
    }
    changeThoughts(event){
        this.setState({thoughts:event.target.value})
    }
    changeWhatILearned(event){
        this.setState({whatILearned:event.target.value})
    }
    changeLinkToWork(event){
        this.setState({linkToWork:event.target.value})
    }
    handleTags(tags) {
        this.setState({tags})
    }
    handleSubmit(event){
        event.preventDefault();
        var req={
            date:this.state.date,
            startTime:this.state.startTime,
            endTime:this.state.endTime,
            title:this.state.title,
            thoughts:this.state.thoughts,
            whatILearned:this.state.whatILearned,
            linkToWork:this.state.linkToWork,
            tags:this.state.tags
        }
        this.props.sendPostRequest(req)
        this.setState(
            {
                date:'',
                startTime:'',
                endTime:'',
                title:'',
                thoughts:'',
                whatILearned:'',
                linkToWork:'',
                tags:[]
            }
        )
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Date value={this.state.date} controlFunction={this.changeDate.bind(this)} />
                <Time value={this.state.startTime} controlFunction={this.changeStartTime.bind(this)} timeTitle='Start Time' />
                <Time value={this.state.endTime} controlFunction={this.changeEndTime.bind(this)} timeTitle='End Time' />
                <Title value={this.state.title} controlFunction={this.changeTitle.bind(this)} />
                <Thoughts value={this.state.thoughts} controlFunction={this.changeThoughts.bind(this)} title='Thoughts' />
                <Thoughts value={this.state.whatILearned} controlFunction={this.changeWhatILearned.bind(this)} title= 'What I Learned'/>
                <LinkToWork value={this.state.linkToWork} controlFunction={this.changeLinkToWork.bind(this)} />
                <TagsInput value={this.state.tags} onChange={this.handleTags.bind(this)} />
                <input type="submit"/>
            </form>
        )
    }
}

export default Form