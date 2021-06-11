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

  constructor (props){

    super(props)
    this.state = {
      cardArray: imgData,
    }
  }
    
  filter = (event)=> {
    event.preventDefault();
    let numOfHorns = event.target.value;
    if (numOfHorns === "Any") {
     this.setState( {cardArray: imgData})

    }
    else{
      this.setState({
      cardArray:imgData.filter( item => item.horns === Number(numOfHorns))
    })}
    
  }

    

    render(){
        return(


        <div>


          <Form>
            <Form.Group controlId="hornsSelected">
              <Form.Label>Number of horns</Form.Label>
              <Form.Control onChange = {this.filter} as="select">
                <option value="Any">Any</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
              </Form.Control>
            </Form.Group>
          </Form>
        

            {
                this.state.cardArray.map((beasts)=>{
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