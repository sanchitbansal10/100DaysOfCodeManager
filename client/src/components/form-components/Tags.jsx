import React,{ Component} from 'react'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'

class Tags extends Component{
    constructor(props){
        super(props)
        this.state={tags:[]}
    }

    handleChange(tags) {
        this.setState({tags})
    }

    render(){
        return(
            <div>
                <label>Tags</label>
                <TagsInput value={this.state.tags} onChange={this.handleChange.bind(this)} />
            </div>
        )
    }
}
export default Tags