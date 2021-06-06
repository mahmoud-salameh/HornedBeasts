import React from 'react';
import Main from './main';

class HornedBeasts extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.imageUrl}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
export default HornedBeasts;