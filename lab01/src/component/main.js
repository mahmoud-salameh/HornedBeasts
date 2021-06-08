// import React from 'react';
// import HornedBeast from './hornedbeast';
// import CardGroup from 'react-bootstrap/CardGroup';

// class Main extends React.Component {

//   render() {

//     return (
//       <div>
//         <CardGroup>
//           {this.props.beastAraay.map((value, index)=>{

//             return ( <HornedBeast title = { value.title }
//             description = { value.description }
//             img = { value.img }
//             openIfTrue = { this.props.openIfTrue }
//             />
//             )
//           })
//     }
//     </CardGroup>
//       </div>
//     )
//   }

// }

// export default Main;

import React from 'react';
import HornedBeast from './hornedbeast';

import CardGroup from 'react-bootstrap/CardGroup';




class Main extends React.Component{
    render(){
        return(


        <div>

        <CardGroup>

    {this.props.beastArray.map((items,index)=>{
    return(<HornedBeast title={items.title} 
                   description={items.description} 
                   img={items.image_url}
                   openIfTrue={this.props.openIfTrue}

                   />)
    })}
       </CardGroup>


        </div>
        )
    }
}

export default Main;