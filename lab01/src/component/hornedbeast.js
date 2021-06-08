import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

        this.props.openIfTrue();
    }

    render(){

        return(
        <div>
            <Card style={{ width: '18rem' , height:'35rem' }}>
             <Card.Img variant="top" src={this.props.img} onClick={this.numOfVotes} />
             <Card.Body>
             <Card.Title>{this.props.title}</Card.Title>
             <Card.Text>
              number of votes  = {this.state.poll}
             </Card.Text>

             <Card.Text>
              {this.props.description}
             </Card.Text>
             {this.props.keyword},
                   {this.props.horns}
             </Card.Body>
             </Card>
        </div>
        )
        }
} 

export default HornedBeast;