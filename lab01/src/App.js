import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast';
import imgData from './component/data.json';




class App extends React.Component {

constructor(props) {

  super(props);
  this.state = {

    beastArray: imgData, show: false,

  }
}

closeIfFalse = ()=> {
  this.setState({show:false})
}
openIfTrue = ()=> {
  this.setState({show:true})
}





  render() {
    return (
      
      <div>
        <Header />

        <Main beastArray = {this.state.beastArray} openIfTrue={this.openIfTrue}/>

        <Footer />
        <SelectedBeast show={this.state.show}
                closeIfFalse={this.closeIfFalse}
                  title={imgData.title}
                  img={imgData.img}
                   description={imgData.description} 
                   keyword={imgData.keyword}
                   horns={imgData.horns}
                   />
                   
      </div>
    )
  }
}
export default App;
