import React,{ Component} from 'react';
import '../styles/showQuery.css'
import ShowDate from './show-query-components/ShowDate';
import Title from'./show-query-components/Title'
import Thoughts from'./show-query-components/Thoughts'
import WhatILearned from './show-query-components/WhatILearned'
import LinkToWork from './show-query-components/LinkToWork';
import Tags from './show-query-components/Tags';
class ShowQueryFancy extends Component{
    constructor(){
        super();
      
    }

    callback(tag){
       this.props.callback(tag)
    }
    //showQueryFancy takes a callback function that deals with tag manipulation
    
    render(){
        return(
            <div>
            {this.props.content!==null?
            <div className="show-query-main">
                {/* <ShowDate date={this.props.content.date} startTime={this.props.content.startTime} endTime={this.props.content.endTime} />    */}
            <div className="show-date-main"><ShowDate date={this.props.content.date} startTime={this.props.content.startTime} endTime={this.props.content.endTime} /></div>
            <div className="col-2row-1 head">Title</div>
            <div className="col-2row-2 head">Thoughts</div>
            <div className="col-2row-3 head">What I Learned</div>
            <div className="col-2row-4 head">Links To Work</div>
            <div className="col-2row-5 head">Tags</div>
            <div className="col-3row-1 stuff"><Title title={this.props.content.title}/></div>
            <div className="col-3row-2 stuff"><Thoughts thoughts={this.props.content.thoughts}/></div>
            <div className="col-3row-3 stuff"><WhatILearned learned={this.props.content.whatILearned} /></div>
            <div className="col-3row-4 stuff"><LinkToWork linkToWork={this.props.content.linkToWork}/></div>
            <div className="col-3row-5 stuff"><Tags callback={this.callback.bind(this)} tags={this.props.content.tags}/></div>
            </div>:null}
            </div>
        )
    }
}

export default ShowQueryFancy