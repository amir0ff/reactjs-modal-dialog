import React from 'react';
import {render} from 'react-dom';
import Modal from 'reactjs-modal-dialog'
import './Styles.css'

render(
  <div>
    <h2>React.js Modal Dialog Component Demo</h2>
    <Modal component={<h1>Testing</h1>} hasCloseButton={true} closeButtonPosition="left" headerColor="dark">
      <button type="button" className="dialog-btn">
        Open Modal
      </button>
    </Modal>
  </div>,
  document.getElementById('app')
);
