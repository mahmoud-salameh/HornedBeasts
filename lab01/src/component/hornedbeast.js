import React from 'react';

class HornedBeast extends React.Component{
    constructor(props){
        super(props);
        this.state={
            poll:0
        }
    }
    
    numOfVotes=() => {
        let value = this.state.poll;
        this.setState({poll:value+=1})
    }

    render(){

        return(
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.img} alt={this.props.keyword} onClick={this.numOfVotes} />
            <p>{this.props.description}</p>
            <p> Number Of Votes : {this.state.poll } </p>
        </div>
        )
        }
} 

export default HornedBeast;