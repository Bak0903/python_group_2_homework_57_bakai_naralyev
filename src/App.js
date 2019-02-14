import React, { Component } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import Alert from './components/UI/Alert/Alert';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Modal: false,
            Alert: true,
        }
  };

  showModal = () => {
    this.setState({Modal: true});
  };

  cancelModal = () => {
    this.setState({Modal: false});
  };

  showAlert = () => {
    this.setState({Alert: true});
  };

  cancelAlert = () => {
    this.setState({Alert: false});
  };

  continueHandler = () => {
      alert("Clicked continue!")
  };

  render() {
    const Buttons = {
        ModalButton: {type: 'modal_button', label: 'Modal', clicked: this.showModal},
        Success: {type: 'Success', label: 'Continue', clicked: this.continueHandler},
        Danger: {type: 'Danger', label: 'Close', clicked: this.cancelModal},
        CloseAlert: {type: 'Danger', label: 'Close', clicked: this.cancelAlert},
    };

   return (
      <div className={"App"}>
          <Button
              buttonType={Buttons.ModalButton}
          >
              Press
          </Button>
          <Modal
              buttons={Buttons}
              show={this.state.Modal}
              closed={this.showCancelHandler}
          >
              <h3>A title</h3>
              <p>Some content</p>
              <p>Continue to checkout?</p>
          </Modal>
          <Alert
              type={"welcome"}
              show={this.state.Alert}
              dismiss={Buttons.CloseAlert}
          >Welcome!</Alert>

      </div>
    )
  }
}

export default App;
