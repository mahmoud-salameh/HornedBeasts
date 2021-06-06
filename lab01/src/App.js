import React from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
class App extends React.Component {
  render() {
    return (
      
      <div>
        <Header />

        <Main />

        <Footer />
      </div>
    )
  }
}
export default App;
