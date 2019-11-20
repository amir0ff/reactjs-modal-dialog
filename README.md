# ⚛ React.js Modal Dialog

A generic React.js modal dialog component

### Features:
* ✅ The modal is appended to the document.body [(using React Portals)](https://reactjs.org/docs/portals.html).
* ✅ Hitting the `Esc` key close the modal.
* ✅ Focus is set on the modal's close button when open.
* ✅ When closed, the focus is restored on the element that initiated the modal.
* ✅ When opened, all interaction for screen readers is blocked outside the modal.
* ✅ Clicking outside the modal box closes it.
* ✅ The modal has the relevant accessibility attributes [(WAI-ARIA)](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html).

## Install:
`npm install reactjs-modal-dialog`

## Example:
Import in your React component:

```
import Modal from 'reactjs-modal-dialog'

<Modal component={<h1>Testing</h1>} hasCloseButton={true} closeButtonPosition="left" headerColor="dark">
  <button type="button" className="dialog-btn">
    Open Modal
  </button>
</Modal>
```
- `component`: can be any valid React element
- `hasCloseButton`: can be either `false` or `true` (default is false)
- `headerColor`: sets the modal's header color - possible values: `dark` (default is `white`)
- `closeButtonPosition`: sets the position of the close button - possible values: `left` (default is `right`)
- The modal must be wrapped around an element that initiates it

---
Created with ❤ by [Amir Off](https://github.com/amiroffme).
