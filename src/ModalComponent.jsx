import React, {Component} from 'react';
import ReactDOM from "react-dom";
import ReactFocusTrap from "focus-trap-react";
import classnames from 'classnames'
import './Styles.css'

class Modal extends Component {
  state = {isModalOpen: false};

  onModalOpen = () => {
    this.setState({isModalOpen: true}, () => {
      // Sets the focus on the close modal button
      if (this.closeModalButton) {
        this.closeModalButton.focus();
      }
    });
  };

  onModalClose = () => {
    this.setState({isModalOpen: false});
    // Sets the focus back on the open modal button
    this.openModalButton.focus();
  };

  onClickOutside = (event) => {
    // Close only when the user clicks outside the modal: "modalNode"
    if (this.modalNode && this.modalNode.contains(event.target)) {
      return
    }
    this.onModalClose();
  };

  onKeyDown = ({keyCode}) => {
    // Escape button key code: "27"
    keyCode === 27 && this.onModalClose();
  };

  render() {
    const {isModalOpen} = this.state;
    const {children, component, role, closeButtonPosition, headerColor, hasCloseButton} = this.props;
    return (
      <React.Fragment>
        <div onClick={this.onModalOpen} ref={n => this.openModalButton = n}>
          {children}
        </div>
        {/* Render modal and display in the DOM only when required */}
        {isModalOpen &&
        <ModalContent
          buttonRef={n => this.closeModalButton = n}
          modalRef={n => this.modalNode = n}
          content={component}
          closeButtonPosition={closeButtonPosition}
          headerColor={headerColor}
          hasCloseButton={hasCloseButton}
          onClickOutside={this.onClickOutside}
          onKeyDown={this.onKeyDown}
          onModalClose={this.onModalClose}
          role={role}
        />
        }
      </React.Fragment>
    );
  }
}

const ModalContent = ({
                        buttonRef,
                        content,
                        modalRef,
                        onClickOutside,
                        onKeyDown,
                        onModalClose,
                        role = "document",
                        closeButtonPosition,
                        headerColor,
                        hasCloseButton
                      }) => {
  return ReactDOM.createPortal(
    <ReactFocusTrap
      focusTrapOptions={{onDeactivate: onModalClose}}
      className="modal-overlay"
      role={role}
      aria-modal="true"
      onKeyDown={onKeyDown}
      onClick={onClickOutside}>
      <div className="modal-container" ref={modalRef}>
        <div className={classnames('modal-header', {'dark': headerColor === 'dark'})}>
          {hasCloseButton ? (
            <button className={classnames('modal-close-button', {'left': closeButtonPosition === 'left'})}
                    aria-labelledby="close-modal"
                    onClick={onModalClose}
                    ref={buttonRef}>
              <span id="close-modal" className="hide-for-accessibility">Close Modal</span>
              <svg viewBox="0 0 40 40" className="close-icon">
                <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>
              </svg>
            </button>) : null}
        </div>
        <div className="modal-body">
          {content}
        </div>
      </div>
    </ReactFocusTrap>,
    document.body
  );
};

export default Modal;
