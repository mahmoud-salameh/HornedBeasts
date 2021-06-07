import React from 'react';

class HornedBeast extends React.Component{

    render(){
        
        return(
            <div>
        <div>
            <h2>{this.props.title}</h2>
            <img src={this.props.img} alt={this.props.keyword} />
            <p>{this.props.description}</p>
        </div>
        </div>
        )
        }
} 




export default HornedBeast;