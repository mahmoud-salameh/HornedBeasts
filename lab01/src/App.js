import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './component/SelectedBeast';
import imgData from './component/data.json'





class App extends React.Component {

constructor(props) {

  super(props);
  this.state = {
   slectetedProp: {},
   show: false,
   allBeasts: imgData

  }
};

showbeasts = (call) =>{
  let slectetedProp = imgData.find(beast=> beast.title ===call);
  this.setState({ slectetedProp, showbeasts: true});
}

selectedModel = (allprops) =>{
  this.setState({
    show: !this.state.show,
    slectetedProp: allprops
  })
}



  render() {
    return (
      
      <div>
        <Header />

        <Main imgData={imgData}
        selectedModel={this.selectedModel}
        showbeasts={this.showbeasts}
        />

        <Footer />
        <SelectedBeast show={this.state.show}
               slectetedProp={this.state.slectetedProp}
               selectedModel={this.selectedModel}
                   />
                   
      </div>
    )
  }
}
export default App;
