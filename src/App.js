import React, { Component } from 'react';
import './App.css';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Modal: false,
        }
  };

  showHandler = () => {
    this.setState({Modal: true});
  };

  showCancelHandler = () => {
    this.setState({Modal: false});
  };

  continueHandler = () => {
    alert('You continued!');
  };

  render() {
    const Buttons = {
        ModalButton: {type: 'modal_button', label: 'Modal', clicked: this.showHandler},
        Success: {type: 'Success', label: 'Continue', clicked: this.continueHandler},
        Danger: {type: 'Danger', label: 'Close', clicked: this.showCancelHandler},
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
      </div>
    )
  }
}

export default App;
