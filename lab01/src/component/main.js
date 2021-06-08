import React from 'react';
import HornedBeast from './hornedbeast';
import imgData from './data.json';

class Main extends React.Component{
 
    render(){
        
        return(
          <div>
            {
          imgData.map((value)=> {
            return(

           
             
              <HornedBeast 
              title= {value.title}
              img = {value.image_url}
              description={value.description}
              />

              
          )
            
                
            })
      
    }
</div>
        )
    }

  }

export default Main;