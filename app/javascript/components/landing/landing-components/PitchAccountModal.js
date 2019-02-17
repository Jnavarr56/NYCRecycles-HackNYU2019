import React from 'react';  
import Modal from 'react-responsive-modal';

class PitchAccountModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal} className="btn btn-info pitch-modal-trigger">
            Would you like email reminders and get fun help being green?
        </button>
        <Modal animationDuration={1000} classNames={{modal:'pitch-account-modal', closeButton: 'pitch-account-modal-close'}} open={open} onClose={this.onCloseModal} center>
          <p>Wonderful! Besides reminders, you can also:</p>
            <ul>
                <li>Scan or search household items you're unsure about recycling</li>
                <li>Rack up points for replying to reminders</li>
                <li>Compare your rankings to other users in your same recycling routes</li>
                <li>Be in the know regarding the latest New York Times environmental policy articles</li>
            </ul>
            <p>
                You'll have to Sign Up/Sign In with Gmail. You can click <a className="btn btn-primary" href="#">here</a> to do so
                and perserve the information we just generated for you.
            </p>
            <br />
            <p>
                You can also go to the main menu but you'll have to reinter your information again later.
            </p>
        </Modal>
      </div>
    );
  }
}

export default PitchAccountModal;
