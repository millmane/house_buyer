import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
// import LoginForm from './login_form';
import Greeting2 from './greeting2.jsx'


class LoginModal extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      modalIsOpen: false
    }
    this.customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
      }
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render(){
    return(
      <li>
        <button type="button" className="btn btn-primary btn-outline" onClick={this.openModal}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={this.customStyles} >
        </Modal>
      </li>
    )
  }
}

module.exports = LoginModal;
