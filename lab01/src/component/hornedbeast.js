import React from 'react';

import Card from 'react-bootstrap/Card';

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
            <Card style={{ width: '18rem' ,background: 'black', color: 'white' }}>
             <Card.Img variant="top" 
             onClick={()=>{
                this.numOfVotes();
                this.props.selectedModel(this.props);
             }}
             src={this.props.img} alt={this.props.title} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              number of votes  = {this.state.poll}
             </Card.Text>

             <Card.Text>
              {this.props.description}
              {this.props.keyword} 
                {this.props.horns}
             </Card.Text>
             
             </Card.Body>
             </Card>
        </div>
        )
        }
} 

export default HornedBeast;