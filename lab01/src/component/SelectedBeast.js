import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
class SelectedBeast extends React.Component {
  
  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title >
              {this.props.slectetedProp.title}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Card style={{ width: '18rem', background: 'black', color: 'white'}}>
            <Card.Img variant="top" src={this.props.slectetedProp.img} alt={this.props.slectetedProp.title} />
             <Card.Body>
               <Card.Title>{this.props.slectetedProp.title}</Card.Title>
               <Card.Text>
                 {this.props.slectetedProp.description} {this.props.slectetedProp.keyword} {this.props.slectetedProp.horns}
               </Card.Text>
               </Card.Body> 
               </Card>
               </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.selectedModel} >Close</Button>
          </Modal.Footer>
          
        </Modal>
      </div>
    )
  }
}



export default SelectedBeast;