import React from 'react';
import '../showData.css'

const ShowQuery = (props)=>{
    if(props.content!==null){
        return(
    <div>
        <table>
            <tr>
                <th>date</th>
                <td>{props.content.date}</td>
            </tr>
        {props.content.startTime!==""?
            <tr>
                <th>from</th>
                <td>{props.content.startTime}</td>
            </tr>
        :null}

        {props.content.endTime!==""?
            <tr>
                <th>to</th>
                <td>{props.content.endTime}</td>
            </tr>
        :null}

        {props.content.title!==""?
            <tr>
                <th>title</th>
                <td>{props.content.title}</td>
            </tr>
        :null}

        {props.content.thoughts!==""?
            <tr>
                <th>thoughts</th>
                <td>{props.content.thoughts}</td>
            </tr>
        :null}

        {props.content.whatILearned!==""?
            <tr>
                <th>whatILearned</th>
                <td>{props.content.whatILearned}</td>
            </tr>
        :null}

        {props.content.linkToWork!==""?
            <tr>
                <th>linkToWork</th>
                <td>{props.content.linkToWork}</td>
            </tr>
        :null}

        {props.content.tags!==""?
            <tr>
                <th>tags</th>
                <td>{props.content.tags}</td>
            </tr>
        :null}
        </table>
    </div>)}
    else {
        return null
    }
}

export default ShowQuery