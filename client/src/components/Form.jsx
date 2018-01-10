import React, { Component } from "react"
import axios from 'axios'
import Date from "./form-components/Date";
import Time from "./form-components/Time";
import Title from "./form-components/Title";
import Thoughts from "./form-components/Thoughts";
import LinkToWork from "./form-components/LinkToWork";
import Tags from "./form-components/Tags"

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
            tags:''
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
    changeTags(event){
        this.setState({tags:event.target.value})
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
                tags:''
            }
        )
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <Date value={this.state.date} controlFunction={this.changeDate.bind(this)} />
                <Time value={this.state.startTime} controlFunction={this.changeStartTime.bind(this)} />
                <Time value={this.state.endTime} controlFunction={this.changeEndTime.bind(this)} />
                <Title value={this.state.title} controlFunction={this.changeTitle.bind(this)} />
                <Thoughts value={this.state.thoughts} controlFunction={this.changeThoughts.bind(this)} />
                <Thoughts value={this.state.whatILearned} controlFunction={this.changeWhatILearned.bind(this)} />
                <LinkToWork value={this.state.linkToWork} controlFunction={this.changeLinkToWork.bind(this)} />
                <Tags value={this.state.tags} controlFunction={this.changeTags.bind(this)} />
                <input type="submit"/>
            </form>
        )
    }
}

export default Form