import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class SelectedBeast extends React.Component {
  
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.closeIfFalse} centered>
          <Modal.Header closeButton>
            <Modal.Title >
              {this.props.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img width={480} src={this.props.img} alt={this.props.description} title={this.props.title}/>
            <p>{this.props.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeIfFalse} variant="info">Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SelectedBeast;