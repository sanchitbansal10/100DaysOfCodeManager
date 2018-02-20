import React,{Component} from 'react';

class ShowDate extends Component{

    render(){
        let date = new Date(this.props.date)
        let day = date.getDay()
        let dayArr = ['Sunday','Monday','Tuesday','Wednesdy','Thursday','Friday','Saturday']
        let locale = "en-us";
        let month = date.toLocaleString(locale, { month: "long" })
        day = dayArr[day]
        return(
            <div className='show-date-main'>
                <div className='left-side-time'>
                    {this.props.startTime==null?null:<div >{this.props.startTime}</div>}
                </div>
                <div className='middle'>
                    <div className ='number big'>{this.props.date.slice(8)}</div>
                    <div className ='words'>{month}</div>
                    <div className ='words'>{this.props.date.slice(0,4)}</div>
                </div>
                <div className='right-side-time'>
                {this.props.endTime==null?null:<div >{this.props.endTime}</div>}
                </div>
            </div>
        )
    }
}

export default ShowDate