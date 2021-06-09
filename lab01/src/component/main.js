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
import imgData from './data.json'
import Form from 'react-bootstrap/Form'





class Main extends React.Component{
    


    

    render(){
        return(


        <div>


          <Form>
            <Form.Group controlId="hornsSelected">
              <Form.Label>Number of horns</Form.Label>
              <Form.Control as="select">
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>more than 3</option>
              </Form.Control>
            </Form.Group>
          </Form>
        

            {
                imgData.map((beasts)=>{
                    return(
                        <HornedBeast
                        title={beasts.title}
                        img={beasts.image_url}
                        description={beasts.description}
                        keyword= {beasts.keyword}
                        horns= {beasts.horns}
                        selectedModel={this.props.selectedModel}
                          

                        />
                    )
                })

            }


        </div>
        )
    }
}

export default Main;